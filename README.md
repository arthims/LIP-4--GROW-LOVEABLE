# Grow — Weekly Review Pulse

Turn recent App Store + Play Store reviews into a one-page weekly pulse with **top themes, real user quotes, and three action ideas** — then download it as a PDF or send it as a draft email.

Built with **TanStack Start (React 19 + Vite 7)**, **Tailwind CSS v4**, **shadcn/ui**, **Recharts**, and **jsPDF**.

---

## ✨ Features

- **Review ingestion** — Imports App Store + Play Store reviews from the last 8–12 weeks (rating, title, text, date).
- **Theme clustering** — Groups reviews into up to 5 themes (onboarding, KYC, payments, statements, withdrawals, …).
- **One-page weekly pulse** — Top 3 themes, 3 real user quotes, and 3 action ideas.
- **Charts** — Weekly review volume (area) and mentions-by-theme with an average-rating overlay (composed bar + line).
- **PDF report** — Branded one-page PDF generated client-side with `jsPDF`.
- **Draft email** — Auto-generated email from `automail@growtest.com` to a configurable recipient (default `arthipms@gmail.com`), previewable in a modal and copyable to clipboard.
- **Download report** — Save the same PDF locally with one click.

---

## 🚀 Getting started

```bash
# install dependencies
bun install

# start the dev server
bun run dev

# build for production
bun run build

# preview the production build
bun run preview
```

The app runs at `http://localhost:5173` by default.

---

## 🗂 Project structure

```
src/
├── routes/
│   ├── __root.tsx        # Root layout (html/head/body shell)
│   └── index.tsx         # Grow dashboard — hero, charts, report, email preview
├── data/
│   └── reviews.ts        # Mock App Store + Play Store reviews
├── lib/
│   ├── pulse.ts          # Theme summarization, top quotes, action ideas
│   └── utils.ts          # cn() helper
├── components/ui/        # shadcn/ui primitives
├── styles.css            # Tailwind v4 theme tokens (pink-themed)
└── router.tsx            # TanStack Router setup
```

---

## 🧠 How the pulse is built

1. **`src/data/reviews.ts`** holds the raw reviews (replaceable with a real feed).
2. **`src/lib/pulse.ts`**:
   - `summarizeThemes(reviews)` — groups reviews into themes, computes count / avg rating / sentiment / share.
   - `topQuotes(reviews, n)` — picks the most representative quotes.
   - `topActions(themes, n)` — derives concrete action ideas from the leading themes.
3. **`src/routes/index.tsx`** renders the dashboard and assembles the PDF + email body from those three helpers, so the on-screen report, the PDF, and the email always stay in sync.

---

## 📨 Email & PDF

- **PDF** — `buildPdf()` in `src/routes/index.tsx` produces a pink-branded A4 report (pill + sections for themes, quotes, actions, footer) using `jsPDF`. Triggered by **Download report** and **Send report in mail**.
- **Email draft** — A plain-text email mirroring the PDF content (From / To / Subject / body) is shown in the **Preview draft email** modal with **Copy** and **Send now** actions.

> Real outbound email delivery requires a verified sender domain. Today the "send" action triggers the PDF download and a confirmation toast so you have the exact file that would be attached. To wire real delivery, enable Lovable Cloud and verify a sending domain.

---

## 🎨 Design system

- Pink-forward palette defined in `src/styles.css` using `oklch` tokens.
- Semantic Tailwind tokens (`bg-primary`, `text-muted-foreground`, …) — no raw color classes in components.
- Typography and layout tuned for a "website" feel rather than an app shell.

---

## 🧰 Tech stack

| Area        | Choice                                 |
|-------------|----------------------------------------|
| Framework   | TanStack Start v1 (React 19, Vite 7)   |
| Styling     | Tailwind CSS v4 + tw-animate-css       |
| UI          | shadcn/ui (Radix) + lucide-react       |
| Charts      | Recharts (Area + Composed Bar/Line)    |
| PDF         | jsPDF                                  |
| Toasts      | Sonner                                 |
| Forms       | react-hook-form + zod                  |
| Runtime     | Cloudflare Workers (via Vite plugin)   |

---

## 📜 Scripts

| Command            | Description                       |
|--------------------|-----------------------------------|
| `bun run dev`      | Start the dev server              |
| `bun run build`    | Production build                  |
| `bun run build:dev`| Development-mode build            |
| `bun run preview`  | Preview the production build      |
| `bun run lint`     | Run ESLint                        |
| `bun run format`   | Format with Prettier              |

---

## 📄 License

Private project. All rights reserved © Grow.
