import React from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';

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
    </div>
  );
};

export default App;
