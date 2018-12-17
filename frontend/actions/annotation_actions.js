import * as AnnotationApiUtil from "../util/annotation_api_util";

export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const RECEIVE_ANNOTATIONS_ERRORS = "RECEIVE_ANNOTATIONS_ERRORS"

const receiveAnnotation = (annotation) => {
  return {
    type: RECEIVE_ANNOTATION,
    annotation
  }
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ANNOTATIONS_ERRORS,
    errors
  }
};

export const createAnnotation = (annotation) => dispatch => {
  debugger
  return AnnotationApiUtil.createAnnotation(annotation)
    .then(ann => dispatch(receiveAnnotation(ann)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
};