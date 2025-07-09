# Meem Madaat Website Documentation

This markdown file provides comprehensive context and guidance for developers and for an LLM to generate or implement the Meem Madaat site. It includes: project overview, site architecture, page-by-page content outlines, design system, style guide, assets, data models, and guidelines for dynamic content.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Audience & Goals](#audience--goals)
3. [Site Architecture](#site-architecture)
4. [Page Content Details](#page-content-details)

   * [Home](#home)
   * [About Us](#about-us)
   * [Governance](#governance)
   * [Our Work](#our-work)

     * [Medical Aid](#medical-aid)
     * [Homeless Support (UK)](#homeless-support-uk)
     * [Education & Community Development (Pakistan)](#education--community-development-pakistan)
   * [Impact & Reports](#impact--reports)
   * [News & Updates](#news--updates)
   * [Get Involved](#get-involved)
   * [Policies & Compliance](#policies--compliance)
   * [Contact Us](#contact-us)
5. [Design System](#design-system)

   * [Color Palette](#color-palette)
   * [Typography](#typography)
   * [Spacing & Layout](#spacing--layout)
   * [Components](#components)
   * [Imagery & Icons](#imagery--icons)
   * [Accessibility](#accessibility)
6. [Data Models & API Contracts](#data-models--api-contracts)
7. [CMS & Content Management](#cms--content-management)
8. [Deployment & Environment](#deployment--environment)
9. [LLM Integration Guidelines](#llm-integration-guidelines)

---

## Project Overview

Meem Madaat is a UK-registered charity (Charity No. XXXXX) with a mission to relieve poverty, advance healthcare, and promote social cohesion in the UK and Pakistan. This project entails building a modern, accessible website in line with Charity Commission standards, featuring transparent governance, robust content, and user engagement.

**Key Objectives:**

* Present clear charitable purpose and legal status
* Showcase impact and beneficiary stories
* Provide robust donation and volunteer sign-up flows
* Ensure transparency via governance and policy pages
* Implement responsive, accessible design

---

## Audience & Goals

**Primary Audiences:**

* **Donors** seeking to support charitable causes
* **Volunteers** in the UK and Pakistan
* **Beneficiaries** looking for assistance programs
* **Regulators & stakeholders** reviewing compliance

**Goals:**

* Convert visitors to donors via clear CTAs
* Inform about Meem Madaat’s governance and policies
* Demonstrate impact through data and stories
* Provide easy navigation to program details

---

## Site Architecture

```
Home
├── About Us
├── Governance
├── Our Work
│   ├── Medical Aid
│   ├── Homeless Support (UK)
│   └── Education & Community Development (Pakistan)
├── Impact & Reports
├── News & Updates
├── Get Involved
│   ├── Donate
│   ├── Volunteer
│   └── Fundraise for Us
├── Policies & Compliance
└── Contact Us
```

---

## Page Content Details

### Home

* **Hero Section**

  * Fullscreen background image of beneficiaries or smiling faces
  * Headline: “Help Us Make a Difference”
  * Subheadline: “UK-registered charity (Charity No. XXXXX)”
  * Primary CTA: “Donate now” button (styled in GoFundMe green #3AB795)
* **Our Objects**

  * Brief overview copy
  * Three feature cards: Healthcare, UK Homeless Support, Education
* **Impact Stats**

  * Total raised, People helped, Donation policy (% to beneficiaries)
* **Testimonial**

  * Photo, quote, name/role
* **Footer teaser** with latest news headlines

### About Us

* **Our History**

  * Timeline entries (e.g., Founded 20XX, First clinic opened)
* **Vision & Values**

  * Vision statement
  * Four values with icons
* **Charity Status**

  * Charity number, registered address
* **Our Team**

  * Trustee profiles (photo, name, role, bio)
  * Executive team (if applicable)

### Governance

* **Governing Document**

  * Summary and PDF link
* **Trustees**

  * Table: Name, Role, Appointment date, Background
* **Policies & Procedures**

  * Safeguarding, Conflicts of Interest, Finance control, Privacy
  * Each with summary text and PDF download
* **Annual Reports & Financials**

  * List of years with PDF links
  * Quick summary table of latest year’s income/expenditure

### Our Work

#### Medical Aid

* Overview paragraph
* Impact metrics: clinics, patients treated
* Case study: short narrative + photo
* CTA: Volunteer / Sponsor a clinic

#### Homeless Support (UK)

* Overview paragraph
* Metrics: meals served, nights sheltered
* Volunteer testimonial
* CTA: Donate food pack / Volunteer

#### Education & Community Development (Pakistan)

* Overview paragraph
* Metrics: children enrolled, literacy program outcomes
* Photo gallery (grid)
* CTA: Sponsor a child

### Impact & Reports

* **Interactive Dashboard** (chart placeholders)
* **Annual Impact Report** summary
* **Stories of Change**

  * Carousel of 3–5 short beneficiary stories

### News & Updates

* Blog index with categories
* Individual post template (title, date, author, content)
* Social media embed (Twitter / Facebook)

### Get Involved

* **Donate**

  * Payment form integration (Stripe/GoCardless)
  * Options: One-time, monthly, project-specific
  * Gift Aid form
* **Volunteer**

  * Role descriptions and sign-up form
* **Fundraise for Us**

  * Toolkit PDF, idea list, contact link

### Policies & Compliance

* For each policy:

  * Intro paragraph
  * Download link
* **Complaints Procedure**

  * Process steps

### Contact Us

* **Contact Form** fields: Name, Email, Subject, Message
* **Office Address** + Google Maps embed
* **General Enquiries** email + phone
* **Press & Media** contact

---

## Design System

### Color Palette

| Name           | Hex       | Usage                           |
| -------------- | --------- | ------------------------------- |
| GoFundMe Green | `#3AB795` | Primary buttons, highlights     |
| Dark Teal      | `#1E4E4E` | Header background, footers      |
| White          | `#FFFFFF` | Backgrounds, light cards        |
| Charcoal       | `#333333` | Primary text                    |
| Light Gray     | `#F5F5F5` | Secondary backgrounds, dividers |

### Typography

* **Font Family:** Inter (sans-serif)
* **Headings:**

  * H1: 3rem / 48px, bold
  * H2: 2.25rem / 36px, semibold
  * H3: 1.75rem / 28px, semibold
* **Body Text:** 1rem / 16px, regular
* **Line-height:** 1.5

### Spacing & Layout

* **Grid:** 12-column responsive grid
* **Breakpoints:**

  * Mobile: up to 640px
  * Tablet: 641–1024px
  * Desktop: 1025px+
* **Spacing scale:** 4px base unit (8,16,24,32,48…)

### Components

* **Button**

  * Primary: background #3AB795, white text, border-radius 6px
  * Secondary: transparent bg, #3AB795 border and text
* **Card**

  * White bg, light shadow, 16px padding, 8px radius
* **Navbar**

  * Dark teal bg, white text, horizontal menu, mobile hamburger
* **Form Inputs**

  * 100% width, 8px padding, 4px radius, border #CCC
* **Modal**

  * Centered, overlay black 50%, white panel, padding 24px

### Imagery & Icons

* Use high-quality, authentic photos (beneficiaries, volunteers)
* Icon library: use Heroicons or FontAwesome (outline style)
* All images with meaningful alt text

### Accessibility

* **Contrast:** minimum 4.5:1 for text
* **Keyboard navigation:** visible focus states
* **ARIA labels:** on interactive components
* **Semantic HTML:** proper use of headings, landmarks

---

## Data Models & API Contracts

```json
// Example Trustee model
{
  "id": "uuid",
  "name": "string",
  "role": "string",
  "bio": "string",
  "photoUrl": "string",
  "appointedDate": "YYYY-MM-DD"
}
\ n// Example News Post model
{
  "id": "uuid",
  "title": "string",
  "slug": "string",
  "content": "markdown or HTML",
  "date": "YYYY-MM-DD",
  "author": { "name": "string", "photoUrl": "string" }
}
```

---

## CMS & Content Management

* Use headless CMS (e.g., Sanity, Contentful) or markdown-based (e.g., MDX)
* Sections managed:

  * Page content blocks
  * Team bios
  * News posts
  * Impact stats
* Assets: upload images/icons to CDN with proper naming conventions

---

## Deployment & Environment

* **Framework:** Next.js or Gatsby
* **Hosting:** Vercel or Netlify
* **Environment variables:**

  * `NEXT_PUBLIC_CMS_ENDPOINT`
  * `STRIPE_PUBLIC_KEY`
  * `GOOGLE_MAPS_API_KEY`

---

## LLM Integration Guidelines

* Leverage LLM to generate or refine copy blocks using the context above.
* Prompt structure:

  * Provide page name, objective, tone (professional, empathetic)
  * Include content schema (headings, paragraphs, CTAs)
* Validate LLM output against:

  * Charity Commission copy requirements
  * Style guide (tone, length, inclusivity)
  * Accessibility and SEO best practices

---

*End of documentation.*
