import React from 'react';
import List from './List';
import EmptyList from './EmptyList';

const Gallery = props => {
    
    const results = props.data.images;
    let images;

    if(results.length > 0) {
      images = results.map( img => 
        <List 
            url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`}
            key={img.id} 
            title={img.title}/>
      )
    } else {
      images = <EmptyList />
    }

    return (
        <div className="photo-container">
            <h2>{results.length > 0 ? 'Results' : ''}</h2>
            <ul>
                {images}
            </ul>
        </div>
    );
}

export default Gallery;