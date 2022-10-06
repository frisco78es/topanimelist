import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import Menu from './composant/Menu';
import Home from "./page/Home"

const client = new ApolloClient({
	uri: 'http://localhost:3000',
	cache: new InMemoryCache()
});

function App() {
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<BrowserRouter>
					<Routes>
						<Route path="/app" element={<Home />} />
					</Routes>
				</BrowserRouter>
				<Menu />
			</ApolloProvider>
		</div>
	);
}

export default App;
