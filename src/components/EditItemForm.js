import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditItemForm(props){
  const { item } = props;
  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({
      names: event.target.names.value, 
      origin: event.target.origin.value, 
      description: event.target.description.value, 
      amountOnHand: parseInt(event.target.description.value), 
      id: item.id});
  }

  return (
    <React.Fragment>
      <h1>Item Details</h1>
      <h3>name: {item.names}</h3>
      <h3>origin: {item.origin}</h3>
      <h3>description: {item.description}</h3>
      <h3>amount on hand: {item.amountOnHand}</h3>
      <h3></h3>



      <ReusableForm 
        formSubmissionHandler={handleEditItemFormSubmission} 
        buttonText="Update Item" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
};

export default EditItemForm;