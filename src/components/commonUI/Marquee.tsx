import React from "react";

const Marquee = ({ children }) => {
	return (
		<div className="marquee">
			<div className="marquee-content">{children}</div>
		</div>
	);
};

export default Marquee;
