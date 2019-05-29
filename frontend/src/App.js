import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AddMoreModal from './feature/problems/addMoreModal';
import Solutions from './feature/solutions/solutions';

function App() {
	// useEffect(() => {
	// 	axios
	// 		.get('/api/problems')
	// 		.then(res => {
	// 			console.log('hit, res', res);
	// 		})
	// 		.catch(err => console.log('err', err));
	// });
	return (
		<div className="App">
			<AddMoreModal />
			<Solutions />
		</div>
	);
}

export default App;
