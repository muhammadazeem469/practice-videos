import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import useVideo from "../hooks/useVideo";
import VideoList  from "./VideoList";
import VideoDetail from "./VideoDetail";


const App = () => {
    
    const [SelectedVideo, setSelectedVideo] = useState(null)
    const [videos,search] = useVideo('buildings')

    useEffect(()=>{
        setSelectedVideo(videos[0])
    },[videos])

    //

    

    return(
            <div className="ui container">
                <SearchBar onTermSubmit={search} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={SelectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default App

