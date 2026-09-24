// Site-wide settings. Edit these first.
export const site = {
  name: 'Klaus Böttger',
  title: 'Klaus Böttger — Product Designer',
  headline: 'Designing products that feel obvious.',
  intro:
    'Product designer working on mobility, finance and tools people use every day. Currently based in Germany.',
  email: 'hello@example.com',
};

// Prefixes a path with the deploy base, so links work on
// username.github.io as well as username.github.io/repo-name.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => `${base}${path}`;
