import AnimeCard from "./AnimeCard";
import {useFetch} from "./useFetch";
import {Container} from "@mui/material";
import Loader from "./custom/Loader";

export default function AnimeList(){
    const {data: animeList ,isPending, error} = useFetch("https://ghibliapi.herokuapp.com/films");

    return (
        <div>
            { isPending && <Loader /> }
            { error !== null && <h3>{error}</h3> }
            <Container sx={{padding:2, display:"flex", justifyContent:"center", flexWrap:"wrap", paddingTop:"80px"}}>
            {
                animeList && animeList.map((anime, key) =>(
                    <AnimeCard key={key} {...anime}></AnimeCard>
                ))
            }
            </Container>
        </div>
    )
}