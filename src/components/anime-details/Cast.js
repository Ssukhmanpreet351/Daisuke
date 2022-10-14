import { Typography, Container } from "@mui/material";
import { useFetchAll } from '../useFetch';

export default function Cast(props){
    const {data:people} = useFetchAll(props.people);
    // console.log(people);

    return(
        <Container sx={{paddingTop:5,paddingBottom:2}}>
            <Typography variant="h6" textAlign="left" fontFamily={"Poppins"} fontWeight={600}>
                Cast:
            </Typography>
            <Typography fontFamily={"Poppins"} fontWeight={400} textAlign= "left" component="div" display="flex" flexDirection= "row" flexWrap="wrap">
                {
                    people && people.map((person, key)=>{
                        return (
                            <span key={key}>
                                {
                                    `•\u00A0${person.name}\u00A0\u00A0\u00A0`
                                }
                            </span>
                        )
                    })
                }
            </Typography>
        </Container>
    )
}