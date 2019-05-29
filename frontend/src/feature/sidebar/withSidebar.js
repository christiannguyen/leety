import React from 'react';
import { navigate } from 'hookrouter';
import { usePath } from 'hookrouter';
import './withSidebar.scss';

function WithSidebar(Component) {
	const path = usePath();
	console.log('path', path.split(''));
	return (
		<div className="page">
			<div className="sidebar" />
			<div className="main-content">
				<Component />
			</div>
		</div>
	);
}

export default WithSidebar;
