import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage/AboutPage.jsx";
import { ContactPage } from "./Pages/ContactPage/ContactPage.jsx";
import { DashboardPage } from "./Pages/DashboardPage/DashboardPage.jsx";
import { UsersPage } from "./Pages/UsersPage/UsersPage.jsx";
import { LoginPage } from "./Pages/LoginPage/LoginPage.jsx";
import { HomePage } from "./Pages/HomePage/HomePage.jsx";

const ourRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "home",
		element: <HomePage />,
	},
	{
		path: "about",
		element: <AboutPage />,
	},
	{
		path: "contact",
		element: <ContactPage />,
	},
	{
		path: "dashboard",
		element: <DashboardPage />,
	},
	{
		path: "Users",
		element: <UsersPage />,
	},
	{
		path: "login",
		element: <LoginPage />,
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={ourRouter} />
	</StrictMode>
);
