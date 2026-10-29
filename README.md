# Claim Ready

A free, factual checklist and web application for anyone preparing to file a warranty claim. Decided on facts, in writing.

Built with **Next.js** using the **Emerald Editorial** design system.

---

## Getting Started

### Development Server
```bash
npm start
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run serve
```

---

## Features

- **Emerald Editorial Design System**: Editorial typography (Plus Jakarta Sans & JetBrains Mono), emerald accent palette, rounded pill buttons, and soft shadows.
- **15-Step Interactive Protocol**:
  1. *Phase 01: Before Anything Goes Wrong* (Steps 1–4)
  2. *Phase 02: When The Fault Appears* (Steps 5–7)
  3. *Phase 03: When A Technician Visits* (Steps 8–10)
  4. *Phase 04: If The Claim Is Refused* (Steps 11–15)
- **Live State Persistence**: Completed checklist items are saved automatically to `localStorage`.
- **Print / PDF Ready**: Custom `@media print` stylesheets optimized for one-click printing or PDF export.
- **Copy & Share**: Native Web Share API integration with fallback to clipboard copying.
- **Document Escalation Template**: Standard formal written notice template for consumer disputes.
