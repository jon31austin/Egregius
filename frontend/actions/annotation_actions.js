import * as AnnotationApiUtil from "../util/annotation_api_util";

export const RECEIVE_ANNOTATIONS = "RECEIVE_ANNOTATIONS";
export const RECEIVE_ANNOTATIONS_ERRORS = "RECEIVE_ANNOTATIONS_ERRORS"

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

export const createAnnotation = (annotation) => dispatch => {
  return AnnotationApiUtil.createAnnotation(annotation)
    .then(ann => dispatch(receiveAnnotations(ann)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
};

export const fetchAnnotations = (trackId) => dispatch => {
  return AnnotationApiUtil.fetchAnnotations(trackId)
    .then(anns => dispatch(receiveAnnotations(anns)))
};