import filters from '../data/filters';

export const getFilterTitle = (id: string) => {
  const filterItems = filters.flatMap((filter) => filter.items);
  return filterItems.find((item) => item.id === id)?.name || 'Unknown';
};

export const sliceText = (text: string, length: number) => {
  if (text.length > length) {
    return text.slice(0, length) + '...';
  }
  return text;
};
