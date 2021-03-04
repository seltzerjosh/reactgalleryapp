//stateful component

import React from 'react';
import Photo from './Photo';
import NotFound from "./NotFound";
import {withRouter} from 'react-router';

const PhotoContainer = (props) => {
    const results = props.data;
    let photos;
    //if else statement to only show images if axios finds some
    if (results.length > 0) {
        photos = results.map(photo =>
            <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} key={photo.id} altText={photo.title}/>);
    } else {
        photos = <NotFound />
    }
    return (
        <div className="photo-container">
            <h2>Results </h2>
            <ul>
                {photos}
            </ul>
        </div>
    );
}

export default withRouter(PhotoContainer);