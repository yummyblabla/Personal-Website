import React from "react";

const ExperienceComponent = props => {
	return (
		<div className="p-3 p-lg-5 d-flex flex-column">
			<h2 className="mb-5">EXPERIENCE</h2>

			<ExperienceBlock
				title="Junior Software Developer"
				location="Reva Solutions"
				date="May 2019 - December 2019"
				body="Something"
			/>

			<ExperienceBlock
				title="Quality Control Chemist"
				location="Viva Pharmaceuticals Inc."
				date="August 2015 - July 2018"
				body="In addition to conducting chemical testing using the latest methods and equipment, I was heavily involved with developing a spreadsheet system that uses Microsoft Excel for the laboratory personnel to promote data integrity, accuracy, and security. I self-learned VBA to incorporate features requested by managers to deliver a functional system accepted by the FDA."
			/>

			<ExperienceBlock
				title="Research Assistant"
				location="Taiheiyo Cement Corporation"
				date="May 2013 - March 2014"
				body="As one of the foreign intern students in the Japanese company, expectations for me were high. I collaborated with my supervisor to deliver findings of a new analytical method with the use of automated program that utilized macro language. In addition, I made an English instruction manual for future intern students to use the automated software."
			/>

		</div>
	);
};

const ExperienceBlock = ({ title, location, date, body}) => {
	return (
		<div className="d-flex flex-column flex-md-row mb-5">
			<div className="mr-auto">
				<h3 className="text-uppercase mb-0">{title}</h3>
				<h4 className="experienceSubHeader text-uppercase mb-3">{location}</h4>
				<p>{body}</p>
			</div>
			
			<span className="experienceDate text-md-right">{date}</span>
		</div>
	);
}

export default ExperienceComponent;
