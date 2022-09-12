import {useState , useEffect} from "react";
import youtube from "../apis/youtube";

const useVideo = (defaultSearchTerm) => {

    const [videos, setVideos] = useState([])
    useEffect(()=>{

        Search(defaultSearchTerm)

    },[defaultSearchTerm])

    const Search = async (term) => {
        const response = await  youtube.get('/search',{
                    params: {
                        q: term
                    }
                })
            setVideos(response.data.items)
        }

    return [videos,Search]


}

export default useVideo