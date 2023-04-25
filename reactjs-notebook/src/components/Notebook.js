import * as React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import "./notebook.css";
import { useState } from "react";

function Notebook() {
	const [tempVal, setTempVal] = useState("");
	const [text, setText] = useState("");

	return (
		<Grid container className="GridContainer">
			<Grid item xs={6}>
				<div className="inputAndButton">
					<TextField
						sx={{ width: 500 }}
						id="outlined-multiline-flexible"
						label=""
						multiline
						onChange={(e) => {
							setTempVal(e.target.value);
						}}
						value={tempVal}
						placeholder="Enter a new Note"
					/>
					<Button
						variant="contained"
						sx={{ marginLeft: "40px" }}
						onClick={() => {
							setText((temp) => temp + tempVal + " ");
							setTempVal("");
						}}>
						Add Note
					</Button>
				</div>
			</Grid>
			<Grid item xs={6}>
				<Typography>{text}</Typography>
			</Grid>
		</Grid>
	);
}

export default Notebook;
