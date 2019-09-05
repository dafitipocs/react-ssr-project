import axios from 'axios';
import { CALL_API, ADD_REQUEST_CANCELLATION, CANCEL_REQUESTS } from '../constants';

const { CancelToken } = axios;

export default ({ dispatch }) => next => (action) => {

  if (action.type === CALL_API) {

    dispatch({ type: CANCEL_REQUESTS });

    if (action.animationStart) dispatch({ type: action.animationStart });

    const cancelToken = new CancelToken(cancellation => dispatch({ type: ADD_REQUEST_CANCELLATION, cancellation }));
    axios(Object.assign({ cancelToken }, action.metadata))
      .then((response) => {
        if (action.animationEnd) dispatch({ type: action.animationEnd });
        dispatch(Object.assign(action.success, { payload: response.data }));
      })
      .catch((error) => {
        if (action.animationEnd) dispatch({ type: action.animationEnd });
        if (!axios.isCancel(error)) dispatch(action.error);
      });
  }

  next(action);
};
