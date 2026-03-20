# pearpass-lib-constants

Shared constants for the Pearpass repositories.

## Features

This library provides a centralized collection of constants used across the Pearpass ecosystem.

## Security Notice

1. To ensure the security and integrity of your projects, please note that official PearPass packages are distributed exclusively through our GitHub organization.
2. Any packages with similar names found on the npm registry or other third-party package managers are not affiliated with PearPass and should be strictly avoided. We recommend installing directly from this repository to ensure you are using the verified, open-source version.

## Installation

To install the package, you can use npm or yarn:

```bash
npm install git+https://github.com/tetherto/pearpass-lib-constants.git
```

or

```bash
yarn add git+https://github.com/tetherto/pearpass-lib-constants.git
```

## Testing

This project uses ESLint for linting. To run the linter, execute the following command:

```bash
npm run lint
```

## Usage Examples

Here is an example of how to import and use a constant from this library:

```javascript
import { MS_PER_DAY } from '@tetherto/pearpass-lib-constants';

function isOlderThanADay(timestamp) {
  return Date.now() - timestamp > MS_PER_DAY;
}
```

## Dependencies

This library has no production dependencies.

## Related Projects

- [@tetherto/pearpass-app-mobile](https://github.com/tetherto/pearpass-app-mobile) - A mobile app for PearPass, a password manager
- [@tetherto/pearpass-app-browser-extension](https://github.com/tetherto/pearpass-app-browser-extension) - A browser extension for PearPass, a password manager
- [@tetherto/pearpass-app-desktop](https://github.com/tetherto/pearpass-app-desktop) - A desktop app for PearPass, a password manager

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](./LICENSE) file for details.
