import React from "react";

const PortfolioComponent = props => {
	return (
		<div className="p-3 p-lg-5 d-flex flex-column">
			<div class="my-auto">
          		<h2 class="mb-5">Portfolio</h2>
				  <div className="row">
					<PortfolioPart
						name="Big Two"
						imageName="bigtwo.png"
						link="./portfolio/bigtwo.html"
					/>
					<PortfolioPart
						name="Study Break"
						imageName="studybreak.png"
						link="./portfolio/bigtwo.html"
					/>
					<PortfolioPart
						name="Minesweeper"
						imageName="minesweeper.png"
						link="./portfolio/bigtwo.html"
					/>
					<PortfolioPart
						name="Mouse Click Accuracy Game"
						imageName="game.png"
						link="./portfolio/bigtwo.html"
					/>
				  </div>
			</div>
		</div>
	);
};

const PortfolioPart = ({ name, imageName, link }) => {
	return (
		<div class="col-md-6 col-lg-4">
			<a class="portfolio-item d-block mx-auto" href={link}>
				<img class="img-fluid" src={require(`../../assets/portfolio/${imageName}`)} alt={name} />
				<p class="text-center">{name}</p>
			</a>
		</div>
	);
}

export default PortfolioComponent;
