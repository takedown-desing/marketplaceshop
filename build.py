#!/usr/bin/env python3
"""Собирает прототип из src/index.src.html, встраивая картинки из assets/ как data-URI.

Артефакт Claude и одиночный HTML-файл не могут грузить внешние изображения,
поэтому превью кейсов зашиваются прямо в разметку.

На выходе два файла:
  src/index.html — фрагмент для публикации артефактом (обёртка сама добавит head)
  index.html     — самостоятельная страница с doctype и viewport, для браузера и деплоя

    python3 build.py
"""
import base64, pathlib, re, sys

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src" / "index.src.html"
OUT = ROOT / "src" / "index.html"
OUT_STANDALONE = ROOT / "index.html"
ASSETS = ROOT / "assets"

MIME = {".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp"}


def data_uri(path: pathlib.Path) -> str:
    mime = MIME.get(path.suffix.lower())
    if not mime:
        raise SystemExit(f"неизвестный формат: {path.name}")
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


def main() -> None:
    html = SRC.read_text(encoding="utf-8")
    names = sorted(set(re.findall(r"\{\{IMG_([A-Za-z0-9_-]+)\}\}", html)))
    if not names:
        print("плейсхолдеров {{IMG_*}} в шаблоне нет")

    missing = []
    for name in names:
        found = next((p for p in ASSETS.iterdir() if p.stem == name and p.suffix.lower() in MIME), None)
        if not found:
            missing.append(name)
            continue
        html = html.replace("{{IMG_%s}}" % name, data_uri(found))
        print(f"  встроен {found.name:<14} {found.stat().st_size // 1024:>4} КБ")

    if missing:
        raise SystemExit("нет файлов в assets/ для: " + ", ".join(missing))

    OUT.write_text(html, encoding="utf-8")

    # шаблон начинается с head-тегов (title, link, style), дальше идёт разметка страницы
    split_at = html.index("<header")
    head_part, body_part = html[:split_at].rstrip(), html[split_at:]

    standalone = (
        '<!doctype html>\n<html lang="ru">\n<head>\n'
        '<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
        '<meta name="description" content="Свой интернет-магазин для селлеров WB, Ozon и Яндекс Маркета '
        'вместо комиссий площадки. Перенос товаров, эквайринг, доставка, МойСклад. Под ключ за 10 дней, 49 900 ₽.">\n'
        "<style>body{margin:0}img{max-width:100%}</style>\n"
        f"{head_part}\n</head>\n<body>\n{body_part}\n</body>\n</html>\n"
    )
    OUT_STANDALONE.write_text(standalone, encoding="utf-8")

    print(f"\n{OUT.relative_to(ROOT)} — {OUT.stat().st_size // 1024} КБ, картинок: {len(names)}")
    print(f"{OUT_STANDALONE.relative_to(ROOT)} — {OUT_STANDALONE.stat().st_size // 1024} КБ, самостоятельная страница")


if __name__ == "__main__":
    sys.exit(main())
