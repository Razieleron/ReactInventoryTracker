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
      id: item.id});
  }

  return (
    <React.Fragment>
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