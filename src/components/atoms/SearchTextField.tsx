import { useState, KeyboardEvent, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { IconButton } from '@components/atoms';
import { SvgIcon } from '@components/common';
import colors from '@constants/colors';
import { useSearchHistoryStore } from '@stores/searchHistoryStore';

type SearchTextFieldProps = {
	isFocused?: boolean;
	readOnly?: boolean;
	defaultValue?: string;
};

const SearchTextField = ({
	isFocused = false,
	readOnly = false,
	defaultValue,
}: SearchTextFieldProps) => {
	const navigate = useNavigate();

	const handleClickSearchTextField = () => {
		if (!readOnly) {
			return;
		}

		navigate('/search');
	};

	const [searchValue, setSearchValue] = useState(defaultValue || '');

	const handleClearSearchValue = () => {
		setSearchValue('');
	};

	const location = useLocation();

	useEffect(() => {
		if (searchValue === '' && location.pathname === '/search') {
			navigate('/search', { replace: true });
		}
	}, [searchValue]);

	const [searchParams, setSearchParams] = useSearchParams();
	const addSearchQuery = useSearchHistoryStore(state => state.addSearchQuery);
	const isSearchValueEmpty = searchValue === '';

	const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && !isSearchValueEmpty) {
			searchParams.set('query', searchValue);
			setSearchParams(searchParams, { replace: true });
			addSearchQuery(searchValue);
		}
	};

	const renderClearButton = () => {
		if (isSearchValueEmpty) {
			return null;
		}

		return (
			<IconButton
				onClick={handleClearSearchValue}
				icon={{
					id: 'close',
					size: 24,
					color: colors.Gray20,
				}}
				className="!w-fit !p-0 !h-fit"
			/>
		);
	};

	return (
		<div
			className="bg-Gray80 rounded-[100px] w-full flex px-4 py-[6px] gap-2 justify-center items-center my-3"
			onClick={handleClickSearchTextField}
		>
			<SvgIcon id="search" size={24} color={colors.Gray20} />
			<input
				readOnly={readOnly}
				autoFocus={isFocused}
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				onKeyDown={handleEnter}
				type="text"
				placeholder="화장품 사고 3% 환급받자💄"
				className="w-full bg-Gray80 text-white placeholder:text-Gray20 flex-1 focus-visible:outline-none typography-Body2 typography-R"
			/>
			{renderClearButton()}
		</div>
	);
};

export default SearchTextField;
