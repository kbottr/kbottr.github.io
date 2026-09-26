// Generates a hand-drawn "scribbled out" line: tight, slightly irregular
// loops like crossing something out with a pen.
// The same text always gives the same scribble (seeded randomness).

// Small deterministic random generator, seeded from the text.
function seeded(text: string) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

const round = (n: number) => Math.round(n * 10) / 10;

/**
 * @param text  the crossed-out text (sets length and randomness)
 * @param charWidth  average character width in px, so loops keep the same
 *                   rhythm regardless of text length
 * @returns SVG path `d` and viewBox width (height is always 16)
 */
export function scribble(text: string, charWidth = 8.5) {
  const rand = seeded(text);
  const width = Math.max(40, Math.round(text.length * charWidth));
  const loop = 8; // px per loop — tight like a pen scribble
  const loops = Math.max(4, Math.round((width - 10) / loop));
  const step = (width - 10) / loops;

  // Lead-in hook
  let x = 2;
  let d = `M${x} ${round(11 + rand())} C ${x} ${round(7 + rand())}, ${x + 3} ${round(5 + rand())}, ${x + 5} 8`;
  x += 5;

  for (let i = 0; i < loops; i++) {
    const top = 2 + rand() * 3;        // peak height varies 2–5
    const bottom = 11.5 + rand() * 2.5; // trough varies 11.5–14
    const lean = (rand() - 0.3) * step * 0.9; // leaning peaks make small loops
    const xPeak = x + step * 0.5 + lean;
    const xNext = x + step;
    // up-stroke to a rounded peak
    d += ` C ${round(x + step * 0.15)} ${round(bottom - 2)}, ${round(xPeak - step * 0.45)} ${round(top)}, ${round(xPeak)} ${round(top)}`;
    // down-stroke to the next trough
    d += ` C ${round(xPeak + step * 0.4)} ${round(top)}, ${round(xNext - step * 0.1)} ${round(bottom)}, ${round(xNext)} ${round(bottom - 1)}`;
    x = xNext;
  }

  // Flat tail
  d += ` C ${round(x + 1)} 10, ${round(x + 3)} 9.5, ${round(width - 1)} ${round(9 + rand())}`;
  return { d, width };
}
