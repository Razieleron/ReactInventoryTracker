import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';

function NewItemForm(props){

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
      props.onNewItemCreation({
        names: event.target.names.value,
        origin: event.target.origin.value,
        description: event.target.description.value,
        id: v4()
      });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;