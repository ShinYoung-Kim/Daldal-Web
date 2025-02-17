import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useRef } from 'react';

import { SvgIcon } from '@components/common';
import colors from '@constants/colors';
import { usePostImageUpload } from '@hooks/apis/imageUpload';

const ImageUploadButton = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const queryClient = useQueryClient();
	const onSuccessCallback = () => {
		queryClient.invalidateQueries({ queryKey: ['imageUploadSimpleList'] });
	};
	const { mutate } = usePostImageUpload(onSuccessCallback);

	const onUploadImage = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (!e.target.files) {
				return;
			}
			const formData = new FormData();
			formData.append('file', e.target.files[0]);

			mutate(formData);
		},
		[],
	);

	const handleClick = useCallback(() => {
		if (!inputRef.current) {
			return;
		}
		inputRef.current.click();
	}, []);

	return (
		<>
			<input
				type="file"
				accept="image/*"
				ref={inputRef}
				onChange={onUploadImage}
				className="hidden"
			/>
			<button
				className="bg-Gray80 rounded-[5px] w-full !relative flex items-center justify-center !aspect-square active:opacity-30 overflow-hidden"
				onClick={handleClick}
			>
				<SvgIcon id="plus" size={32} color={colors.Gray50} />
			</button>
		</>
	);
};

export default ImageUploadButton;
