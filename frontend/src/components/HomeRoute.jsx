import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";
import React from 'react';
import PhotoDetailsModal from "../routes/PhotoDetailsModal";

const HomeRoute = ({
  favouritedPhotos,
  selectedPhotoData,
  isModalOpen,
  updateToFavPhotoIds,
  handleModalToggle,
  onClosePhotoDetailsModal,
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