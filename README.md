# My Vendure Monorepo

This monorepo contains multiple Vendure plugins organized as Yarn workspaces. Each plugin is designed to extend the functionality of the Vendure framework, providing various features and enhancements.

## Project Structure


├── packages
│   ├── plugin-example-1
│   ├── plugin-example-2
│   └── plugin-example-3
├── package.json
└── yarn.lock
```

## Getting Started

To get started with this monorepo, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-vendure-monorepo
   ```

2. **Install dependencies:**
   This project uses Yarn workspaces. Run the following command to install all dependencies:
   ```bash
   yarn install
   ```

3. **Build the plugins:**
   Each plugin can be built individually. Navigate to the desired plugin directory and run:
   ```bash
   yarn build
   ```

## Available Plugins

### Plugin Example 1
- **Location:** `packages/plugin-example-1`
- **Description:** This plugin provides [describe functionality].
- **Documentation:** See `packages/plugin-example-1/README.md` for more details.

### Plugin Example 2
- **Location:** `packages/plugin-example-2`
- **Description:** This plugin offers [describe functionality].
- **Documentation:** See `packages/plugin-example-2/README.md` for more details.

### Plugin Example 3
- **Location:** `packages/plugin-example-3`
- **Description:** This plugin enhances Vendure with [describe functionality].
- **Documentation:** See `packages/plugin-example-3/README.md` for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).