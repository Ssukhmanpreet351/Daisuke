import { Container, Tooltip, Typography } from "@mui/material";
import { StarRate, AccessTimeFilled, RecordVoiceOver } from '@mui/icons-material';

export default function Intro(props){
    return(
        <div>
            <Container sx={{textAlign:"left"}} >
                <Typography fontSize={30} variant="h4" fontFamily={"Poppins"} fontWeight={700}>
                    {props.title} - {props.original_title} [{ props.release_date }]
                </Typography>

                <Typography variant="h6" display="flex" alignItems="center" fontFamily={"Poppins"} fontWeight={500}>
                    <Tooltip title="Pronunciation">
                        <RecordVoiceOver htmlColor = "darkblue" />
                    </Tooltip>
                    <span style={ {marginLeft: "5px"} }>
                        { props.original_title_romanised }
                    </span>
                </Typography>
                
                <Typography variant="h6" display="flex" alignItems="center" fontFamily={"Poppins"} fontWeight={600}>
                    <Tooltip title="RT Score">
                        <StarRate htmlColor="orange" /> 
                    </Tooltip>
                    <span style={ {marginLeft: "5px"} }>
                        { props.rt_score }/100
                    </span>
                </Typography>

                <Typography variant= "h6" display="flex" alignItems="center" fontFamily={"Poppins"} fontWeight={500}>
                    <Tooltip title="Running Time">
                        <AccessTimeFilled htmlColor="darkblue" />
                    </Tooltip>
                    <span style={ {marginLeft: "5px"} }>
                        { props.running_time } minutes
                    </span>
                </Typography>
                
            </Container>
        </div>
    )
}