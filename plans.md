# PRD — Website Company Profile Konstruksi
**Versi:** 1.0  
**Tanggal:** 2026-03-16  
**Status:** Draft  
**Stack:** React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + React Router v7

---

## 1. Ringkasan Proyek

Website company profile untuk perusahaan konstruksi yang menampilkan identitas perusahaan, layanan, portofolio proyek, tim, dan jalur kontak. Website bersifat multi-page dengan navigasi smooth, desain **Industrial Refined** — dark-dominant dengan aksen gold, tipografi display yang tegas, dan animasi scroll yang profesional.

**Tujuan utama:**
- Membangun kepercayaan dan kredibilitas perusahaan di mata calon klien
- Menampilkan portofolio proyek secara visual dan menarik
- Menyediakan jalur kontak yang mudah dan cepat
- Optimasi SEO dasar untuk pencarian lokal

---

## 2. Stack Teknologi

| Kategori | Library / Tool | Versi | Keterangan |
|---|---|---|---|
| Framework | React | 19 | Dengan fitur compiler bawaan |
| Bahasa | TypeScript | 5.x | Strict mode aktif |
| Build Tool | Vite | 6.x | Fast dev server + HMR |
| Styling | Tailwind CSS | 4.x | Utility-first, no Flux |
| Routing | React Router | v7 | Multi-page SPA |
| Animasi | Framer Motion | 11.x | Scroll animations & entrance |
| Scroll Observer | react-intersection-observer | latest | Trigger animasi saat masuk viewport |
| Form | React Hook Form + Zod | latest | Validasi form kontak |
| Carousel | Swiper.js | 11.x | Galeri proyek & testimoni |
| Maps | @googlemaps/react-wrapper | latest | Embed Google Maps halaman kontak |
| Icons | Lucide React | latest | Ikon SVG konsisten |
| HTTP Client | Axios | latest | Untuk form submission ke API / EmailJS |
| SEO | React Helmet Async | latest | Meta tags per halaman |
| Linting | ESLint + Prettier | latest | Konsistensi kode |

> **CATATAN PENTING UNTUK AI AGENT:**
> - JANGAN gunakan Flux UI — menyebabkan masalah pada code generation
> - Gunakan Tailwind CSS murni dengan custom config untuk token warna
> - Semua komponen dibuat manual sebagai Blade-style custom components (tidak ada UI library eksternal)
> - Framer Motion hanya untuk efek entrance dan scroll, bukan untuk layout

---

## 3. Desain Sistem

### 3.1 Palet Warna

```ts
// tailwind.config.ts
colors: {
  charcoal: {
    DEFAULT: '#1A1A18',
    800: '#2E2E2B',
    700: '#3D3D39',
    600: '#4F4F4A',
  },
  gold: {
    DEFAULT: '#D4A843',
    light: '#E8C06A',
    dark: '#B8892A',
  },
  concrete: {
    DEFAULT: '#8C8C85',
    light: '#AEADA6',
  },
  warm: {
    white: '#F5F3EE',
    offwhite: '#E8E6DF',
  },
}
```

**Aturan penggunaan warna:**
- Section gelap: `bg-charcoal` + teks `text-warm-white` + aksen `text-gold`
- Section terang: `bg-warm-white` + teks `text-charcoal` + aksen `text-gold-dark`
- CTA utama: `bg-gold` + teks `text-charcoal` + hover `bg-gold-light`
- CTA sekunder: `border border-gold` + teks `text-gold` + hover `bg-gold/10`

### 3.2 Tipografi

```ts
// tailwind.config.ts
fontFamily: {
  display: ['"Barlow Condensed"', 'sans-serif'],  // Heading, hero, display
  body: ['"DM Sans"', 'sans-serif'],               // Body text, paragraf
}
```

**Google Fonts import (index.html):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

**Skala tipografi:**

| Token | Font | Size | Weight | Penggunaan |
|---|---|---|---|---|
| `display-xl` | Barlow Condensed | 80–96px | 700 | Hero headline |
| `display-lg` | Barlow Condensed | 56–64px | 700 | Section heading |
| `display-md` | Barlow Condensed | 40–48px | 600 | Sub-section heading |
| `body-lg` | DM Sans | 18px | 400 | Lead paragraph |
| `body-md` | DM Sans | 16px | 400 | Body text |
| `body-sm` | DM Sans | 14px | 400 | Caption, label |
| `label` | DM Sans | 12px | 600 | Badge, tag |

