import React from 'react'
import { useParams } from 'react-router-dom';

const PostFeature = () => {

    const { postId } = useParams();

    return (
      <div> Post Feature {postId}</div>
    )
}

export default PostFeature;
