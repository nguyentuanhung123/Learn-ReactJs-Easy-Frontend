import React from 'react'
import { useParams } from 'react-router-dom';

const DetailPage = () => {

    const {todoId} = useParams();

    return (
      <div>Total Detail Page { todoId }</div>
    )
}

export default DetailPage;

DetailPage.propTypes = {
    
}