### 3.3 Spacing & Grid

- Container: `max-w-7xl mx-auto px-6 lg:px-12`
- Section padding: `py-20 lg:py-32`
- Grid: 12-column, `gap-8`
- Border radius: `rounded-sm` (4px) untuk card, `rounded-none` untuk elemen industrial

### 3.4 Animasi

```ts
// Reusable Framer Motion variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}
```

---

## 4. Struktur Halaman

```
src/
├── pages/
│   ├── HomePage.tsx           # Landing page utama
│   ├── AboutPage.tsx          # Tentang perusahaan
│   ├── ServicesPage.tsx       # Daftar layanan
│   ├── ProjectsPage.tsx       # Portofolio proyek (listing)
│   ├── ProjectDetailPage.tsx  # Detail satu proyek (dynamic route)
│   └── ContactPage.tsx        # Form kontak & lokasi
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── sections/              # Sections halaman Home
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── AboutSnippetSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── FeaturedProjectsSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PartnersSection.tsx
│   │   └── CtaSection.tsx
│   ├── ui/                    # Komponen UI reusable
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── AnimatedCounter.tsx
│   │   └── ScrollReveal.tsx
│   └── project/
│       ├── ProjectCard.tsx
│       └── ProjectFilter.tsx
├── data/
│   ├── projects.ts
│   ├── services.ts
│   ├── team.ts
│   └── testimonials.ts
├── hooks/
│   ├── useAnimatedCounter.ts
│   └── useScrollReveal.ts
├── lib/
│   └── motion.ts              # Shared Framer Motion variants
└── types/
    ├── project.ts
    ├── service.ts
    └── team.ts
```

---

## 5. Spesifikasi Halaman & Sections

### 5.1 Halaman: Home (`/`)

#### Section 1 — Hero
- **Layout:** Full viewport height (`min-h-screen`), background foto proyek dengan overlay `bg-charcoal/80`
- **Konten:**
  - Label kecil: `"PERUSAHAAN KONSTRUKSI TERPERCAYA"` (uppercase, letter-spacing lebar)
  - Headline utama: 2–3 baris Barlow Condensed Bold, putih, ukuran `display-xl`
  - Sub-teks: 1–2 kalimat DM Sans, `text-concrete-light`
  - Dua tombol: **Konsultasi Gratis** (gold filled) + **Lihat Proyek** (ghost/border gold)
  - Scroll indicator (panah animasi bounce ke bawah)
- **Animasi:** Staggered entrance — label → headline → sub-teks → tombol, delay 0.1s antar elemen
- **Asset:** Foto hero fullscreen (placeholder: `/assets/hero.jpg`)

#### Section 2 — Stats
- **Layout:** Strip penuh `bg-charcoal-800`, 4 kolom
- **Konten:**
  - `25+` Tahun Pengalaman
  - `500+` Proyek Selesai
  - `300+` Klien Puas
  - `150+` Tenaga Ahli
- **Animasi:** `AnimatedCounter` — angka naik dari 0 saat masuk viewport
- **Style:** Angka Barlow Condensed Bold 64px `text-gold`, label DM Sans 14px `text-concrete-light`

#### Section 3 — Tentang Singkat
- **Layout:** 2 kolom (teks kiri 5/12, foto kanan 7/12), background `bg-warm-white`
- **Konten:**
  - Section label: `"TENTANG KAMI"`
  - Heading: `"Membangun Masa Depan dengan Fondasi yang Kuat"`
  - Paragraf 2–3 kalimat visi perusahaan
  - Daftar 3 poin keunggulan (ikon checkmark gold)
  - Link `"Selengkapnya →"` menuju `/about`
- **Foto:** Foto proyek atau tim (aspect ratio 4:3)

#### Section 4 — Layanan
- **Layout:** Background `bg-charcoal`, grid 3 kolom
- **Konten per card:**
  - Ikon SVG (Lucide) warna gold
  - Nama layanan (Barlow Condensed)
  - Deskripsi singkat 2 kalimat
  - Link "Pelajari →"
- **Hover:** Border gold muncul, ikon scale 1.1
- **Layanan default:** Konstruksi Gedung, Renovasi & Retrofit, Konsultasi & Desain, Manajemen Proyek, Konstruksi Infrastruktur, Pengawasan Proyek

