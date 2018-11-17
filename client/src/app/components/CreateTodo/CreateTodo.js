import styles from './CreateTodo.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import {set, get} from 'idb-keyval';
import axios from 'axios';

import Text from './../Text/Text';
import Button from './../Button/Button';

class CreateTodo extends Component {

  constructor(props){
    super(props);
    this.state = {
      token: '',
      text: ''
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleBlur = () => {

  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value
    })
  }

  handleFocus = () => {
    console.log();
  }

  handleClick = async () => {
    let token = await get('token');
    axios.post('/api/todos', {
      text: this.state.text
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth': token
      }
    }).then(res => {
      console.log(res.data);
    }).catch(e => {
      console.log(e);
    })
  }

  render() {
    return (
      <div className={classnames(styles.root)}>
        <input className={classnames(styles.field)} type="text" onChange={this.handleChange}/>
        <Button primary small handleClick={() => this.handleClick()}>Create</Button>
      </div>
    );
  }
}

export default CreateTodo;
