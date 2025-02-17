import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { KonstaProvider, Preloader } from 'konsta/react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import Error from '@pages/Error';
import { ComponentWithProps } from '@type/providerTree';
import { buildProvidersTree } from '@utils/buildProvidersTree';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			throwOnError: true,
			refetchOnWindowFocus: false,
			retry: false,
		},
		mutations: {
			throwOnError: true,
		},
	},
});

const providerWithProps: ComponentWithProps[] = [
	[QueryClientProvider, { client: queryClient }],
	[KonstaProvider],
	[BrowserRouter],
	[
		ErrorBoundary,
		{
			FallbackComponent: Error,
			onReset: () => {
				window.location.reload();
			},
		},
	],
	[
		Suspense,
		{
			fallback: (
				<div className="w-full h-full flex justify-center items-center">
					<Preloader className="k-color-Primary" />
				</div>
			),
		},
	],
];

const ProvidersTree = buildProvidersTree(providerWithProps);
export default ProvidersTree;
