import React from 'react';
import { useDispatch } from 'react-redux';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import myStyle from '../stylesheet/style';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions/index';

const Nav = () => {
  const classes = myStyle();
  const dispatch = useDispatch();
  const handleCategoryChange = (e) => {
    // dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h2">
            BookStore CMS
          </Typography>
          <Typography edge="start" variant="h3">
            BOOKS
          </Typography>
          <CategoryFilter handleFilter={handleCategoryChange} />
          <AccountCircleIcon fontSize="large" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;