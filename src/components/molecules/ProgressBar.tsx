import { useNProgress } from '@tanem/react-nprogress';

import { Bar, BarContainer } from '@components/atoms';

type ProgressBarProps = {
	isAnimating: boolean;
};

const ProgressBar = ({ isAnimating }: ProgressBarProps) => {
	const { animationDuration, progress, isFinished } = useNProgress({
		isAnimating,
	});

	return (
		<BarContainer isFinished={isFinished}>
			<Bar animationDuration={animationDuration} progress={progress} />
		</BarContainer>
	);
};

export default ProgressBar;
