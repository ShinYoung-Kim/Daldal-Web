import { useParams } from 'react-router-dom';

import PostSearch from '@components/templates/search/PostSearch';
import PageLayout from '@layouts/PageLayout';

const SearchResult = () => {
	const { searchQuery } = useParams();
	const query = searchQuery || '';

	return (
		<PageLayout className="px-3" leftType="back">
			<PostSearch searchQuery={query} />
		</PageLayout>
	);
};

export default SearchResult;
