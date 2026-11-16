// Facts derived from src/data/experience.yaml, so they stay up to date.
import { getCollection } from 'astro:content';

/** Experience entries, newest first (file order) */
export async function getExperience() {
  return (await getCollection('experience')).sort((a, b) => a.data.order - b.data.order).map((e) => e.data);
}

/** The role without an end date (or the newest one) */
export async function getCurrentRole() {
  const experience = await getExperience();
  return experience.find((e) => !e.end) ?? experience[0];
}

/** Whole years since the first job started, e.g. 10 */
export async function getYearsOfExperience(now = new Date()) {
  const experience = await getExperience();
  const first = experience[experience.length - 1];
  if (!first) return 0;
  const [month, year] = first.start.split('/').map((n) => Number(n.trim())); // "04 / 2016"
  return Math.floor((now.getFullYear() * 12 + now.getMonth() + 1 - (year * 12 + month)) / 12);
}

/** "09 / 2022" → "2022" */
export const yearOf = (date: string) => date.split('/').pop()?.trim() ?? date;
