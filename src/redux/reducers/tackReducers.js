import { TaskTypes } from '../types/types';

const initialState = {
  taskList: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TaskTypes.GET_TASK:
      return {};
    default:
      return {
        state,
      };
  }
};
