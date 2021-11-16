# Contributing

Thanks for contributing to Trinkerr!

## Setup

1. Fork and clone the repository.
2. Copy `.env.example` to `.env` and configure local values.
3. Install dependencies and run the test suite.

## Development workflow

1. Create a feature branch from `main` / `develop`.
2. Make changes with tests covering new behavior.
3. Run lint and tests locally before opening a PR.
4. Open a pull request — CI runs lint, type-check, tests, and dependency audit.

## Code standards

- Keep functions focused and files under 500 LOC where possible.
- Add or update tests for behavioral changes.
- Follow existing naming and formatting conventions (ESLint / golangci-lint / ruff).