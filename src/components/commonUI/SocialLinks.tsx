import React from "react";
import { SocialIcons } from "../../utils";

const SocialLinks = () => {
	return (
		<div className="social">
			{SocialIcons.map((icon) => (
				<a
					href={icon.link}
					target="_blank"
					title={icon.title}
					key={icon.title}
					className="social-link"
				>
					{icon.logo}
					<span>{icon.username}</span>
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
