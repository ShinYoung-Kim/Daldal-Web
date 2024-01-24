import { useState } from 'react';

import { BuyWithLikeButton, CardInfo } from '@components/atoms';
import { SmallProductDetailImageSlider } from '@components/molecules';
import { ImageSliderContainer } from '@components/organisms';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import PageLayout from '@layouts/PageLayout';
import { mockProductData } from '@mocks/product';
import { getYoutubeIdFromUrl } from '@utils/formatData';
import YouTube from 'react-youtube';

const ProductDetail = () => {
	// const { productId } = useParams();
	// TODO: productId를 이용해 상품 정보를 가져온다.
	const {
		images,
		title,
		price,
		refund: paybackPrice,
		video,
		url,
		like,
	} = mockProductData;

	const [isDetailImageSliderOpen, setIsDetailImageSliderOpen] = useState(false);

	const openDetailImageSlider = () => {
		setIsDetailImageSliderOpen(true);
	};

	const closeDetailImageSlider = () => {
		setIsDetailImageSliderOpen(false);
	};

	const textWithEnter = {
		moreTitle: '💕지그재그 내의 리뷰를 통해\n더 자세히 알아보세요!',
		moreDescription:
			"*구매는 '달달쇼핑' 내의 구매하기 버튼을 이용해야\n환급액을 받으실 수 있어요!",
	};

	if (isDetailImageSliderOpen) {
		return (
			<ImageSliderContainer
				handleClose={closeDetailImageSlider}
				images={images}
			/>
		);
	}

	return (
		<PageLayout leftType="back">
			<SmallProductDetailImageSlider
				images={images}
				handleOpenDetailImageSlider={openDetailImageSlider}
			/>
			<div className="p-5 flex flex-col gap-5">
				<CardInfo
					title={title}
					price={price}
					paybackPrice={paybackPrice}
					size="large"
					category="의류"
				/>
				<div className="w-full relative flex flex-col gap-[10px]">
					<h3 className="text-White typography-Body2 typography-SB">
						❣️ 유저들의 달달한 리뷰 확인하기
					</h3>
					<YouTube
						videoId={getYoutubeIdFromUrl(video)}
						opts={{
							height: '100%',
							width: '100%',
						}}
						className="h-full aspect-video overflow-hidden"
					/>
				</div>
				<div className="whitespace-pre-line">
					<h3 className="text-White typography-Body2 typography-SB">
						{textWithEnter.moreTitle}
					</h3>
					<h6 className="text-Error mt-2 mb-3 typography-Body4 typography-R">
						{textWithEnter.moreDescription}
					</h6>
					<iframe
						src={url}
						className="w-full aspect-[1/2] border-Gray60 rounded-3xl border-[7px]"
					/>
				</div>
			</div>
			<FixedBottomLayout height={'h-[96px]'} childrenPadding={'py-3 pl-4 pr-3'}>
				<BuyWithLikeButton like={like} />
			</FixedBottomLayout>
		</PageLayout>
	);
};

export default ProductDetail;
