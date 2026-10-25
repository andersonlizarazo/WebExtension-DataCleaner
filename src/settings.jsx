import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Settings } from './pages/Settings/index.jsx';

export function App() {
	return (
		<LocationProvider>
			<main>
				<Router>
					<Route default component={Settings} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('entrypoint'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
