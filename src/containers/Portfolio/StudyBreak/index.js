import React from "react";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StudyBreakComponent = props => {
	return (
		<div className="p-3 p-lg-5 d-flex flex-column">
			<div className="my-auto">
	        	<h2 className="mb-2">StudyBreak</h2>
	        	<div className="subheading mb-3">BCIT 2019 Co-op Hackathon</div>
	        	<p className="lead mb-5">During the 27-hour Hackathon, my team and I were able to utilize new technologies to provide a working solution to a common problem. We aimed to tackle the problem of providing a tool to students who want to improve their mental and physical healthy during harsh exam periods. Our idea was to provide reminders to students while studying that they need to take necessary breaks, such as water and physical activity breaks, to maintain their health.
		          	<br />
		          	<br />
		          	As a team, we collectively agreed to use a new technology that we have not worked with before, and that was Android Studio. We knew every other team would probably use the traditional Javascript/HTML/CSS to make a web application, and we wanted to take a big risk. We spent time efficiently, as we delegated time in the beginning of the hackathon to go through tutorials and documentation before tackling the development side.
		          	<br />
		          	<br />
		          	With agile methodologies in mind, we held hourly stand-up meetings to delegate tasks, and communicate any successes and impediments that each member came across. This was successful, as each member was working on different features and collectively collaborate as a team.
		          	<br />
		          	<br />
		          	In the end, we presented our product and achieved 2nd place out of 10 different teams. To me, this was huge success as our risk payed off. We got to learn a new technology, and we developed a working product.
	         	</p>
	        	<p className="mb-5">January 3, 2019</p>
	        </div>

	        <div className="my-auto">
		        <h5>Example Pictures</h5>
		        <div className="text-center">
		        	<img className="mb-5" width="300" src={require("../../../assets/examples/studybreak/studybreak_1.png")} />
			        <img className="mb-5" width="300" src={require("../../../assets/examples/studybreak/studybreak_2.png")} />
			        <img className="mb-5" width="300" src={require("../../../assets/examples/studybreak/studybreak_3.png")} />
			        <img className="mb-5" width="300" src={require("../../../assets/examples/studybreak/studybreak_4.png")} />
			        <img className="mb-5" width="300" src={require("../../../assets/examples/studybreak/studybreak_5.png")} />
		        </div>
		        
		    </div>

	        <div className="my-auto">
	        	<p className="lead mb-0">You can view the source code on <a href="https://github.com/yummyblabla/StudyBreak">GitHub <FontAwesomeIcon icon={faGithubSquare} size="sm" /></a>
	        	</p>
	        </div>
		</div>
	);
};

export default StudyBreakComponent;