
# Cypress Starter Kit 🌿

[![Cypress Tests](https://github.com/ludovicobesana/CypressStarterKit/actions/workflows/cypress-basic.yml/badge.svg)](https://github.com/ludovicobesana/CypressStarterKit/actions/workflows/cypress-basic.yml)
[![Cypress CI Badge](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/jzmbfq/main&style=flat&logo=cypress)](https://cloud.cypress.io/projects/jzmbfq/runs)

[![Cypress Tests](https://github.com/ludovicobesana/CypressStarterKit/actions/workflows/cypress.yml/badge.svg)](https://github.com/ludovicobesana/CypressStarterKit/actions/workflows/cypress.yml)

## Overview

Cypress Starter Kit is a comprehensive boilerplate repository designed to help developers quickly set up an automated testing environment using [Cypress](https://www.cypress.io/) and [cypress-axe](https://github.com/component-driven/cypress-axe). It includes accessibility testing support, sensible defaults, and useful scripts to streamline testing workflows.

## Features

- Pre-configured Cypress environment with TypeScript
- Accessibility testing with `cypress-axe`
- Ready-to-use scripts for CI workflows
- ESLint + TypeScript support

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/CypressStarterKit.git
   cd cypress-starter-kit
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Open Cypress UI**:

   ```bash
   npm run cypress:open
   ```


### Usage
The repository includes several npm scripts for different testing scenarios:

- `npm run cypress:open`: Launch Cypress in interactive mode
- `npm run cypress:run`: Run all Cypress tests headlessly
- `npm run test`: Alias for `cypress run`
- `npm run test:ally`: Run accessibility tests only
- `npm run lint`: Run ESLint on `.ts` and `.js` files
- `npm run type-check`: Run TypeScript type checks
- `npm run clean:screenshots`: Delete all screenshots in `cypress/screenshots/`

## Configuration

For Cypress Cloud setup and advanced features, see [CYPRESS_CLOUD_SETUP.md](CYPRESS_CLOUD_SETUP.md).

#### GitHub Actions & Artifacts

On every push or pull request to `main`, Cypress accessibility tests are run automatically via GitHub Actions.

- All screenshots generated during the run are saved as a downloadable artifact named `cypress-screenshots`.

You can view the status badge at the top of this README and download artifacts from the Actions tab on GitHub.

## Contributing

Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).

[![banner](https://raw.githubusercontent.com/ludovicobesana/ludovicobesana/d9298c688942172e06d44cc02d89719c6af31f49/images/banner.svg)](https://discord.gg/ubjFtMUv38)