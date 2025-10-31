import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const Photograph = () => {

    const params = useParams();

  return (
    <div>
        <Helmet>
            <title>Photograph {params.id}</title>
            <meta name='description' content='Photo' />
        </Helmet>
    </div>
  )
}

export default Photograph