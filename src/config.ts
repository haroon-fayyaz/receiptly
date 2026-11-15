// Single place for facts that may change. Empty values hide the related UI.
export const SITE = {
  name: 'Receiptly',
  tagline: 'Receipts organized all year, tax time in one export.',
  /** Google Play listing URL. Leave empty until the listing is live. */
  playStoreUrl: '',
  /** Policy last-updated date (update on every edit). */
  policyUpdated: '2026-11-15',
};

/** Prefix an absolute site path with the configured base (e.g. GitHub Pages sub-path). */
export const url = (p: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (p.startsWith('/') ? p : '/' + p);
};
