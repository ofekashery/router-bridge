# Router Bridge

Lightweight bridge for triggering client-side navigation from external React contexts. Enabling seamless navigation without full page reloads.

## Getting Started
Install the package:

```bash
npm install router-bridge
```
## Usage

```javascript
import { router } from 'router-bridge';

router.navigate('/dashboard');
router.navigate('/profile', { replace: true });
```

## Supports

- `react-router`
- `@tanstack/react-router`
- Next.js v14+
- Vanilla JS apps using the History API
- Fallback to `window.location` for legacy browsers

## Reference
### `router.navigate(path: string, options?: NavigateOptions)`
Navigate to a new location.

- `path`: The target URL or path to navigate to.
- `options`: Optional navigation settings.
  - `replace`: If `true`, replaces the current entry in the history stack instead of adding a new one.
  - `shallow`: If `true`, performs a shallow navigation without reloading data or running loaders (if supported by the router).

### `router.back()`
Navigate back to the previous entry in the history stack.

### `router.forward()`
Navigate forward to the next entry in the history stack.


