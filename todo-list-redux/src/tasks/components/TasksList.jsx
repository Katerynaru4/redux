import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import { sortedTasksListSelector } from '../tasks.selectors';
import * as tasksActions from '../tasks.actions';

class TasksList extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className="list">
          {this.props.tasksList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.props.updateTask}
              onDelete={this.props.deleteTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

TasksList.propTypes = {
  data: PropTypes.shape({
    tasksList: PropTypes.array.isRequired,
    fetchTasks: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
  }),
};

const mapState = (state) => {
  return {
    tasksList: sortedTasksListSelector(state),
  };
};

const mapDispatch = {
  fetchTasks: tasksActions.fetchTasks,
  createTask: tasksActions.createTask,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
};

export default connect(mapState, mapDispatch)(TasksList);
