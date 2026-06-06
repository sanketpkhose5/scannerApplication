Perfect. These screenshots actually help a lot because now we can create a **pixel-perfect clone plan** instead of guessing.

## Phase 1: Mobile First Clone

Looking at the screenshots, the page has only **3 major sections**:

```text
Header
↓
Certificate Card
↓
Footer
```

Nothing else is required for V1.

---

# 1. Header Component

From your screenshots:

### Left Section

* Registrar General Logo

### Center Section

* Azadi Ka Amrit Mahotsav
* Government Emblem

### Right Section

* Dark Mode Icon
* Login Button
* Hamburger Menu

Layout:

```text
┌─────────────────────────────┐
│ Logo  Azadi  Emblem 🌙 ➜ ☰ │
└─────────────────────────────┘
```

For mobile:

```css
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
```

---

# 2. Background

Notice behind the certificate:

```text
Light Grey
Watermark Logos
```

Create:

```text
assets/
   images/
      watermark.png
```

Use:

```css
background-repeat: repeat;
opacity: 0.05;
```

---

# 3. Certificate Card

This is the heart of the page.

### Container

```css
background: white;
border-radius: 4px;
box-shadow: 0 4px 15px rgba(0,0,0,0.25);
padding: 20px;
```

### Table

Two columns:

```text
Registration Number | Value
NAME                | Value
GENDER              | Value
DOB                 | Value
...
```

Width on mobile:

```css
width: 90%;
margin: auto;
```

---

# 4. Footer

The footer has 3 sub-sections.

### Logos

```text
data.gov.in
india.gov.in
PM India
Make In India
Digital India
MyGov
```

Looking at screenshots:

Mobile arrangement:

```text
Logo
Logo Logo
Logo
Logo
Logo
```

So use:

```css
display:flex;
flex-wrap:wrap;
justify-content:center;
```

---

### Footer Links

```text
Website Policy
Mobile App Privacy Policy
Terms & Conditions
Accessibility Statement
...
```

Mobile:

```css
flex-wrap: wrap;
```

---

### Copyright

```text
Website Developed & Maintained By...
© 2024...
```

Center aligned.

---

# Components We Need

```text
components/

Header/
  Header.jsx

CertificateCard/
  CertificateCard.jsx

Footer/
  Footer.jsx
```

Skip Navbar for now because on mobile it is hidden behind the hamburger.

---

# Assets Needed

```text
assets/

logos/
   registrar-logo.png
   azadi-logo.png
   emblem.png

footer/
   data-gov.png
   india-gov.png
   pm-india.png
   make-in-india.png
   digital-india.png
   mygov.png

images/
   watermark.png
```

---

# First Milestone

Don't think about:

❌ QR Code
❌ Backend
❌ API
❌ MongoDB
❌ Routing

Just get this exact screen working:

```text
Header
Certificate Card
Footer
```

and make it look identical on a 360px–430px mobile screen. Once that's done, we can move to desktop responsiveness and then dynamic certificate data.
