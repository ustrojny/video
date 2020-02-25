import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
const KEY = 'AIzaSyChNx_9wMpfxrQ2s-lS0rpAH-rED-Dlm7c';

class App extends React.Component {
    state = { videos: [], selectedVideo: null }; //initialize state as an empty array

    onTermSubmit = async term => {
        //console.log(term);
        const response = await youtube.get('/search', {
            params: {
                part: "snippet",
                type:'video',
                maxResults: 5,
                key: KEY,
                q: term
            }
        });
        //console.log(response.data.items);
        this.setState({videos: response.data.items});
    };

    onVideoSelect = (video) => {
        console.log('Test', video);
    };

    render() {
        return (
            <div className="ui container">  
                <SearchBar onFormSubmit = { this.onTermSubmit } />
                <VideoList 
                    onVideoSelect = { this.onVideoSelect } 
                    videos = { this.state.videos } />
            </div>
            );
    }
}

export default App;