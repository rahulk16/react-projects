import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// const Greeting = () => {
// 	return <h1>My First Component.</h1>;
// };

// const Greeting = () => {
// 	return (
// 		<>
// 			<div>
// 				<h1>My First Component.</h1>
// 			</div>
// 			<h2>Hello World!</h2>
// 		</>
// 	);
// };

const BookList = () => {
	return (
		<section>
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
};

const Book = () => {
	return (
		<article>
			<Image />
			<Title />
			<Author />
		</article>
	);
};

const Image = () => <h2>Image Placeholder</h2>;
const Title = () => <h2>Book Title</h2>;
const Author = () => {
	return <h4>Author</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
