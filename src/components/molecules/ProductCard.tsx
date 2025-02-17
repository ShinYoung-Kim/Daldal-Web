import { useNavigate } from 'react-router-dom';

import { ImageWithCheck, ImageWithHeart, CardInfo } from '@components/atoms';
import { ProductSimple } from '@models/product/entity/product';

interface ProductCardProps extends ProductSimple {
	size: 'small' | 'medium' | 'large';
	type: 'default' | 'checkbox' | 'heart';
}

const ProductCard = ({
	thumbnailUrl,
	title,
	price,
	type,
	refund,
	isDib,
	size,
	id,
}: ProductCardProps) => {
	const navigate = useNavigate();
	const handleCardClick = () => {
		navigate(`/detail/${id}`);
	};

	const Image = {
		checkbox: <ImageWithCheck src={thumbnailUrl} alt={title} id={id} />,
		default: (
			<img
				src={thumbnailUrl}
				alt={title}
				className="w-full rounded-[5px] aspect-square object-cover"
			/>
		),
		heart: (
			<ImageWithHeart src={thumbnailUrl} alt={title} id={id} isDib={isDib} />
		),
	};

	const stylesBySize = {
		small: {
			containerGap: 'gap-1',
		},
		medium: {
			containerGap: 'gap-1',
		},
		large: {
			containerGap: 'gap-5',
		},
	};

	return (
		<div
			className={`flex flex-col ${stylesBySize[size].containerGap} cursor-pointer w-full aspect-square`}
			onClick={type !== 'checkbox' ? handleCardClick : () => {}}
		>
			{Image[type]}
			<CardInfo title={title} price={price} paybackPrice={refund} size={size} />
		</div>
	);
};

export default ProductCard;
