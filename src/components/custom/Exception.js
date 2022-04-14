import { Box } from "@mui/material";

export default function Exception(props) {   
    return(
        <div>
            <Box paddingTop={"100px"} height={"380px"}>
                <img src="/giphy.gif" alt="not found"></img>
                <h1>{props.title}</h1>
                <h4>{props.message}</h4>
            </Box>
        </div>
    )
}