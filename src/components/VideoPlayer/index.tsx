import { Player } from "video-react";
import "video-react/dist/video-react.css";

interface VideoPlayerProps {
  src: string;
    thumbnail: string;
    height: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, thumbnail, height }) => {
  return <Player muted={false} fluid={false} height={height} playsInline poster={thumbnail} src={src} />;
};

export default VideoPlayer;
