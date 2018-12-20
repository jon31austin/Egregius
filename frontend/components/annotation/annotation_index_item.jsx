//I don't need this file anymore
//maybe when I display the most popular annotations by default instead of null?

import React from "react";

const AnnotationIndexItem = (props) => {
  return (
    <div className="annotation-index-item">
      {props.ann.body}
    </div>
  )
};

export default AnnotationIndexItem;