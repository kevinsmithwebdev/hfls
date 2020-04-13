import React from 'react';
import Lector from '../../../../packages/Lector/Lector';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const renderStory = story => (
  <Lector data={ story } />
);

const Panel = props => {
  const { story, idx, currentStoryIndex, setCurrentStoryIndex } = props;
  return (
    <ExpansionPanel
      expanded={ currentStoryIndex === idx }
      onChange={ () => setCurrentStoryIndex(currentStoryIndex === idx ? null : idx) }
    >
      <ExpansionPanelSummary
        classes={ { root: { backgroundColor: 'red' } }}
        expandIcon={<ExpandMoreIcon /> }
      >
        <div style={ { width: 100 } }>
          <img
            alt={ `story thumbnail - ${story.title}` }
            className='logo-image'
            height={ 60 }
            src={ story.thumbnailPath }
          />
        </div>
        <div>
          <Typography
            variant='h5'
            component='h5'
          >
            { story.title }
          </Typography>
          <Typography
            variant='h6'
            component='h6'
          >
            { story.subtitle }
          </Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        { renderStory(story) }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Panel;
