import React from "react";
import workings from "../assets/workings.png";
import steps from "../assets/steps.png";

export default function Workings() {
	return (
		<div className="workings">
			<div className="workings__content">
				<h1>How Eazipay Works</h1>

				<p>Get started in 3 simple steps</p>

				<div className="steps__con">
					<div className="steps">
						<div className="sphere top">
							<div className="sphere">
								<div className="sphere"></div>
							</div>
						</div>

						<img alt="how eazipay works" src={workings} />
					</div>

					<div className="steps">
						<img alt="how eazipay works" src={steps} />
					</div>
				</div>
			</div>
		</div>
	);
}
