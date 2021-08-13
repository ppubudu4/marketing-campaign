import { TaskTypes, SET_LOADING } from '../types/types';

const initialState = {
  taskList: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TaskTypes.GET_TASK:
      return {
        ...state,
        taskList: action.payload,
        loading: false,
      };
    case TaskTypes.ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
        loading: false,
      };

    case TaskTypes.UPDATE_TASK:
      return {
        ...state,
        taskList: state.taskList.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case TaskTypes.ERROR_TASK:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
