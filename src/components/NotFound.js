import { Box } from "@mui/material";
import BackButton from "./custom/BackButton";
export default function NotFound(){
    return (
        <Box paddingTop={"100px"} height={"430px"}>
            <img src="/giphy.gif" ALT="not found"></img>
            <h1>404: Page not Found</h1>
            <h4>The page you are looking for doesn't exist. </h4>
            <BackButton/>
        </Box>
    )
}