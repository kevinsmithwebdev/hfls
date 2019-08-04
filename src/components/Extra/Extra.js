import React, { PureComponent } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import DownloadedIcon from '@material-ui/icons/CloudDone';
import Typography from '@material-ui/core/Typography';
import supplementalMaterials from './extra.data';
import './Extra.css'

const getKey = (grade, label) => `${grade} - ${label}`;

class Extra extends PureComponent {
  state = { downloadedList: [] };

  addFileDownloadList = key =>
    this.setState(state => ({ downloadedList: [...state.downloadedList, key] }))

  renderSupplementList = ({ label, url }, grade) => {
    const key = getKey(grade, label);
    const hasBeenDownloaded = this.state.downloadedList.includes(key);
    return (
      <ListItem key={ key }>
        <Button variant='outlined' onClick={ () => !hasBeenDownloaded && this.addFileDownloadList(key) }>
          <a href={ url } download>
            {
              hasBeenDownloaded
                ? <DownloadedIcon color='action' fontSize='large' />
                : <DownloadIcon color='primary' fontSize='large' />
            }
          </a>
        </Button>
        <ListItemText primary={ label } />
      </ListItem>
    );
  }
  
  renderGradeSupplements = ({ items, grade }) => (
    <CardContent key={ grade }>
      <Typography variant='display1' component='h3'>{ grade }</Typography>
      <List>
        { items.map(list => this.renderSupplementList(list, grade)) }
      </List>
    </CardContent>
  );

  render() {
    return (
      <div id='Extra'>
        <Card style={ { backgroundColor: 'antiqueWhite', padding: '20px' } }>
          <Typography variant='display2' component='h2'>Here is some materials to supplement the curriculum:</Typography>
          { supplementalMaterials.map(grade => this.renderGradeSupplements(grade)) }
        </Card>
      </div>
    )
  }
}

export default Extra;
