import { useEffect } from "react";
import { skillSet } from "../../utils";
import Header from "../commonUI/Header";
import axios from "axios";

const Skills = () => {
	const getSvgBySkillname = async (skillname) => {
		try {
			const response = await axios
				.get(`https://api.svgl.app`, { crossdomain: true })
				.then((res) => res.data);

			console.log(response);

			if (!response.ok) {
				throw new Error(
					`Network response was not ok. Status: ${response.status}`
				);
			}

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error("Fetch error:", error);
		}
	};
	useEffect(() => {
		getSvgBySkillname("java");
	}, []);
	return (
		<div className="container skills">
			<Header
				title="Skills"
				subtitle="From brainstorming brilliance to digital wizardry, here's what I bring to the table!"
			/>
			<div className="skill-set">
				{skillSet.map((skill) => (
					<div className="skill" key={skill.title}>
						{skill.logo}
						<span>{skill.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
