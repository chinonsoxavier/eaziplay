import React from "react";

export default function Demo() {
	return (
		<div className="demo">
			<div className="demo__content">
				<div className="request">
          <h1>Get an Exclusive Demo of Eazipay</h1>

          <p>Our greatest priority is to put you and your business first. Let's show you how we can help</p>
        </div>

				<div className="request">
          <div className="request__card">
            <h3>First things first</h3>

            <p>We want to serve you better, tell us a bit about yourself or company</p>

            <div className="group">
              <div className="pill">Individual</div>
              <div className="pill">Company</div>
            </div>

            <div className="inputs">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Job Title" />
              <input type="text" placeholder="Company Size" />
            </div>

            <div className="btn">Request Demo</div>
          </div>
        </div>
			</div>
		</div>
	);
}
