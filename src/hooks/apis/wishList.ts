import { useInfiniteQuery, useMutation } from '@tanstack/react-query';

import {
	deleteWishItem,
	getWishListProductSimpleList,
	postWishItem,
} from '@apis/wishList';

export const useGetWishListProductSimpleList = () => {
	return useInfiniteQuery({
		queryKey: ['wishListProductSimpleList'],
		queryFn: ({ pageParam = 1 }) => getWishListProductSimpleList(pageParam),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = allPages.length + 1;
			return lastPage?.data.isLastPage ? undefined : nextPage;
		},
	});
};

export const usePostWishItem = (errorCallback?: (error: Error) => void) => {
	return useMutation({
		mutationFn: (itemId: number) => postWishItem(itemId),
		onError: errorCallback,
	});
};

export const useDeleteWishItem = (errorCallback?: (error: Error) => void) => {
	return useMutation({
		mutationFn: (itemIds: number[]) => deleteWishItem(itemIds),
		onError: errorCallback,
	});
};
