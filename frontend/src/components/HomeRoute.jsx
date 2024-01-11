import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";
import React from 'react';

const HomeRoute = ({
  favouritedPhotos,
  updateToFavPhotoIds,
  handleModalToggle,
  photoData,
  topicData,
  fetchPhotosBasedOnTopic,
  getAllPhotoData,
}) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar 
        favouritedPhotos={favouritedPhotos}
        topicData={topicData}
        fetchPhotosBasedOnTopic={fetchPhotosBasedOnTopic}
        getAllPhotoData={getAllPhotoData}
      />
      <PhotoList 
        favouritedPhotos={favouritedPhotos}
        handleFavouritePhotos={updateToFavPhotoIds}
        onPhotoClick={handleModalToggle}
        photos={photoData}
      />
    </div>
  );
};

export default HomeRoute;