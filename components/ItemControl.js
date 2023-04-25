import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

// this must be a class based component to handle state

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedItem: null,
      editing: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }