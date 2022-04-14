import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";

export default function Exception(props) {   
    return(
        <div>
            <Box paddingTop={"100px"} height={"380px"}>
                <img src="/giphy.gif"></img>
                <h1>{props.title}</h1>
                <h4>{props.message}</h4>
            </Box>
        </div>
    )
}