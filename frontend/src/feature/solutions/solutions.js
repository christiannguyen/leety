import React, { useState } from 'react';
// import brace from 'brace';
import axios from 'axios';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

function Solutions() {
	const [code, setCode] = useState('');
	function onChange(newValue) {
		console.log('change', newValue);
		setCode(newValue);
	}
	function saveSolution() {
		axios
			.post('/api/solutions', {
				code,
				problem_id: 1,
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
			<AceEditor
				mode="javascript"
				theme="monokai"
				onChange={onChange}
				value={code}
				name="UNIQUE_ID_OF_DIV"
				editorProps={{ $blockScrolling: true }}
			/>
			<button onClick={saveSolution}>save</button>
		</div>
	);
}

export default Solutions;
