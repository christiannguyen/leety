import React, { useEffect } from 'react';
import './App.css';
// import axios from 'axios';
import AddMoreModal from './feature/problems/addMoreModal';
import Solutions from './feature/solutions/solutions';
import { useRoutes } from 'hookrouter';
import Problems from './feature/problems/problems';
import WithSidebar from './feature/sidebar/withSidebar';
import Home from './feature/home/home';

const routes = {
	'/': () => WithSidebar(Home),
	// '/problems': () => WithSidebar(Solutions),
	'/problems/:id': ({ id }) => <Solutions id={id} />,
};

function App() {
	// useEffect(() => {
	// 	axios
	// 		.get('/api/problems')
	// 		.then(res => {
	// 			console.log('hit, res', res);
	// 		})
	// 		.catch(err => console.log('err', err));
	// });
	return useRoutes(routes);
	// 	return (
	// 		<div className="App">
	// 			<AddMoreModal />
	// 			<Solutions />
	// 		</div>
	// 	);
}

export default App;
