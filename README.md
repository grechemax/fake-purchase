# Fake Purchase Cypress Tests

E2E tests for an e-commerce application covering checkout flow and product filtering. Built with Cypress and using the Page Object Model pattern.

## Setup
```bash
npm install
```

## Run

### Interactive Mode (UI)
```bash
npx cypress open
# or
npm run cypress
```

### Headless Mode (CLI)
```bash
npm run cypress:run
```

## Tests
- `checkout.cy.js` - Complete purchase flow
- `filters.cy.js` - Product filtering and search
