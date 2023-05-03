import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete , onClickingDecrement, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>{item.origin} - {item.names}</h3>
      <p><em>{item.description}</em></p>
      <h3>{item.amountOnHand}</h3>
      <button onClick={()=> onClickingEdit(item.id) }>Update Item</button>
      <button onClick={()=> onClickingDecrement(item.id)}>Decrement Item</button>
      <button onClick={()=> onClickingDelete(item.id) }>Close Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func,
};

export default ItemDetail; 