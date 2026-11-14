# CUP2EAT Frontend Demo

A responsive, frontend-only ecommerce prototype built with plain HTML, CSS and JavaScript. No backend, middleware, authentication enforcement, API or payment gateway is connected.

## Run locally

**Option 1:** Open `index.html` directly in a modern browser.

**Option 2 (recommended):** From this folder run:

```bash
python -m http.server 5500
```

Then open http://localhost:5500

## Demo routes

- `#/` — Home
- `#/products` — Product catalogue
- `#/product/chocolate` — Product detail
- `#/cart` — Cart
- `#/checkout` — Simulated checkout
- `#/login`, `#/register` — Customer login / registration demos
- `#/account`, `#/orders`, `#/track-order`, `#/invoices` — Customer pages
- `#/admin-login`, `#/admin`, `#/admin/orders`, `#/admin/products`, `#/admin/inventory`, `#/admin/customers`, `#/admin/invoices`, `#/admin/reports`, `#/admin/settings` — Admin demo pages
- `#/about`, `#/how-it-works`, `#/sustainability`, `#/business`, `#/contact` — Public information pages

Cart and demo orders persist in browser localStorage. All prices, ratings, stock figures, reviews, tax invoice fields and order statuses are sample/demo data and must be confirmed before production. Uploaded reference image crops are reused in `assets/`; because the supplied references are composite screenshots, some source crops may include a small amount of the original image framing. Replace with original high-resolution product photography for final launch.
