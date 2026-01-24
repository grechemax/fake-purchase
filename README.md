# Fake Purchase Cypress Tests

E2E tests for automated checkout flow.

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
# or
npx cypress run
```

**Note:** Use `npm run` for scripts defined in package.json, and `npx` to run packages directly.

## Tests
- `checkout_test.cy.js` - Complete purchase flow
- `aks_for_calback_test.cy.js` - Callback request form
