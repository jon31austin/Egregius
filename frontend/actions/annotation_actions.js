import * as AnnotationApiUtil from "../util/annotation_api_util";

export const RECEIVE_ANNOTATIONS = "RECEIVE_ANNOTATIONS";
export const RECEIVE_ANNOTATIONS_ERRORS = "RECEIVE_ANNOTATIONS_ERRORS";
export const RECEIVE_DELETION = "RECEIVE_DELETION";
export const RECEIVE_SELECTION = "RECEIVE_SELECTION";
export const CLEAR_SELECTION = "CLEAR_SELECTION";

const receiveAnnotations = (annotations) => {
  return {
    type: RECEIVE_ANNOTATIONS,
    annotations
  }
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ANNOTATIONS_ERRORS,
    errors
  }
};

const receiveDeletion = (ann) => {
  return {
    type: RECEIVE_DELETION,
    annotationId: Object.keys(ann)[0]
  }
};

export const setSelection = (sel) => {
  return {
    type: RECEIVE_SELECTION,
    selection: sel
  }
};

export const clearSelection = () => {
  return {
    type: CLEAR_SELECTION
  }
};

export const createAnnotation = (annotation) => dispatch => {
  return AnnotationApiUtil.createAnnotation(annotation)
    .then(ann => dispatch(receiveAnnotations(ann)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
};

export const fetchAnnotations = (trackId) => dispatch => {
  return AnnotationApiUtil.fetchAnnotations(trackId)
    .then(anns => dispatch(receiveAnnotations(anns)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
};

export const updateAnnotation = (ann) => dispatch => {
  return AnnotationApiUtil.updateAnnotation(ann)
    .then(ann => dispatch(receiveAnnotations(ann)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
};

export const deleteAnnotation = (id) => dispatch => {
  return AnnotationApiUtil.deleteAnnotation(id)
    .then(ann => dispatch(receiveDeletion(ann)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
};