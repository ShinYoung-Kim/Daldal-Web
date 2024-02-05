import { getProductDetailList, getProductSimpleList } from '@apis/product';
import { CategoryName } from '@constants/categoryList';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useGetProductSimpleList = (itemCategoryType?: CategoryName) => {
	return useInfiniteQuery({
		queryKey: ['productSimpleList'],
		queryFn: ({ pageParam = 1 }) =>
			getProductSimpleList(pageParam, itemCategoryType),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = allPages.length + 1;
			//TODO isLast 반영
			return lastPage?.data?.data ? undefined : nextPage;
		},
	});
};

export const useGetProductDetailList = (id: number) => {
	return useQuery({
		queryKey: ['productDetailList'],
		queryFn: () => getProductDetailList(id),
		select: data => data.data.data,
	});
};
