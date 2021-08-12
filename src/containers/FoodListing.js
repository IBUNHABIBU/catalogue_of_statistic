import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const FoodListing = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const meals = useSelector((state) => state.allFoods.categories);
  const renderList = (
    <Grid container>
      {
        meals.map((meal) => {
          const {
            idCategory, strCategory, strCategoryThumb, strCategoryDescription,
          } = meal;
          return (
            <Grid item lg={3} key={idCategory}>
              <Paper>

                <p>{strCategory}</p>
                <img src={strCategoryThumb} alt={strCategoryThumb} />
                <p>{strCategoryDescription}</p>
                <Card className={classes.root}>
                  <CardHeader
                    title={stCategory}
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                     
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                 
                </Card>
              </Paper>
            </Grid>
          );
        })
      }
    </Grid>
  );
  return (
    <div>
      { renderList }
    </div>
  );
};

export default FoodListing;
