import { useParams } from "react-router-dom";
import { Container, Stack, Tooltip } from "@mui/material";
import People from "./anime-details/People";
import {useFetch} from "./useFetch";
import Intro from "./anime-details/Intro";
import Exception from "./custom/Exception";
import Content from "./anime-details/Content";
import Cast from "./anime-details/Cast"
import Loader from "./custom/Loader";
import BackButton from "./custom/BackButton";
import { Parallax } from "react-parallax";

export default function AnimeDetails(){
    const { id } = useParams();
    const ANIME_DETAILS_URL = "https://ghibliapi.herokuapp.com/films/" + id;
    const {data: indvAnimeDetail ,isPending, error} = useFetch(ANIME_DETAILS_URL);
    
    return (
        <div>
            { !isPending && !indvAnimeDetail && error &&
                <Exception 
                    title={"404:Not Found"} 
                    message={`Invalid Anime ID: ${error}`}
                /> 
            }
            { isPending && <Loader /> }
            {indvAnimeDetail && 
            <>
                <Parallax bgImage={indvAnimeDetail.movie_banner} strength= {200}>
                    <div style={{width: "100%", height: "400px", objectFit:"cover", justifyContent:"center"}}>
                    </div>
                </Parallax>
                <Container maxWidth="md">
                    <Stack spacing={1} direction="row" marginTop={2}>
                        <Stack spacing={2} direction="column">
                            <Intro {...indvAnimeDetail}/>
                            <div>
                                <Content {...indvAnimeDetail}/>
                                {indvAnimeDetail.people && <Cast {...indvAnimeDetail}/>}
                            </div>
                        </Stack>
                        <div>
                            <Tooltip title="Promo Poster">
                                <img src= {indvAnimeDetail.image} style={{minWidth:"200px", maxWidth:"300px", width:"100%"}}></img>
                            </Tooltip>
                            {indvAnimeDetail.people && <People {...indvAnimeDetail}/>}
                        </div>
                    </Stack>
                </Container>
            </>
            }
            <BackButton /> 
        </div>
    )
}