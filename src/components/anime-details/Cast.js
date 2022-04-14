import { Typography, Container } from "@mui/material";
import { useFetchAll } from '../useFetch';

export default function Cast(props){
    const {data:people, isPending, error} = useFetchAll(props.people);
    console.log(people);

    return(
        <Container sx={{paddingTop:5,paddingBottom:2}}>
            <Typography variant="h6" textAlign="left" fontWeight={700}>
                Cast:
            </Typography>
            <Typography textAlign= "left" component="div" display="flex" flexDirection= "row" flexWrap="wrap">
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