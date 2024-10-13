import Header from "../commonUI/Header";
import ProjectCard from "../commonUI/ProjectCard";

const Projects = () => {
	const projects = [
		{
			title: "Project 1",
			description:
				"Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts. ",
			techStack: ["React", "JavaScript", "HTML", "CSS"],
			poster:
				"https://images.unsplash.com/photo-1726855500757-658894d298eb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "https://github.com/Farooq-Mohammed/Project-1",
		},
		{
			title: "Project 2",
			description:
				"Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.",
			techStack: ["React", "JavaScript", "HTML", "CSS"],
			poster:
				"https://images.unsplash.com/photo-1728327511275-9c3491fb9eb1?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "https://github.com/Farooq-Mohammed/Project-1",
		},
		{
			title: "Project 1",
			description:
				"Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts. ",
			techStack: ["React", "JavaScript", "HTML", "CSS"],
			poster:
				"https://images.unsplash.com/photo-1726855500757-658894d298eb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "https://github.com/Farooq-Mohammed/Project-1",
		},
		{
			title: "Project 2",
			description:
				"Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.",
			techStack: ["React", "JavaScript", "HTML", "CSS"],
			poster:
				"https://images.unsplash.com/photo-1728327511275-9c3491fb9eb1?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "https://github.com/Farooq-Mohammed/Project-1",
		},
		{
			title: "Project 1",
			description:
				"Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts. ",
			techStack: ["React", "JavaScript", "HTML", "CSS"],
			poster:
				"https://images.unsplash.com/photo-1726855500757-658894d298eb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "https://github.com/Farooq-Mohammed/Project-1",
		},
		{
			title: "Project 2",
			description:
				"Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.",
			techStack: ["React", "JavaScript", "HTML", "CSS"],
			poster:
				"https://images.unsplash.com/photo-1728327511275-9c3491fb9eb1?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "https://github.com/Farooq-Mohammed/Project-1",
		},
	];

	return (
		<div className="container projects">
			<Header
				title="Projects"
				subtitle="Here's some of my projects that I have worked on"
			/>
			<div className="projects-container">
				{projects.map((project, idx) => (
					<ProjectCard project={project} key={`${project.title}_#${idx}`} />
				))}
			</div>
		</div>
	);
};

export default Projects;
