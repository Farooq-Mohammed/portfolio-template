import React from "react";

type PropTypes = {
	title: string;
	subtitle: string;
};

const Header = ({ title, subtitle }: PropTypes) => {
	return (
		<div className="header">
			<h2 className="title">{title}</h2>
			<p className="fw-500">{subtitle}</p>
		</div>
	);
};

export default Header;
