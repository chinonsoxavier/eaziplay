import React from "react";
import Button from "./Button";

export default function IntroView() {
	return (
		<div className="intro__view">
			<div className="view__content">
				<div className="content">
					<div className="intro">
						<div className="intro__text">
							<h1>
								Run your <span>payroll</span> <span>easily</span> in{" "}
								<span>seconds</span>
							</h1>

							<p>
								We've built an inclusive simple solution for individual and
								businesses to manage staff, pay salaries, bills, and relevant
								taxes all at once.
							</p>

							<Button text={"Start Using Free, Forever"} color={"primary"} />
						</div>

						<div className="app_link"></div>
					</div>
				</div>

				<div className="content">
          <div className="bg__view">
            <div className="overlay" style={{position:'relative'}} >
				<img style={{height:'100%',width:'670px',position:'absolute',objectFit:'contain'}} alt='' src={require('.././assets/image.png')} />
			</div>
          </div>
        </div>
			</div>
		</div>
	);
}
