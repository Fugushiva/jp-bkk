/**
 * SkipNav — accessibility skip navigation link.
 * Renders a visually hidden link that becomes visible on focus,
 * allowing keyboard users to skip directly to main content.
 */
export function SkipNav() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:bg-[var(--color-brand-primary)] focus:text-white focus:font-medium focus:outline-none focus:ring-2 focus:ring-white"
    >
      Skip to main content
    </a>
  );
}
