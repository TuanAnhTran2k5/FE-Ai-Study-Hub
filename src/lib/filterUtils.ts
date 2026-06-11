export function normalizeSearchTerm(value: string) {
  return value.trim().toLowerCase();
}

export function includesSearchTerm(values: Array<string | number | null | undefined>, searchTerm: string) {
  const normalizedSearchTerm = normalizeSearchTerm(searchTerm);

  if (normalizedSearchTerm.length === 0) {
    return true;
  }

  return values.join(' ').toLowerCase().includes(normalizedSearchTerm);
}

export function matchesSelectFilter<T extends string>(
  selectedValue: string,
  allValue: string,
  itemValue: T,
) {
  return selectedValue === allValue || itemValue === selectedValue;
}
