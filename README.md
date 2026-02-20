# hotel-site

宿泊施設サイトのAstroプロジェクトです。日本語版/英語版の各ページを提供し、
レスポンシブ対応はSP（〜768px）/PC（1024px以上）を基準に実装しています。

## ディレクトリ構成

```
hotel-site/
├─ public/
│  ├─ fonts/
│  │  └─ shippori-mincho/
│  ├─ images/
│  ├─ videos/
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ Header.astro
│  │  ├─ Footer.astro
│  │  └─ en/
│  │     ├─ Header.astro
│  │     └─ Footer.astro
│  ├─ layouts/
│  │  └─ Layout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ rooms.astro
│  │  ├─ services.astro
│  │  ├─ plans.astro
│  │  ├─ contact-confirm.astro
│  │  ├─ contact-complete.astro
│  │  ├─ privacy-policy.astro
│  │  ├─ terms.astro
│  │  ├─ usage-terms.astro
│  │  ├─ faq.astro
│  │  └─ en/
│  │     ├─ index.astro
│  │     ├─ rooms.astro
│  │     ├─ services.astro
│  │     ├─ plans.astro
│  │     ├─ contact-confirm.astro
│  │     ├─ contact-complete.astro
│  │     ├─ privacy-policy.astro
│  │     ├─ terms.astro
│  │     ├─ usage-terms.astro
│  │     └─ faq.astro
│  └─ styles/
│     ├─ global.css
│     ├─ index.css
│     └─ fonts.css
├─ astro.config.mjs
├─ tailwind.config.mjs
└─ package.json
```

## 使用技術

- Astro
- Tailwind CSS
- HTML / CSS / JavaScript

## 開発コマンド

```bash
npm install
npm run dev
```

## 各ページの設計書

`docs/page-specs.md` に記載しています。

## SEO

- 各ページ共通のメタ情報は `src/layouts/Layout.astro` で管理しています。
- `description` はページ単位で指定可能です。
- `Astro.site` が設定されている場合、`canonical` と `hreflang` を出力します。
