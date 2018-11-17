import styles from './Auth.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import {set, get, del} from 'idb-keyval';

import { ReactComponent as Google } from './google.svg';

import Text from './../../components/Text/Text';
import Button from './../../components/Button/Button';
import Header from './../../components/Header/Header';
import Body from './../../components/Body/Body';
import TodoContainer from './../../components/TodoContainer/TodoContainer';

// import Tick from './../../components/Tick/Tick';
import CreateTodo from './../../components/CreateTodo/CreateTodo';

class Auth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      authenticated: false,
    }
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount = async () => {

    let token = await get('token');
    let params = String(window.location.search)

    if(!token && params) {
      token = params.replace('?token=', '')
      set('token', token);
    }

    axios.get('/api/todos', {
      headers: {
        'x-auth': token
      }
    }).then(res => {
      this.setState({
        ...this.state,
        todos: res.data.todos,
        authenticated: true,
      });
    }).catch(e => {
      console.log(e);
    });

  }

  signOut = async () => {

    let token = await get('token');

    if(token) {
       axios.delete('http://localhost:5000/auth/me/logout', {
        headers: {
          'x-auth': token
        }
      }).then(res => {
        console.log(res.data);
        del('token');
        this.setState({
          ...this.state,
          authenticated: false,
        });
        window.location = '/';
      }).catch(e => {
        console.log(e);
      });
    }
  }

  render() {
    return (
      <div className={classnames(styles.root)}>
        <Header/>
        <Body center>
          <Text className={classnames(styles.greet)} display2 component="h1">
            Xin.
            <span role="img" aria-label="let's start the fire">🔥</span>
          </Text>

          {
            !this.state.authenticated ? (
              <a href="/auth/google">
                <Button normal className={styles.googleLogin}>
                  <Google className={classnames(styles.logo)}/>
                  Sign in with google
                </Button>
              </a>
            ) : ''
          }

          {
            this.state.noContent ? <h1 style={{padding: '24px'}}>No content</h1> : ''
          }

          {/* <Tick /> */}

          {this.state.authenticated ? (
            <CreateTodo />
          ) : ''}

          {
            this.state.authenticated ? (
              <Button handleClick={() => this.signOut()} secondary small>Sign out</Button>
            ) : ''
          }

          <TodoContainer todos={this.state.todos}/>


        </Body>
      </div>
    )
  }
}

export default Auth;
