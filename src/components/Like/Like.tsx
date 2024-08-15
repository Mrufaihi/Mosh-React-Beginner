import { useState } from 'react';
import { FcDislike, FcLike } from 'react-icons/fc';

interface LikeProps {
  onHandleClick: () => void; //default prop function setup
}

function Like({ onHandleClick }: LikeProps) {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked); // Toggle value
    onHandleClick(); // also excute prop function
  };

  //if liked is true => like , else => dislike
  if (liked) return <FcLike onClick={toggle} size={30} color="red" />;
  return <FcDislike onClick={toggle} size={30} color="gray" />;
}

export default Like;
