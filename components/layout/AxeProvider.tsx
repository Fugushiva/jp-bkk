"use client";

import { useEffect } from "react";

/**
 * AxeProvider — loads axe-core accessibility checker in development only.
 * Renders nothing in production.
 */
export function AxeProvider() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    // Dynamically import to avoid bundling in production
    Promise.all([
      import("react"),
      import("react-dom"),
      import("@axe-core/react"),
    ]).then(([React, ReactDOM, axe]) => {
      axe.default(React.default, ReactDOM.default, 1000);
    }).catch(() => {
      // Silently fail if axe-core is not available
    });
  }, []);

  return null;
}
