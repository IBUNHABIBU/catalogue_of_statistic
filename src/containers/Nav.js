import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CategoryFilter from '../components/CategoryFilter';
import useStyles from '../stylesheets/grid';
import { useDispatch } from 'react-redux';
import { changeFilter } from './../redux/actions/index';

const Nav = () => {
  const dispatch = useDispatch()
  const handleCategoryChange = () => {
    dispatch(changeFilter(e.target.value));
  };
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            RECIPE ZONE
          </Typography>
          <Link to="/" className={classes.link}>
            <Typography variant="h5">
              Home
            </Typography>
          </Link>
          <Link to="/category/1" className={classes.link}>
            <CategoryFilter handleFilter={handleCategoryChange} className={classes.catField} />
          </Link>
          <Link to="/about" className={classes.link}>
            <Typography edge="start" variant="h5">
              About
            </Typography>
          </Link>
          <AccountCircleIcon fontSize="large" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
