import React from "react";
import PropTypes from "prop-types";

function Item(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
      <h3>{props.origin} - {props.names}</h3>
      <p><em>{props.description}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  names: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  description: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;