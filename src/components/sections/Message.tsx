import React from "react";
import Header from "../commonUI/Header";
import SocialLinks from "../commonUI/socialLinks";
import Button from "../commonUI/Button";

const Message = () => {
	return (
		<div className="message container">
			<Header
				title="Let's get in touch"
				subtitle="Whether you have questions or you would just like to say hello, contact me."
			/>
			<SocialLinks />
			<p className="divider">OR</p>
			<section className="contact-form">
				<form>
					<input type="text" name="name" id="name" placeholder="Full Name" />
					<input type="email" name="email" id="email" placeholder="Email" />
					<textarea name="message" id="message" placeholder="Message" />
					<Button text="Send Message" type={"submit"} />
				</form>
			</section>
		</div>
	);
};

export default Message;
