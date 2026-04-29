# 🚗 Canadian Pro Auto Workshop — Full Guide
## Setup · Vercel Deployment · Getting Paid as a Freelancer

---

## PART 1 — LOCAL SETUP (Run on Your Computer)

### Prerequisites
Install these first (free):
- **Node.js** → https://nodejs.org (download LTS version)
- **Git** → https://git-scm.com
- **VS Code** → https://code.visualstudio.com (recommended editor)

---

### Step 1 — Extract & Open the Project

1. Unzip the downloaded `canadian-pro-auto.zip`
2. Open VS Code → File → Open Folder → select `canadian-pro-auto`
3. Open the terminal in VS Code: **Terminal → New Terminal**

---

### Step 2 — Install Dependencies

```bash
npm install
```

This downloads all packages (~60 seconds). You'll see a `node_modules/` folder appear.

---

### Step 3 — Run the Development Server

```bash
npm run dev
```

Open your browser → **http://localhost:3000**

The site is now running locally! Any changes you save will update instantly.

---

### Step 4 — Add Real Shop Photos

1. Create this folder: `public/images/gallery/`
2. Drop `.webp` or `.jpg` photos inside
3. In `src/app/gallery/page.tsx`, replace placeholder divs with:

```tsx
import Image from "next/image";

// Replace each placeholder div with:
<div className="relative rounded-xl overflow-hidden aspect-[4/3]">
  <Image
    src="/images/gallery/photo1.webp"
    alt="Workshop bay"
    fill
    className="object-cover"
  />
</div>
```

---

### Step 5 — Update Business Info

All business data lives in one file: **`src/data/site.ts`**

Edit it to update phone numbers, social links, address, etc.

```ts
export const SITE = {
  phone: "+92 332 2609268",          // ← change here
  social: {
    facebook: "https://facebook.com/YOUR_PAGE",   // ← real FB link
    instagram: "https://instagram.com/YOUR_PAGE", // ← real IG link
    whatsapp: "https://wa.me/923322609268",       // ← real WA number
  },
  // ...
};
```

---

### Step 6 — Add Google Map

In `src/app/contact/page.tsx`, find the map comment and replace with:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12...YOUR_EMBED_ID"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

Get the embed URL: Go to Google Maps → search the shop → Share → Embed a map → Copy HTML → extract the `src="..."` part.

---

## PART 2 — DEPLOY TO VERCEL (Live on the Internet, FREE)

Vercel is the best platform for Next.js. Free plan = perfect for this.

---

### Step 1 — Push to GitHub

1. Go to **https://github.com** → Sign up (free)
2. Click **"New repository"** → name it `canadian-pro-auto` → Create
3. In your terminal (inside the project folder):

```bash
git init
git add .
git commit -m "Initial commit — Canadian Pro Auto Workshop"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/canadian-pro-auto.git
git push -u origin main
```

---

### Step 2 — Connect to Vercel

1. Go to **https://vercel.com** → Sign up with GitHub (free)
2. Click **"Add New Project"**
3. Select your `canadian-pro-auto` repository
4. Click **Deploy** — that's it!

Vercel auto-detects Next.js. No configuration needed.

Your site will be live at:
```
https://canadian-pro-auto.vercel.app
```

Every time you push to GitHub → Vercel auto-deploys. ✅

---

### Step 3 — Add a Custom Domain (Optional but Professional)

If the client wants `canadianproauto.com` or similar:

1. Buy domain from **Namecheap** (~$10/yr) or **GoDaddy**
2. In Vercel → Your Project → Settings → Domains
3. Add the domain → follow DNS instructions
4. Done — site runs on custom domain

---

### Step 4 — Make Future Updates

```bash
# Make your changes in VS Code, then:
git add .
git commit -m "Updated phone number / added gallery photos"
git push
# Vercel deploys automatically in ~1 minute ✅
```

---

## PART 3 — GETTING PAID (Freelance Guide)

