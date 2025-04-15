# Cypress E2E Tests for Next.js Site

This repository contains end-to-end tests for validating the accessibility and functionality of a Next.js website using [Cypress](https://www.cypress.io/).

## 📁 Project Structure

```
cypress/
  └── e2e/
      ├── imagealttags.cy.js    # Tests to ensure all images have alt tags
      └── buttonlabels.cy.js    # Tests for accessible button labels
      └── headings.cy.js        # Tests for h1 tags on each page
cypress.config.js               # Cypress configuration
.env                            # Environment variables (e.g., routes to test)
```

---

## Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/jabercrombia/cypress-ada-testing.git
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

---

## Environment Variables

Create a `.env` file in the root of the project:

```
SITE_URL="http://wwww.example/com"
SITEMAP_URL="http://wwww.example/com/sitemap.xml"
```

You will need a /sitemap.xml in order for the automation to look at all pages.

---

## Running Tests

### Open Cypress in interactive mode

```bash
npm run cypress:open
```

### Run all tests headlessly in the terminal

```bash
npm run cypress:run
```

---

## Included Tests

* Image Alt Tag Test
    * Check if images have alt tag
* Button Test
    * Buttons have aria-label
* Headings
  * Test if each page has a minimum of a h1 tag

