import React from "react";

const AnnotationIndexItem = (props) => {
  return (
    <div className="annotation-index-item">
      {props.ann.body}
    </div>
  )
};

export default AnnotationIndexItem;