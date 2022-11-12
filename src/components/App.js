import React, { useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";


const App = () => {
    const [selectedVideo, setSelectedVideos] = useState(null);
    const [videos, search] = useVideos('eminem');

    useEffect(() => {
        setSelectedVideos(videos[0]);
    }, [videos])

       // setSelectedVideos(response.data.items[0]);

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={setSelectedVideos} 
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};




export default App;