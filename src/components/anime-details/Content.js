import { Container, Typography } from "@mui/material";

export default function Content(props){
    return (
        <div>
            <Container sx = {{textAlign:"left"}} >
                <Typography variant="h6" fontWeight={700} display="flex" alignItems="center">
                    Description:
                </Typography>
                <Typography fontSize={15} variant="subtitle1" display="flex" alignItems="center">
                    { props.description }
                </Typography>
            </Container>
        </div>
    )
}