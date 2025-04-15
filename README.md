# Cypress E2E Tests for Next.js Site

This repository contains end-to-end tests for validating the accessibility and functionality of a Next.js website using [Cypress](https://www.cypress.io/).

## 📁 Project Structure

```
cypress/
  └── e2e/
      ├── imagealttags.cy.js    # Tests to ensure all images have alt tags
      └── buttonlabels.cy.js    # Tests for accessible button labels
cypress.config.js               # Cypress configuration
.env                            # Environment variables (e.g., routes to test)
```

---

## 🚀 Getting Started

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
BASE_API_URL="URL USED FOR TESTING"
ROUTES=/,/about,/contact
```

You can specify all the routes you want to test, separated by commas.

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

1. Image Alt Tag Test
2. Button Labels