#### Section 5 — Proyek Unggulan
- **Layout:** Heading + grid 3 kolom (2 card besar + 1 kecil), background `bg-warm-white`
- **Konten per card:** Foto, nama proyek, lokasi, tahun, kategori badge
- **Hover:** Foto zoom scale 1.05, overlay darkens, nama proyek slide up
- **CTA:** Tombol "Lihat Semua Proyek →" di bawah grid

#### Section 6 — Why Choose Us
- **Layout:** Split — kiri teks (6/12), kanan foto + floating stats card (6/12)
- **Konten:**
  - 4 poin keunggulan dengan ikon dan nomor urut bergaya
  - Floating card: highlight angka kunci (misal `"Proyek On-Time: 98%"`)

#### Section 7 — Testimoni
- **Layout:** Background `bg-charcoal`, Swiper.js carousel
- **Konten per slide:**
  - Quote teks (Barlow Condensed italic)
  - Nama klien + jabatan + logo perusahaan klien
  - Rating bintang
- **Navigasi:** Panah prev/next custom warna gold

#### Section 8 — Mitra & Klien
- **Layout:** Strip `bg-warm-offwhite`, logo row
- **Behavior:** Logo grayscale → full color saat hover
- **Animasi:** Infinite marquee scroll (CSS animation) atau Swiper auto-play

#### Section 9 — CTA Final
- **Layout:** Full width `bg-charcoal`, centered
- **Konten:** Heading besar + sub-teks + dua tombol
- **Background detail:** Subtle texture atau diagonal line pattern (CSS)

---

### 5.2 Halaman: Tentang Kami (`/about`)

**Sections:**
1. **Page Hero** — Foto banner + judul halaman + breadcrumb
2. **Visi & Misi** — Split layout, teks dengan highlighted quote
3. **Sejarah Perusahaan** — Timeline vertikal tahun-tahun penting
4. **Tim Kami** — Grid card foto + nama + jabatan + hover efek
5. **Sertifikasi & Penghargaan** — Logo/sertifikat dengan deskripsi
6. **CTA** — Undangan untuk berkolaborasi

---

### 5.3 Halaman: Layanan (`/services`)

**Sections:**
1. **Page Hero** — Judul + deskripsi singkat
2. **Daftar Layanan** — Grid 2 kolom, card detail dengan icon, deskripsi panjang, fitur list
3. **Proses Kerja** — Step timeline horizontal (5–6 langkah)
4. **FAQ** — Accordion expand/collapse pertanyaan umum
5. **CTA** — Form konsultasi singkat atau link ke kontak

---

### 5.4 Halaman: Proyek (`/projects`)

**Sections:**
1. **Page Hero** — Judul + filter kategori (Semua, Gedung, Infrastruktur, Renovasi)
2. **Grid Proyek** — Masonry atau uniform grid 3 kolom, infinite scroll atau pagination
3. **Tiap Card:** Foto, judul, lokasi, tahun, kategori

**Dynamic Route: `/projects/:slug`**
1. **Hero foto** — Full width, judul overlay
2. **Info proyek** — Sidebar: klien, lokasi, tahun, nilai proyek, durasi, kategori
3. **Deskripsi lengkap** — Multi-paragraf
4. **Galeri foto** — Lightbox Swiper
5. **Proyek terkait** — 3 card lainnya

---

### 5.5 Halaman: Kontak (`/contact`)

**Sections:**
1. **Page Hero** — Judul + sub-teks
2. **Split Layout:**
   - **Kiri:** Form kontak (nama, email, telepon, jenis proyek, pesan) + tombol submit
   - **Kanan:** Info kontak (alamat, telepon, email, jam operasional) + Google Maps embed
3. **Toast Notification** — Sukses/gagal setelah submit form

---

## 6. Komponen Reusable

### 6.1 `Button.tsx`
```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}
```

### 6.2 `SectionLabel.tsx`
Teks kecil uppercase dengan garis horizontal — digunakan sebagai "eyebrow" sebelum heading.
```tsx
// Contoh output: ——— LAYANAN KAMI
<SectionLabel light>LAYANAN KAMI</SectionLabel>
```

### 6.3 `ScrollReveal.tsx`
Wrapper Framer Motion yang otomatis trigger animasi saat masuk viewport.
```tsx
<ScrollReveal variant="fadeInUp" delay={0.2}>
  <YourComponent />
</ScrollReveal>
```

