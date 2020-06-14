import React, { useState } from 'react';
import Panel from './Panel/Panel';

const renderPanel = (story, idx, currentStoryIndex, setCurrentStoryIndex) => (
  <div style={ { margin: '15px 0' } }>
    <Panel story={ story } currentStoryIndex={ currentStoryIndex } idx={ idx } setCurrentStoryIndex={ setCurrentStoryIndex } />
  </div>
);

const Panels = ({ stories }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(null);

  if (!stories) {
    return null;
  }

  return (
    <div>
      { stories.map((story, idx) => renderPanel(story, idx, currentStoryIndex, setCurrentStoryIndex)) }
    </div>
  );
};

export default Panels;
