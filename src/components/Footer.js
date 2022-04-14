import { Box, Tooltip } from "@mui/material"

export default function Footer() {
    return (
        <Box textAlign={"center"} padding={1} marginBottom={0} bgcolor= "#0e67b4">
            <Tooltip title="GitHub Source Code">
                <a href="https://github.com/Ssukhmanpreet351" target="_blank">
                <img className="LogoImage" src="/GitHub-Emblem.png" alt="Logo" height={30}/>
                </a>
            </Tooltip>
            <h4>Made By Sukhmanpreet Singh</h4>
        </Box>
    )
}