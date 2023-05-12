import * as React from "react";
import { Button, TextField, Typography } from "@mui/material";
import "./notebook.css";
import { useState } from "react";

function Notebook() {
	const [tempVal, setTempVal] = useState("");
	const [text, setText] = useState("");

	return (
		<div>
			<div className="inputmultiline">
				<TextField
					sx={{ width: 500, marginBottom: 2 }}
					id="outlined-multiline-flexible"
					label=""
					multiline
					onChange={(e) => {
						setTempVal(e.target.value);
					}}
					value={tempVal}
				/>
				<Button
					className="buttonx"
					variant="contained"
					sx={{ width: 50 }}
					onClick={() => {
						setText((temp) => temp + tempVal + " ");
						setTempVal("");
					}}>
					Submit
				</Button>
			</div>
			<div className="text">
				<Typography>{text}</Typography>
			</div>
		</div>
	);
}

export default Notebook;
