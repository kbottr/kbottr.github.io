// Site-wide settings. Edit these first.
export const site = {
  // The "logo": shown top left and in browser tab titles.
  brand: 'wilhelm',
  // Your real name: used in the footer, on the About page and for search engines.
  name: 'Klaus Wilhelm Böttger',
  title: 'wilhelm — Klaus Wilhelm Böttger, Designer',
  // One sentence on the home page.
  intro: 'I design digital products that feel obvious, and lead the teams that build them. I care about clarity, craft and close collaboration, from the first sketch to the shipped product.',
  // Paragraphs on the About page.
  about: [
    'Placeholder: a few sentences about where you grew up, how you got into design and what you care about.',
    'Placeholder: what you are working on now, and what kind of problems you like to solve.',
  ],
  email: 'hello@example.com',
  // Shown in the footer: where you're based, as map coordinates (Munich)
  location: { name: 'Munich', lat: 48.1374, lon: 11.5755 },
  cosmos: 'https://www.cosmos.so/wilhelm',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wilhelmboettger' },
    { label: 'GitHub', href: 'https://github.com/kbottr' },
  ],
};

// Prefixes a path with the deploy base, so links keep working if the
// site ever moves to a sub-path (e.g. username.github.io/repo-name).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => `${base}${path}`;

export const monthYear = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
export const shortMonthYear = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' }).toLowerCase();
