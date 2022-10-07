import React from 'react';
import { unstable_HistoryRouter as HistoryRouter, useRoutes } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import MAP_ROUTES from "./routes";

const client = new ApolloClient({
	uri: 'http://localhost:3000',
	cache: new InMemoryCache()
});

function AppRoutes() {
	const routesElem = useRoutes(MAP_ROUTES);
	return routesElem;
}

function App() {
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<HistoryRouter history={createBrowserHistory()}>
					<AppRoutes />
				</HistoryRouter>
			</ApolloProvider>
		</div>
	);
}

export default App;
