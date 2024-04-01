import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { SearchHistory, SearchQuery } from '@type/searchQuery';

type SearchHistoryStore = {
	searchHistoryList: SearchHistory;
	addSearchQuery: (searchQuery: SearchQuery) => void;
	deleteSearchHistory: () => void;
};

export const useSearchHistoryStore = create(
	persist<SearchHistoryStore>(
		(set, get) => ({
			searchHistoryList: [],
			addSearchQuery: (searchQuery: SearchQuery) => {
				set({
					searchHistoryList: [
						searchQuery,
						...get().searchHistoryList.filter(
							searchHistory => searchHistory !== searchQuery,
						),
					],
				});
			},
			deleteSearchHistory: () => {
				set({ searchHistoryList: [] });
			},
		}),
		{
			name: 'searchHistory',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
