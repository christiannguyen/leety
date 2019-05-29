import React from 'react';
import { navigate } from 'hookrouter';

function ProblemCard({ id, link }) {
	return <div onClick={() => navigate(`/problems/${id}`)}>{link}</div>;
}

export default ProblemCard;
