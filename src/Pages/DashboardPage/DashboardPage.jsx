import React from "react";

const DashboardPage = () => {
	return (
		<div id="dashboard">
			<h2>Dashboard Page</h2>
			<p>Here is some dashboard content.</p>
			<button onClick={() => alert("Redirect to Login Page")}>
				Go to Login
			</button>
		</div>
	);
};

export default DashboardPage;
