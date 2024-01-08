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
      />
    </div>
  );
};

export default App;
