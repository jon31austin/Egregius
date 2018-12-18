import * as AnnotationApiUtil from "../util/annotation_api_util";

export const RECEIVE_ANNOTATIONS = "RECEIVE_ANNOTATIONS";
export const RECEIVE_ANNOTATIONS_ERRORS = "RECEIVE_ANNOTATIONS_ERRORS";
export const DELETED_ANNOTATION = "DELETED_ANNOTATION";

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
    type: DELETED_ANNOTATION
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

export const updateAnnotation = (ann) => dispatch => {
  return AnnotationApiUtil.updateAnnotation(ann)
    .then(ann => dispatch(receiveDeletion(ann)))
};

export const deleteAnnotation = (id) => dispatch => {
  return AnnotationApiUtil.deleteAnnotation(id)
    .then(ann => dispatch(deleteAnnotation(ann)))
};