### How to Price This Project

| Package | What's Included | Price Range (PKR) |
|---------|----------------|-------------------|
| **Basic** | 5-page website + deployment | Rs. 25,000 – 40,000 |
| **Standard** | + Contact form integration + Google Map | Rs. 40,000 – 65,000 |
| **Premium** | + WhatsApp booking system + SEO setup + 3 months support | Rs. 65,000 – 1,00,000 |
| **Monthly Maintenance** | Updates, backups, content changes | Rs. 5,000 – 10,000/month |

---

### How to Present to the Client

**Step 1 — Send the Vercel Preview Link**

Share: `https://canadian-pro-auto.vercel.app`

Message template:
> "Assalam o Alaikum! I've built a complete professional website for Canadian Pro Auto Workshop. You can preview it here: [LINK]. It includes all your services, booking form, Google reviews section, WhatsApp button, and is fully mobile-friendly. Let me know when you'd like to meet and discuss."

---

**Step 2 — Show It on Mobile**

90% of their customers will find them on mobile. Open the link on your phone and show the owner — this is your strongest selling point.

---

**Step 3 — What to Say in the Meeting**

Key selling points:
- ✅ "It shows up on Google Search" (SEO optimized)
- ✅ "Customers can book appointments 24/7 even when you're closed"
- ✅ "WhatsApp button — customers message you directly"
- ✅ "It's faster than any competitor's site"
- ✅ "You own it — I'll hand over everything"

---

**Step 4 — Payment Structure**

Recommended split:
- **50% upfront** before you start customizations
- **50% on delivery** (when they approve and it goes live)

Payment methods to accept:
- **JazzCash / EasyPaisa** — easiest in Pakistan
- **Bank transfer** (ask for their bank, give yours)
- **Cash** — for local clients

---

**Step 5 — What to Hand Over at the End**

Give the client:
1. **GitHub repo access** (add them as collaborator)
2. **Vercel account** (either transfer project or create account in their name)
3. **Domain login** (Namecheap/GoDaddy credentials)
4. **1-page instruction sheet** — how to contact you for updates

---

### Finding More Clients Like This

Once you have this in your portfolio:

1. **Google Maps targeting** — Search "auto workshop karachi no website" and cold message them
2. **Facebook Groups** — Pakistani freelance groups, local business groups
3. **WhatsApp** — Send the preview link to local business owners
4. **Fiverr/Upwork** — List "Local Business Website Pakistan" as a service
5. **Referrals** — Ask the auto shop owner to recommend you to other shops

---

### Recurring Income: Monthly Maintenance

Pitch this to every client:

> "For Rs. 5,000/month I will: keep your website updated, add new photos you send me, update prices/hours, make sure it stays live, and be available if anything needs changing."

This is your stable monthly income while you find new clients.

---

## PART 4 — QUICK REFERENCE

### Project Structure
```
canadian-pro-auto/
├── src/
│   ├── app/
│   │   ├── page.tsx          ← Home page
│   │   ├── about/page.tsx    ← About page
│   │   ├── services/page.tsx ← Services page
│   │   ├── gallery/page.tsx  ← Gallery page
│   │   ├── contact/page.tsx  ← Contact page
│   │   ├── booking/page.tsx  ← Booking page
│   │   ├── layout.tsx        ← Wraps all pages (nav + footer)
│   │   └── globals.css       ← Global styles
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ReviewsCarousel.tsx
│   │   ├── WhatsAppFloat.tsx
│   │   └── ...
│   └── data/
│       └── site.ts           ← ⭐ ALL business info lives here
├── public/
│   └── images/               ← Put shop photos here
├── package.json
├── tailwind.config.ts
└── next.config.mjs
```

### Common Commands
```bash
npm run dev      # Start local development
npm run build    # Build for production (test before deploy)
npm run start    # Run production build locally
```

### Support
If you get stuck on anything:
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Vercel docs: https://vercel.com/docs
