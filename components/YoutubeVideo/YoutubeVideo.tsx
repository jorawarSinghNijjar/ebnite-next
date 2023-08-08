import YouTube, { YouTubeProps } from 'react-youtube';

const YoutubeVideo = () => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '300',
        width: '500',
      };

    return (
        <YouTube videoId='7X8II6J-6mU' opts={opts} onReady={onPlayerReady} />
    );
}

export default YoutubeVideo;