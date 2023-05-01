import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const detailOne = {
	image: "Image Placeholder",
	bookTitle: "Book Title",
	author: "Author",
};

const detailTwo = {
	image: "Image Placeholder Two",
	bookTitle: "Book Title Two",
	author: "Author Two",
};

const BookList = () => {
	return (
		<section>
			<Book
				image={detailOne.image}
				bookTitle={detailOne.bookTitle}
				author={detailOne.author}
			/>
			<Book
				image={detailTwo.image}
				bookTitle={detailTwo.bookTitle}
				author={detailTwo.author}
			/>
		</section>
	);
};

const Book = (props) => {
	console.log(props);
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
