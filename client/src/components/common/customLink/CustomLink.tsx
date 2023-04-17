import React from 'react';
import { Link } from 'react-router-dom';

interface CustomLinkProps {
	text: string;
	path: string;
}
const CustomLink = ({ text, path }: CustomLinkProps) => {
	return (
		<Link style={{ color: 'white', textDecoration: 'none' }} to={path}>
			{text}
		</Link>
	);
};

export default CustomLink;
