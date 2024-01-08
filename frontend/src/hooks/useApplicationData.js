import { useState } from 'react';

const useApplicationData = () => {

  const [state, setState] = useState({
    favouritedPhotos: [],
    selectedPhotoData: null,
    isModalOpen: false,
  });

  const updateToFavPhotoIds = (photo) => {
    const isPhotoFavourited = state.favouritedPhotos.some(favPhoto => favPhoto.id === photo.id);

    const updatedFavourites = isPhotoFavourited
      ? state.favouritedPhotos.filter(favPhoto => favPhoto.id !== photo.id)
      : [...state.favouritedPhotos, photo];

    setState({ ...state, favouritedPhotos: updatedFavourites });
  };

  const handleModalToggle = (photoData = null) => {
    setState({
      ...state,
      isModalOpen: !state.isModalOpen,
      selectedPhotoData: photoData,
    });
  };

  const onClosePhotoDetailsModal = () => {
    setState({ ...state, isModalOpen: false });
  };

  return {
    state,
    updateToFavPhotoIds,
    handleModalToggle, 
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
