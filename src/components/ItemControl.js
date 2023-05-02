import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';
import { v4 } from 'uuid';

import PropTypes from "prop-types";

// this must be a class based component to handle state

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [
        {
          names: "Arabica Blend",
          origin: "Afghanistan",
          description: "Earthy, with caramel and marshmallow notes",
          amountOnHand: 10,
          id: v4()
        },
        {
          names: "Ethiopian Dark Roast",
          origin: "Ethiopia",
          description: "Chocolatey notes with a mild bitterness",
          amountOnHand: 10,
          id: v4()
        },
        {
          names: "New Guinea Blonde",
          origin: "New Guinea",
          description: "Light and floral",
          amountOnHand: 10,
          id: v4()
        }
          
      ],
      selectedItem: null,
      editing: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({mainItemList: newMainItemList,
                  formVisibleOnPage: false });
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
        mainItemList: editedMainItemList,
        editing: false,
        selectedTicket: null
      });
  }

  handleChangingSelectedItem = (id) => {
    console.log(id)
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleDeletingItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    });
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditItemForm item = {this.state.selectedItem} onEditItem = {this.handleEditingItemInList} />
      buttonText = "Return to Item List";
    } else if (this.state.selectedItem !== null) {
      console.log(this.state.selectedItem)
      currentlyVisibleState = 
      <ItemDetail 
          item = {this.state.selectedItem} 
          onClickingDelete = {this.handleDeletingItem} 
          onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Item List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.mainItemList} onItemSelection={this.handleChangingSelectedItem} />;
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

ItemControl.propTypes = {
  mainItemList: PropTypes.object
};

export default ItemControl;