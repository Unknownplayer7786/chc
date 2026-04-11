# Care Homoeo Clinic — Website

A clean, minimalist, trust-focused static website for **Care Homoeo Clinic**, located at Fakhri Hills, Kondhwa Budruk, Pune.

---

## Project Overview

| Field | Value |
|---|---|
| Business | Care Homoeo Clinic |
| Doctor | Dr. Farida Dahodwala (BHMS) |
| Location | Bungalow No. 25, Fakhri Hills, Kondhwa, Pune – 411048 |
| Phone | +91 90287 69373 |
| Rating | 5★ (Google Maps, Justdial 4.8) |

---

## Files

```
index.html        — Main single-page website
css/style.css     — Full stylesheet (design tokens, layout, responsive)
js/main.js        — Navigation toggle, scroll reveal, active link highlight
README.md         — This file
```

---

## Sections Implemented

| # | Section | Content |
|---|---|---|
| 1 | Header / Nav | Sticky, blur, mobile hamburger menu |
| 2 | Hero | Title, tagline, call button, trust pills (5★, 20+ yrs, AYUSH) |
| 3 | About | Clinic overview, feature list, stats card, credential badges |
| 4 | Doctor Profile | Dr. Farida Dahodwala — BHMS, qualifications, registration, fee, quote |
| 5 | Services | 6 cards — Skin/Allergy, Internal Medicine, Women's Health, Hair, Child/Family, Holistic |
| 6 | Timings | Mon–Fri 11–1 PM & 4–6 PM; dark green section |
| 7 | Why Choose Us | 4-item grid with numbered philosophy points |
| 8 | Contact + Map | Address, phone, links to Practo & Justdial, embedded Google Map |
| 9 | Footer | Brand, tagline, nav links, data disclaimer |

---

## Design System

- **Palette:** Warm sage green (`#4a7c59`) + parchment off-white (`#f8f6f1`) + deep forest dark (`#2e5139`)
- **Typography:** DM Serif Display (headings, italic accent) + Inter (body, labels)
- **Layout:** CSS Grid, fully responsive — 3-col → 2-col → 1-col breakpoints at 900px & 640px
- **Motion:** Intersection Observer scroll-reveal with staggered delays
- **Navigation:** Sticky header with backdrop-blur, smooth-scroll with offset, mobile hamburger

---

## Data Sources (Verified)

All content is sourced from real, publicly listed information:

| Source | Data Extracted |
|---|---|
| [Practo](https://www.practo.com/pune/clinic/care-homoeo-clinic-3-kondhwa) | Timings, services, doctor profile, consultation fee |
| [Justdial](https://www.justdial.com/Pune/Care-Homeo-Clinic-Kondhwa-Budruk/020PXX20-XX20-190423191927-J5E1_BZDET) | Address, category listing, rating (4.8) |
| [DocIndia](https://www.docindia.org/doctors/pune/dr-farida-dahodwala-homeopathy) | Full services list, clinic location |
| [Google Maps](https://maps.app.goo.gl/) | 5★ rating, phone number, place types |
| Practo — Dr. Profile | BHMS 2006 MUHS, MCH Reg 45844, 20 yrs exp |

---

## What's NOT Included (intentionally)

- No patient review quotes (none verified/public for this specific clinic)
- No clinic interior images (no verified originals available)
- No social media links (no confirmed Instagram/Facebook page found for this specific clinic)
- Saturday timings marked as "by appointment – please call" since only Mon–Fri was confirmed

---

## Recommended Next Steps

1. **Add real clinic photos** once provided by the client (interior, exterior, doctor)
2. **Connect WhatsApp button** using `https://wa.me/919028769373`
3. **Add an appointment booking form** (can store to a Table API)
4. **Confirm Saturday timings** directly with clinic and update
5. **Add Google My Business rich snippet** (JSON-LD schema for local SEO)
6. **Add patient testimonials** if client can provide written consent

---

## Deployment

Go to the **Publish tab** to deploy this website and get a live URL.
