import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({data, favouritedPhotos, handleFavouritePhotos, onPhotoClick}) => {
  return (
  <div>
      <section key={data.id} className="photo-list__item">
        <PhotoFavButton 
          handleFavouritePhotos={handleFavouritePhotos}
          favouritedPhotos={favouritedPhotos}
          data={data}
        />
        <img className="photo-list__image" src={data.urls.regular} onClick={()=> onPhotoClick(data)}/>
          <div className="photo-list__user-details">
            <img className="photo-list__user-profile" src={data.user.profile}/>
            <div>
              <div>
                <span className="photo-list__user-info">{data.user.name}</span>
              </div>
              <div>
                <span className="photo-list__user-location photo-list__user-info">{data.location.city}, {data.location.country}</span>
              </div>
            </div>
          </div>
      </section> 
  </div>
  )
};

export default PhotoListItem;
