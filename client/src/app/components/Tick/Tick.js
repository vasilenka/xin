import styles from './Tick.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';
import moment from 'moment';

import Button from './../Button/Button';
import Text from './../Text/Text';

class Tick extends Component {

  constructor(props) {
    super(props);
    this.state = {
      start: Date.now(),
      seconds: 0,
      running: false,
      button: 'Start',
    }
  }

  handleClick() {
    if(!this.state.running) {
      this.setState({
        start: Date.now(),
        running: true,
        button: 'Stop'
      })
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    } else {
      this.setState({
        running: false,
        seconds: 0,
        button: 'Start',
      })
      clearInterval(this.timerID);
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      seconds: Date.now() - this.state.start
    });
  }

  render() {
    return (
      <div className={styles.root}>
        <Button
          handleClick={() => this.handleClick(this.tick)}
          primary
          small
          className={styles.action}>
          {this.state.button}
        </Button>
        <Text heading3 component="h1">{
          (!this.state.seconds > 60*60) ?
            moment(this.state.seconds).format('H:mm:ss') : moment(this.state.seconds).format('mm:ss')
          }</Text>
      </div>
    );
  }
}

export default Tick;
