import React from 'react';
import Lectorem from 'react-lectorem';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const renderStory = (story, idx) => (
  <Lectorem key={ idx } data={ story } />
);

const Panel = props => {
  const { story, idx, currentStoryIndex, setCurrentStoryIndex } = props;

  return (
    <Accordion
      expanded={ currentStoryIndex === idx }
      onChange={ () => setCurrentStoryIndex(currentStoryIndex === idx ? null : idx) }
    >
      <AccordionSummary
        classes={ { root: { backgroundColor: 'red' } }}
        expandIcon={<ExpandMoreIcon /> }
      >
        <div style={ { width: 160, textAlign: 'center' } }>
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
      </AccordionSummary>
      <AccordionDetails>
        { renderStory(story, idx) }
      </AccordionDetails>
    </Accordion>
  );
};

export default Panel;
