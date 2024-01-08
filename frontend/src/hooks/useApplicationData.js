import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'update_fav_photo_ids':
      const isPhotoFavourited = state.favouritedPhotos.some(favPhoto => favPhoto.id === action.photo.id)
      
      const updatedFavourites = isPhotoFavourited ? state.favouritedPhotos.filter(favPhoto => favPhoto.id !== action.photo.id) : [...state.favouritedPhotos, action.photo]

      return { ...state, favouritedPhotos: updatedFavourites};

    case 'handle_modal_toggle':
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        selectedPhotoData: action.photoData,
      }

    case 'on_close_photo_details_modal':
      return {
        ...state,
        isModalOpen: false
      }

    default:
      return state
  }
}

const initialState = {
  favouritedPhotos: [],
  selectedPhotoData: null,
  isModalOpen: false
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const updateToFavPhotoIds = (photo) => {
    dispatch({ type: 'update_fav_photo_ids', photo})
  }

  const handleModalToggle = (photoData = null) => {
    dispatch({ type: 'handle_modal_toggle', photoData})
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({type: 'on_close_photo_details_modal'})
  }

  return {
    state,
    updateToFavPhotoIds,
    handleModalToggle, 
    onClosePhotoDetailsModal,
  };

};

export default useApplicationData;
