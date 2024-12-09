import profileImage from "../../assets/profile.png";
import SocialLinks from "../commonUI/SocialLinks";

const Home = () => {
	return (
		<div className="home container" id="home">
			<div className="main-content">
				<section className="profile-img-section">
					<img src={profileImage} alt="Profile pic" />
				</section>
				<div className="profile-content">
					<h1 className="title">Mohammed Farooq Ahmed</h1>
					<p className="summary">
						I am an aspiring Software Engineer who has received comprehensive
						training in Java and MERN stack technology, as well as deep
						understanding of Data Structures and Algorithms.
					</p>
				</div>
			</div>
			<SocialLinks />
		</div>
	);
};

export default Home;
