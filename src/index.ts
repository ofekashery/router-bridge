declare global {
  interface Window {
    next?: {
      router?: {
        push: (url: string, as?: string, options?: any) => void;
        replace: (url: string, as?: string, options?: any) => void;
      };
    };
  }
}

export type NavigateOptions = {
  replace?: boolean;
  shallow?: boolean;
};

export class Router {
  /**
   * Navigate to the provided path.
   * @param path The URL path to navigate to.
   * @param options Navigation options (replace, shallow).
   */
  navigate(path: string, options: NavigateOptions = {}) {
    // If Next.js router is available, use it for navigation
    if (window.next?.router) {
      if (options.replace) {
        return window.next.router.replace(path, undefined, options);
      } else {
        return window.next.router.push(path, undefined, options);
      }
    }
    // Fallback for older browsers
    if (!window.history || !window.history.pushState) {
      if (!options.shallow) {
        window.location.href = path;
      }
      return;
    }

    // Use the browser's History API to manipulate the location
    if (options.replace) {
      window.history.replaceState(null, '', path);
    } else {
      window.history.pushState(null, '', path);
    }

    // Dispatch a popstate event to notify React Router of the navigation change
    window.dispatchEvent(new PopStateEvent('popstate', { state: null }));
  }

  /**
   * Navigate to the previous history entry.
   */
  back() {
    window.history.back();
  }

  /**
   * Navigate to the next history entry.
   */
  forward() {
    window.history.forward();
  }
}

export const router = new Router();
