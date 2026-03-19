# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.8.3] - 2026-03-18

### Fixed
- Restored the shared server runtime pid after temporary Bun/Deno integration tests
- Eliminated the release-workflow test flake caused by runtime integration tests mutating global server state

## [0.8.2] - 2026-03-18

### Changed
- Released from merged `main`
- Updated package source links to `mfreeman451/phoenix-react-ng`

## [0.8.1] - 2026-03-18

### Changed
- Updated `react` and `react-dom` to `19.2.4`
- Updated `react-markdown` to `10.1.0`
- Updated `remark-gfm` to `4.0.1`
- Updated Deno server template and runtime import pins to match the current React stack

## [0.8.0] - 2026-03-18

### Added
- Comprehensive type specifications (`@type` and `@spec`) for all public functions
- Enhanced module documentation with detailed examples and usage patterns
- New `Phoenix.React.Config` module for centralized configuration management
- Improved error handling and logging across all runtime implementations
- Better type safety with strict typing for component names, props, and rendering methods
- Enhanced file watcher documentation and configuration options
- Production deployment guides and best practices

### Changed
- Forked release published as `phoenix_react_ng`
- Application configuration namespace changed to `:phoenix_react_ng`
- Hex publish automation now runs from GitHub Releases
- Completely rewritten README with comprehensive documentation and examples
- Improved runtime module architecture with better separation of concerns
- Enhanced cache module with proper type specifications and documentation
- Better error messages and debugging information
- Optimized configuration validation and defaults

### Fixed
- Type specification inconsistencies across modules
- Documentation gaps in runtime implementations
- Missing error handling in edge cases

## [0.7.3] - 2024-XX-XX

### Added
- Support for Deno 2.x runtime
- Enhanced security features for Deno runtime
- File watching improvements with throttling
- Better error reporting and logging

### Changed
- Improved performance for component rendering
- Enhanced development experience with hot reloading
- Better memory management and cleanup

## [0.7.2] - 2024-XX-XX

### Fixed
- Runtime process cleanup issues
- Memory leaks in long-running applications
- Port handling in production environments

### Changed
- Updated dependencies for better compatibility
- Improved error handling for network requests

## [0.7.1] - 2024-XX-XX

### Fixed
- Component bundling issues in production
- File watcher not detecting changes properly
- Configuration validation errors

### Changed
- Better default configuration values
- Improved documentation and examples

## [0.7.0] - 2024-XX-XX

### Added
- Dual runtime support (Bun and Deno)
- Enhanced caching system with TTL
- File watching for development
- Production bundling tools
- LiveView integration examples

### Changed
- Complete rewrite of runtime architecture
- Improved API design with better type safety
- Enhanced error handling and logging

### Breaking Changes
- Updated configuration structure
- Changed module names for better organization
- Modified API for component rendering

## [0.6.x] - Earlier Versions

### Added
- Initial React server-side rendering support
- Basic component rendering functionality
- Phoenix integration helpers

### Known Issues
- Limited runtime support
- Basic error handling
- No production optimization features

---

## Migration Guide

### From 0.6.x to 0.7.x

1. **Update Configuration**
   ```elixir
   # Old configuration
   config :phoenix_react_ng, :runtime, :bun
   
   # New configuration
   config :phoenix_react_ng, Phoenix.React,
     runtime: Phoenix.React.Runtime.Bun
   ```

2. **Update Module Imports**
   ```elixir
   # Old
   import PhoenixReact.Helpers
   
   # New
   import Phoenix.React.Helper
   ```

3. **Update Component Usage**
   ```elixir
   # Old
   react_render("component", props)
   
   # New
   react_component(component: "component", props: props)
   ```

### From 0.7.2 to 0.7.3

No breaking changes. Simply update the dependency and enjoy enhanced documentation and type safety.

---

## Development

For information about contributing to this project, please see the [CONTRIBUTING.md](CONTRIBUTING.md) file.

For release procedures, see the [RELEASE.md](RELEASE.md) file.
