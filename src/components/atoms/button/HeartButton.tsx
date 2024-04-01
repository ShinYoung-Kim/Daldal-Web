import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { IconButton, ToastMessageLikeOrDelete } from '@components/index';
import { useDeleteWishItem, usePostWishItem } from '@hooks/apis/wishList';
import { useBottomSheetStore } from '@stores/layerStore';
import isLogin from '@utils/isLogin';

type HeartButtonProps = {
	id: number;
	isDib: boolean;
	size: number;
	className?: string;
};

const HeartButton = ({ id, isDib, size, className }: HeartButtonProps) => {
	const [curLike, setCurLike] = useState<boolean>(isDib);
	const openBottomSheet = useBottomSheetStore(state => state.openBottomSheet);

	useEffect(() => {
		setCurLike(isDib);
	}, [isDib]);

	const onErrorCallback = () => {
		setCurLike(prev => !prev);
	};

	const { mutate: postWishItem } = usePostWishItem(onErrorCallback);
	const { mutate: deleteWishList } = useDeleteWishItem(onErrorCallback);

	const handleLikeHeart = () => {
		if (isLogin()) {
			toast(t => <ToastMessageLikeOrDelete like={!curLike} toastId={t.id} />);
			setCurLike(prev => !prev);
			if (curLike) {
				deleteWishList([id]);
			} else {
				postWishItem(id);
			}
		} else {
			openBottomSheet('login');
		}
	};
	return (
		<IconButton
			className={className}
			icon={{
				id: curLike ? 'like-full' : 'like-empty',
				size,
			}}
			onClick={handleLikeHeart}
		/>
	);
};

export default HeartButton;
