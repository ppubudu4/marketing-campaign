import axios from 'axios';
import { TaskTypes, SET_LOADING } from '../types/types';

const baseUrl = `http://localhost:5000`;

//load tasks
export const getTasks = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    setLoading();

    const res = await axios.get(`${baseUrl}/tasks`, config);

    dispatch({
      type: TaskTypes.GET_TASK,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TaskTypes.ERROR_TASK,
      payload: error.message,
    });
  }
};

//task Add
export const addTask = (task) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    setLoading();
    const res = await axios.post(`${baseUrl}/tasks`, task, config);

    dispatch({
      type: TaskTypes.ADD_TASK,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TaskTypes.ERROR_TASK,
      payload: error.message,
    });
  }
};

//update task
export const updateTask = (task) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    setLoading();
    const res = await axios.put(`${baseUrl}/tasks/${task.id}`, task, config);
    dispatch({
      type: TaskTypes.UPDATE_TASK,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TaskTypes.ERROR_TASK,
      payload: error.message,
    });
  }
};
//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
