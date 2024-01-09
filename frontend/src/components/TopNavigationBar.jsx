import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({favouritedPhotos, topicData, fetchPhotosBasedOnTopic, getAllPhotoData}) => {

  const isFavPhotoExist = favouritedPhotos.length > 0

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={(e) => {
        e.preventDefault();
        getAllPhotoData();
      }}>PhotoLabs</span>
      <TopicList 
        topicData={topicData} 
        fetchPhotosBasedOnTopic={fetchPhotosBasedOnTopic}
      />
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;