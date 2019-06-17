import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const AboutMeComponent = props => {
	return (
		<div className="p-3 p-lg-5 d-flex flex-column">
			<h2 className="mb-5">About Me</h2>

			<FontAwesomeIcon icon={faMusic} size="3x" className="aboutMeIcon" />
			<p>Apart from being interesting in developing, I often indulge myself in music, either by playing classical or pop music on the piano or listening to music produced by other cultures. My old content of me playing piano can be found <a href="https://www.youtube.com/user/YummyBlaCha/">here</a>.</p>
			<br/>
			<FontAwesomeIcon icon={faChessKnight} size="3x" className="aboutMeIcon" />
			<p>Chess has been a hobby of mine in the past few years. I played chess ever since I was in elementary school, but not as extensively as I do now. My main chess website platform is lichess, and you can find my two profiles through <a href="https://lichess.org/@/yummyblabla">here</a> and <a href="https://lichess.org/@/wolfsheep">here</a>.</p>
			<br/>
			<FontAwesomeIcon icon={faGamepad} size="3x" className="aboutMeIcon" />
			<p>I am also an avid gamer. As of now, I mainly play on my Nintendo Switch console. However, my favourite game genre would be real time strategy, especially games like Starcraft, Warcraft, and Age of Empires. For a social setting, I like party games like Mario Kart, Mario Party, Super Smash Bros, and board games that bring out my competitive nature.</p>
			
		</div>
	);
};

export default AboutMeComponent;
