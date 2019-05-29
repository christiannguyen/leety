import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProblemCard from './problemCard';
import { navigate } from 'hookrouter';

function Problems() {
	const [problems, setProblems] = useState([]);
	async function getProblems() {
		const problems = await axios.get('/api/problems');
		setProblems(problems.data);
	}
	useEffect(() => {
		getProblems();
	}, []);

	return (
		<>
			{problems.map(problem => {
				return <ProblemCard link={problem.link} id={problem.id} />;
			})}
		</>
	);
}

export default Problems;
