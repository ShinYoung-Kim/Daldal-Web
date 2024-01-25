import { ProductCard } from '@components/molecules';
import { mockProductSimpleList } from '@mocks/mockProductSimpleList';
import { ProductSimpleList } from '@models/product/entity/product';

const classNameOfGridCols = {
	2: 'grid-cols-2',
	3: 'grid-cols-3',
};

type GridCols = keyof typeof classNameOfGridCols;

type ProductCardListProps = {
	gridCols?: GridCols;
	size?: 'small' | 'medium' | 'large';
	type?: 'heart' | 'checkbox' | 'default';
	productList?: ProductSimpleList;
};

const ProductCardList = ({
	gridCols = 2,
	size = 'medium',
	type = 'default',
	productList = mockProductSimpleList,
}: ProductCardListProps) => {
	return (
		<div className={`grid gap-4 ${classNameOfGridCols[gridCols]}`}>
			{productList.map(({ thumbnail, id, ...product }, index) => (
				<ProductCard
					thumbnail={thumbnail}
					size={size}
					type={type}
					key={`ProductCard#${index}`}
					id={id}
					{...product}
				/>
			))}
		</div>
	);
};

export default ProductCardList;
