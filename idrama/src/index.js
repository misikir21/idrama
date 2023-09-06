import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Test() {
	const [movierating, setmovierating] = useState(0);
	return (
		<div>
			<StarRating color="blue" maxrate={10} onratseting={setmovierating} />
			<p>this movie is rated as {movierating}</p>
		</div>
	);
}
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<Test />
		<StarRating
			size={24}
			message={["terriable", "bad", "good", "v.good", "awoseme"]}
		/>
		<StarRating maxrate={5} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
