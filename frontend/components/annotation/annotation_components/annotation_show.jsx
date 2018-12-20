import React from "react";

class AnnotationShow extends React.Component {

  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };
  
  handleEdit(e) {
    e.preventDefault();
    this.props.setSelection({ editing: true })
  };

  handleDelete(e) {
    e.preventDefault();

    this.props.deleteAnnotation(this.props.lyricSelection.id)
      .then(() => this.props.clearSelection() )
  };
  
  render() {
    const allowChange = this.props.annotation.user_id === this.props.currentUser
    
    if (allowChange) {
      return (
        <div className="anno-fixed annotation-index-item">
          <div className="anno-author-header"><span style={{ color: "#ff1464" }}>You</span> said:</div>
          <p className="single-anno-body">{this.props.annotation.body}</p>
          <div className="edit-buttons-container">
            <input className="change-submit" type="submit" value="Delete Annotation" onClick={this.handleDelete} />
            <input className="change-submit" type="submit" value="Edit Annotation" onClick={this.handleEdit} />
          </div>

        </div>
      )
    } else {
      return (
        <div className="anno-fixed annotation-index-item">
          <h2 className="anno-author-header"><span style={{ color: "#ff1464" }}>{this.props.annotation.username}</span> said:</h2>
          <p className="single-anno-body">{this.props.annotation.body}</p>
        </div>
      )
    }
  }
};

export default AnnotationShow;