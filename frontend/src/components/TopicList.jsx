import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topicData, fetchPhotosBasedOnTopic}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic) => (
        <TopicListItem 
          key={topic.id} 
          title={topic.title} 
          slug={topic.slug}
          onClick={(e) => { 
            e.preventDefault() 
            fetchPhotosBasedOnTopic(topic.id)}
          } 
        />
      ))}
    </div>
  );
};

export default TopicList;
