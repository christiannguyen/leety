import React, { useState } from 'react';
import axios from 'axios';

function AddMoreModal() {
	const [link, setLink] = useState('');
	const [difficulty, setDifficulty] = useState('easy');

	function handleSubmit(e) {
		e.preventDefault();
		axios
			.post('/api/problems', {
				link,
				difficulty,
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" value={link} onChange={e => setLink(e.target.value)} />
				<select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
					<option value="easy">easy</option>
					<option value="medium">medium</option>
					<option value="hard">hard</option>
				</select>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default AddMoreModal;
