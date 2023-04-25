import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';


function ItemList(props){
  return (
    <React.Fragment>
      <hr />
      {props.itemList.map((item) =>
        <Item
          whenItemClicked = { props.onItemSelection }
          names={item.names}
          origin={item.origin}
          description={item.description}
          id={item.id}
          key={item.id}
          />
      )}
    </React.Fragment>
  );
}


ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default ItemList; 