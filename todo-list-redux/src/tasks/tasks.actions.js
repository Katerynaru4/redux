import * as tasksGateway from './tasksGateway.jsx';
import { tasksListSelector } from './tasks.selectors.js';
export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

const tasksListRecieved = (usersData) => {
  return {
    type: TASKS_LIST_RECIEVED,
    payload: {
      usersData,
    },
  };
};

export const fetchTasks = () => {
  return function (dispatch) {
    tasksGateway
      .fetchTasksList()
      .then((tasksList) => dispatch(tasksListRecieved(tasksList)));
  };
};

export const updateTask = (taskId) => {
  return function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find((task) => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    tasksGateway
      .updateTask(taskId, updatedTask)
      .then(() => dispatch(fetchTasks()));
  };
};

export const deleteTask = (taskId) => {
  return function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => dispatch(fetchTasks()));
  };
};

export const createTask = (text) => {
  return function (dispatch) {
    const taskData = {
      text,
      done: false,
      creationDate: new Date().toISOString(),
    };
    tasksGateway.createTask(taskData).then(() => dispatch(fetchTasks()));
  };
};
