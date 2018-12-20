import React from "react";
import LoginPrompt from "./annotation_components/login_prompt";
import AnnotationForm from "./annotation_components/annotation_form_container";
import AnnotationShow from "./annotation_components/annotation_show_container";
import AnnotationEdit from "./annotation_components/annotation_edit_container";

class Annotation extends React.Component {
 
  render() {
    const { lyricSelection, loggedIn, singleAnnotation, trackId, openModal } = this.props;
    const { open, selected, editing } = lyricSelection;

    if (open && !loggedIn) {
      return <LoginPrompt openModal={openModal} />
    } else if (open && loggedIn) {
      return <AnnotationForm trackId={trackId} />
    } else if (selected && !editing) {
      debugger;
      return <AnnotationShow annotation={singleAnnotation} />
    } else if (selected && editing) {
      return <AnnotationEdit trackId={trackId}/>
    } else {
      return null;
    }
  };

};

export default Annotation;