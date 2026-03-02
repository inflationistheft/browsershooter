/** Max characters shown for display names; longer names get truncated with "...". */
export const MAX_DISPLAY_NAME_LEN = 10;

export function formatDisplayName(name: string): string {
  if (name.length <= MAX_DISPLAY_NAME_LEN) return name;
  return name.slice(0, MAX_DISPLAY_NAME_LEN) + "...";
}
