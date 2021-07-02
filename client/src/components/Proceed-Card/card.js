import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';

const ProceedCard = ({instance = "Customer"}) => {
  const classes = useStyles();

  let text = [];
  if (instance === 'Customer') {
      text = ['Know what\'s the best for you', 'Know what\'s the best for you', 'Continue as Customer'];
  } else if (instance === 'Provider') {
      text = ['Grow your bussines with the help of our App', 'People on our app are looking to spent their money on the right company.', 
           'Continue as Provider'];
  }
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent className={classes.content}>
        <Typography className={classes.title} >
          {text[0]}
        </Typography>
        <Typography  component="p" className={classes.body}>
          {text[1]}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button component={Link} to={instance === 'Customer' ? '/auth/signUp' : '/'} variant="contained" color="secondary">
          {text[2]}
        </Button>      
      </CardActions>
    </Card>
  );
};

export default ProceedCard;
