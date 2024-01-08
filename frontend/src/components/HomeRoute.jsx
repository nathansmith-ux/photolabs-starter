import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";
import React from 'react';
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import photos from "mocks/photos";

const HomeRoute = ({
  favouritedPhotos,
  selectedPhotoData,
  isModalOpen,
  updateToFavPhotoIds,
  handleModalToggle,
  onClosePhotoDetailsModal
}) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar 
        favouritedPhotos={favouritedPhotos}
      />
      <PhotoList 
        favouritedPhotos={favouritedPhotos}
        handleFavouritePhotos={updateToFavPhotoIds}
        onPhotoClick={handleModalToggle}
        photos={photos}
      />
      {isModalOpen ? (
        <PhotoDetailsModal 
          onCloseClick={onClosePhotoDetailsModal} 
          data={selectedPhotoData}
          favouritedPhotos={favouritedPhotos}
          handleFavouritePhotos={updateToFavPhotoIds}
        />
        ) : null}
    </div>
  );
};

export default HomeRoute;