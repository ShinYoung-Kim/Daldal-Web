import CaptionButton from '@components/atoms/CaptionButton';
import PointList from '@components/molecules/GroupOrder/PointList';
import PageLayout from '@components/templates/PageLayout';
import { NEXT_MONTH_POINT_LIST, THIS_MONTH_POINT_LIST } from '@mocks/pointList';

function Point() {
	return (
		<PageLayout leftType="logo" className="relative">
			<div className="flex flex-col gap-[14px] mb-5">
				<PointList {...THIS_MONTH_POINT_LIST} />
				<PointList {...NEXT_MONTH_POINT_LIST} />
			</div>
			<div className="sticky bottom-5 left-2/4 ">
				<CaptionButton
					mainText="포인트 출금하기"
					caption="1,000원 이상부터  출금 가능"
					onClick={() => console.log('포인트 출금하기로 이동하기')}
				/>
			</div>
		</PageLayout>
	);
}

export default Point;
