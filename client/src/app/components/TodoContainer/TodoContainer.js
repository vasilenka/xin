import styles from './TodoContainer.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Todo from './../Todo/Todo';

class TodoContainer extends Component {
  render() {
    let {todos} = this.props;
    return (
      <div className={classnames(styles.root)}>
        {
          todos.map(todo =>
            <Todo key={todo._id} text={todo.text} completed={todo.completed}/>
          )
        }
      </div>
    );
  }
}

export default TodoContainer;
