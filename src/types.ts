// src/types.ts

export type CategoryId = 'all' | 'social' | 'messaging' | 'tools' | 'protocols';

export interface App {
  name: string;
  description: string;
  categories: CategoryId[];
  filters: Record<string, string[]>; // filterId -> itemId
  alternatives?: string[];
  banner: {
    src: string;
    alt: string;
  };
}

export interface FilterItem {
  id: string;
  name: string;
}

export interface FilterGroup {
  id: string;
  name: string;
  items: FilterItem[];
}

export type FiltersByCategory = {
  [key in CategoryId]: FilterGroup[];
};

export interface Category {
  id: CategoryId;
  name: string;
}
