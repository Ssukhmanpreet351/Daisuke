import { MovieCreation, PhotoCamera } from '@mui/icons-material';
import { Typography, Box, Tooltip } from "@mui/material";
import { useFetchAll } from '../useFetch';

export default function People(props){
    const {data:people} = useFetchAll(props.people);
    console.log(people);

    return(
        <Box>
            <Typography variant="h6" fontWeight={700} textAlign="left" margin={"2px"}> 
                Directed By:
            </Typography>

            <Typography variant="body1" display="flex" alignItems="left" margin={"2px"}>
                <Tooltip title="Directed By">
                    <PhotoCamera htmlColor="darkblue" />
                </Tooltip>
                <span>{
                    `\u00A0 ${ props.director }`
                }</span>
            </Typography>


            <Typography variant="h6" fontWeight={700} textAlign="left" margin={"2px"}> 
                Produced By:
            </Typography>

            <Typography variant="body1" display="flex" alignItems="left" margin={"2px"}>
                <Tooltip title="Produced By">
                    <MovieCreation htmlColor="darkblue" />
                </Tooltip>
                <span>{
                    `\u00A0${ props.producer }`
                }</span>
            </Typography>
        </Box>
    )
}