### 6.4 `AnimatedCounter.tsx`
Angka animasi naik dari 0 ke target saat masuk viewport.
```tsx
<AnimatedCounter target={500} suffix="+" duration={2} />
```

### 6.5 `ProjectCard.tsx`
```tsx
interface ProjectCardProps {
  title: string
  location: string
  year: number
  category: string
  imageUrl: string
  slug: string
  featured?: boolean
}
```

---

## 7. Tipe Data (TypeScript)

```ts
// types/project.ts
export interface Project {
  id: string
  slug: string
  title: string
  category: 'gedung' | 'infrastruktur' | 'renovasi' | 'industri'
  client: string
  location: string
  year: number
  duration: string
  value?: string
  description: string
  images: string[]
  featured: boolean
  tags: string[]
}

// types/service.ts
export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  features: string[]
}

// types/team.ts
export interface TeamMember {
  id: string
  name: string
  position: string
  photo: string
  certifications?: string[]
}

// types/testimonial.ts
export interface Testimonial {
  id: string
  quote: string
  clientName: string
  clientTitle: string
  company: string
  companyLogo?: string
  rating: number
}
```

---

## 8. Routing

```tsx
// App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:slug', element: <ProjectDetailPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])
```

---

## 9. Form Kontak

### Skema Validasi (Zod)
```ts
const contactSchema = z.object({
  name: z.string().min(3, 'Nama minimal 3 karakter'),
  email: z.string().email('Format email tidak valid'),
  phone: z.string().min(10, 'Nomor telepon minimal 10 digit'),
  projectType: z.enum(['Konstruksi Baru', 'Renovasi', 'Infrastruktur', 'Konsultasi', 'Lainnya']),
  message: z.string().min(20, 'Pesan minimal 20 karakter'),
})
```

### Pengiriman Form
Gunakan **EmailJS** untuk form-to-email tanpa backend:
```ts
import emailjs from '@emailjs/browser'

// .env
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=xxx
```

---

## 10. SEO

Setiap halaman memiliki meta tag unik via `react-helmet-async`:

```tsx
<Helmet>
  <title>PT. Nama Konstruksi — Jasa Konstruksi Profesional di [Kota]</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:image" content="/og-image.jpg" />
  <link rel="canonical" href="https://domainanda.com/about" />
</Helmet>
```

---

## 11. Performa & Aksesibilitas

| Area | Pendekatan |
|---|---|
| Image optimization | `loading="lazy"` pada semua gambar, format WebP |
| Code splitting | `React.lazy()` + `Suspense` per halaman |
| Font loading | `display=swap` di Google Fonts, preconnect |
| Accessibility | Semua tombol punya `aria-label`, kontras WCAG AA |
| Scroll restoration | `ScrollRestoration` dari React Router v7 |

---

## 12. Deployment

| Target | Platform |
|---|---|
| Hosting | Vercel (recommended) atau Netlify |
| Domain | Custom domain dengan HTTPS |
| Build command | `npm run build` |
| Output dir | `dist/` |
| Env vars | Simpan di dashboard Vercel/Netlify, jangan di `.env.production` yang di-push |

---

## 13. Prioritas Pengembangan

| Fase | Scope | Estimasi |
|---|---|---|
| **Fase 1** | Setup project + Layout + Navbar + Footer + Hero | 1–2 hari |
| **Fase 2** | Semua sections halaman Home | 2–3 hari |
| **Fase 3** | Halaman About + Services | 1–2 hari |
| **Fase 4** | Halaman Projects + ProjectDetail | 2 hari |
| **Fase 5** | Halaman Contact + Form + Maps | 1 hari |
| **Fase 6** | Polish animasi + SEO + Performa | 1–2 hari |

---

## 14. Catatan untuk AI Agent

- Selalu gunakan **TypeScript strict** — tidak ada `any` kecuali benar-benar diperlukan
- Semua komponen menggunakan **arrow function** dengan tipe eksplisit
- Gunakan **Tailwind CSS** untuk semua styling — tidak ada inline style kecuali nilai dinamis (misal: progress bar)
- Import ikon dari `lucide-react`, bukan dari library lain
- Animasi Framer Motion: gunakan `variants` dari `lib/motion.ts`, jangan tulis inline di setiap komponen
- Data dummy/placeholder tersimpan di folder `data/`, bukan di dalam komponen
- Setiap section halaman Home adalah komponen terpisah di `components/sections/`
- Gunakan `React.memo` pada komponen card yang di-render dalam list panjang