import { useInfiniteQuery } from '@tanstack/react-query';

import { search } from '@apis/search';

export const useSearch = (keyword: string) => {
	return useInfiniteQuery({
		queryKey: ['search', keyword],
		queryFn: ({ pageParam = 1 }) => search(pageParam, keyword),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = allPages.length + 1;
			return lastPage?.data.isLastPage ? undefined : nextPage;
		},
	});
};
