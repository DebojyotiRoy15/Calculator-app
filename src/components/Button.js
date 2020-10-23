import React, {Component} from 'react';
import styles from './Button.module.css';
import Radium from 'radium';


const button = (props) =>(
    <button onClick = {props.click}
    className = {[styles.bstyle, styles[props.btn_type]].join(' ')}>{props.children}</button>
)


export default Radium(button);