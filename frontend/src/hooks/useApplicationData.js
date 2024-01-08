import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FAV_PHOTO_IDS':
      const isPhotoFavourited = state.favouritedPhotos.some(favPhoto => favPhoto.id === action.photo.id)
      
      const updatedFavourites = isPhotoFavourited ? state.favouritedPhotos.filter(favPhoto => favPhoto.id !== action.photo.id) : [...state.favouritedPhotos, action.photo]

      return { ...state, favouritedPhotos: updatedFavourites};

    case 'HANDLE_MODAL_TOGGLE':
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        selectedPhotoData: action.photoData,
      }

    case 'ON_CLOSE_PHOTO_DETAILS_MODAL':
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
    dispatch({ type: 'UPDATE_FAV_PHOTO_IDS', photo})
  }

  const handleModalToggle = (photoData = null) => {
    dispatch({ type: 'HANDLE_MODAL_TOGGLE', photoData})
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({type: 'ON_CLOSE_PHOTO_DETAILS_MODAL'})
  }

  return {
    state,
    updateToFavPhotoIds,
    handleModalToggle, 
    onClosePhotoDetailsModal,
  };

};

export default useApplicationData;
