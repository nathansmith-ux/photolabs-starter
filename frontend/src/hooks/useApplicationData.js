import { useReducer, useEffect } from 'react';

const initialState = {
  favouritedPhotos: [],
  selectedPhotoData: null,
  isModalOpen: false,
  photoData: [],
  topicData: []
}

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
    case 'SET_PHOTO_DATA':
      return {
        ...state,
        photoData: action.payload
      }
    
      case 'SET_TOPIC_DATA': 
        return {
          ...state,
          topicData: action.payload
        }

    default:
      return state
  }
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

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8001/api/photos').then(res => res.json()),
      fetch('http://localhost:8001/api/topics').then(res => res.json())
    ])
    .then(([photoData, topicData]) => {
      dispatch({ type: 'SET_PHOTO_DATA', payload: photoData });
      dispatch({ type: 'SET_TOPIC_DATA', payload: topicData });
    })
    .catch(error => console.error('There was an error fetching data:', error));
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    handleModalToggle, 
    onClosePhotoDetailsModal,
  };

};

export default useApplicationData;
