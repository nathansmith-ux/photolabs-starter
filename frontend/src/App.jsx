import React from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    handleModalToggle, 
    onClosePhotoDetailsModal,
    fetchPhotosBasedOnTopic,
    getAllPhotoData,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        favouritedPhotos={state.favouritedPhotos}
        selectedPhotoData={state.selectedPhotoData}
        isModalOpen={state.isModalOpen}
        updateToFavPhotoIds={updateToFavPhotoIds}
        handleModalToggle={handleModalToggle}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        photoData={state.photoData}
        topicData={state.topicData}
        fetchPhotosBasedOnTopic={fetchPhotosBasedOnTopic}
        getAllPhotoData={getAllPhotoData}
      />

      {state.isModalOpen ? (
        <PhotoDetailsModal 
          onCloseClick={onClosePhotoDetailsModal} 
          data={state.selectedPhotoData}
          favouritedPhotos={state.favouritedPhotos}
          handleFavouritePhotos={updateToFavPhotoIds}
        />
      ) : null}
    </div>
  );
};

export default App;
