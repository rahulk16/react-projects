import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
	return (
		<section>
			<Book image="Image Placeholder" bookTitle="Book Title" author="Author" />
			<Book image="Image Placeholder" />
		</section>
	);
};

const Book = (props) => {
	return (
		<article>
			<h2>{props.image}</h2>
			<h2>{props.bookTitle}</h2>
			<h4>{props.author}</h4>
		</article>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
