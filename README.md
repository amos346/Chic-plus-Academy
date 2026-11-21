# CHIC-PLUS UNISEX FASHION SCHOOL

An independent fashion training academy and professional educational brand in Nigeria offering world-class practical training in female wear, male wear, children wear, and special crafts.

## Technology Stack

- **React 19** & **ReactDOM**
- **Vite** (Super-fast build tool)
- **TypeScript** (Type safety)
- **Tailwind CSS v4** (Styling)
- **Lucide React** (Icons)
- **Express** (Server-side API proxy)

---

## Project Directory Structure

```
/
├── .env.example
├── .gitignore
├── index.html
/metadata.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json
├── README.md
├── server.ts
├── public/
│   └── assets/
│       └── aistudio/
│           ├── WhatsApp_Image_2026-11-20_at_5.06.29_PM__3__a9a8ca8e.jpeg
│           ├── WhatsApp_Image_2026-11-20_at_5.06.29_PM__2__6b77db47.jpeg
│           ├── WhatsApp_Image_2026-11-20_at_5.06.29_PM__1__eb974780.jpeg
│           ├── WhatsApp_Image_2026-11-20_at_5.06.29_PM_2bed925e.jpeg
│           ├── WhatsApp_Image_2026-11-20_at_5.06.28_PM__2__8ede4310.jpeg
│           ├── WhatsApp_Image_2026-11-20_at_5.06.28_PM__1__921e30ed.jpeg
│           ├── WhatsApp_Image_2026-11-20_at_5.06.28_PM_a25497a6.jpeg
│           ├── WhatsApp_Image_2026-11-20_at_5.06.27_PM__2__930fee8e.jpeg
│           ├── WhatsApp_Image_2026-11-20_at_5.06.27_PM__1__ca5f5901.jpeg
│           └── WhatsApp_Image_2026-11-20_at_5.06.27_PM_c010a03c.jpeg
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    └── assets/
        └── images/
            ├── hero_fashion_academy_*.jpg
            ├── program_haute_couture_*.jpg
            ├── program_streetwear_*.jpg
            ├── program_digital_cad_*.jpg
            └── student_showcase_*.jpg
```

---

## Getting Started & Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## Vercel Deployment Instructions

1. Push this complete project repository to **GitHub**.
2. Log in to **Vercel** and click **New Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect the **Vite** preset with the following settings:
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your live website will be published with all images and assets correctly loaded.
