# Cypress Cloud Setup

This project demonstrates automated accessibility testing with Cypress Cloud integration for the **Accessibility Features Trial**.

## Project Context

Created in collaboration with the Cypress team (Brendan, Mark, Ronald) to showcase:
- Advanced accessibility testing workflows
- Cypress Cloud recording and analytics
- CI/CD best practices for accessibility

## Setup Instructions

### 1. Environment Variables

Create or update your `.env` file:
```bash
CYPRESS_PROJECT_ID=your-project-id
CYPRESS_RECORD_KEY=your-record-key
```

### 2. Local Testing with Recording

```bash
npx cypress run --record --key <YOUR_RECORD_KEY>
```

### 3. GitHub Secrets

Add to GitHub repo → Settings → Secrets and variables → Actions:
- `CYPRESS_RECORD_KEY`: Your Cypress Cloud recording key
- `CYPRESS_PROJECT_ID`: Your project ID (optional, falls back to .env)

## Workflow Options

### Basic Workflow (`cypress-basic.yml`)
Simple CI without cloud features:
- No secrets required
- Single container execution
- Screenshot artifacts only

### Cloud Workflow (`cypress-cloud.yml`)  
Advanced CI with Cypress Cloud:
- Parallel execution (2 containers)
- Cloud recording and analytics
- Advanced reporting features

## Advanced Features

### Automated Screenshot Capture
- Screenshots of elements with accessibility violations
- Saved as GitHub Actions artifacts
- Organized by violation type and test

### Detailed Console Logging
- Colored violation reports
- WCAG guideline references
- Failure summaries for each element

### Parallel Test Execution
- Optimized for speed with 2 parallel containers
- Load-balanced test distribution
- Consolidated reporting in Cypress Cloud

## Resources

- [Cypress Cloud Dashboard](https://cloud.cypress.io/)
- [Accessibility Documentation](https://docs.cypress.io/accessibility/guides/introduction)
- [cypress-axe GitHub](https://github.com/component-driven/cypress-axe)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
