import React from "react";
import Marquee from "./Marquee";
import BootstrapSVG from "../../assets/svg/BootstrapSVG";
import ReactSVG from "../../assets/svg/ReactSVG";

type PropTypes = {
	project: {
		title: string;
		description: string;
		techStack: string[];
		poster: string;
		link: string;
	};
};

const ProjectCard = ({ project }: PropTypes) => {
	const cardRef = React.useRef<HTMLDivElement>(null);

	// React.useEffect(() => {
	// 	const card = cardRef.current;

	// 	if (!card) return; // Early return if card is null

	// 	const handleMouseMove = (e) => {
	// 		const { width, height, left, top } = card.getBoundingClientRect();
	// 		const x = e.clientX - (left + width / 2);
	// 		const y = e.clientY - (top + height / 2);

	// 		const tiltX = (y / height) * 20;
	// 		const tiltY = (x / width) * -20;

	// 		card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
	// 	};

	// 	const handleMouseLeave = () => {
	// 		card.style.transform = "rotateX(0deg) rotateY(0deg)";
	// 	};

	// 	card.addEventListener("mousemove", handleMouseMove);
	// 	card.addEventListener("mouseleave", handleMouseLeave);

	// 	return () => {
	// 		card.removeEventListener("mousemove", handleMouseMove);
	// 		card.removeEventListener("mouseleave", handleMouseLeave);
	// 	};
	// }, []);

	return (
		<div className="project card" ref={cardRef}>
			<div className="project-poster">
				<img src={project.poster} alt="Project Poster" />
				<p className="title">{project.title}</p>
			</div>

			<div className="project-content">
				<p className="description">{project.description}</p>
				<Marquee>
					<div className="flex align-items-center">
						<BootstrapSVG size={20} />
						<ReactSVG size={20} />
					</div>
				</Marquee>
				<a href={project.link} target="_blank">
					Visit
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="4"
						height={12}
						width={12}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						></path>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
