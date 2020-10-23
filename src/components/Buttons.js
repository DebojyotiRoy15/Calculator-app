import React, {Component} from 'react';
import styles from './Buttons.module.css';
import Button from './Button';

class Buttons extends Component{
     
    render(){
        return(
            <>
            <Button btn_type = "black" click = {() => this.props.clicked("(")}>(</Button>
            <Button btn_type = "black" click = {() => this.props.clicked("%")}>%</Button>
            <Button btn_type = "black" click = {() => this.props.clicked(")")}>)</Button>
            <Button btn_type = "red" click = {() => this.props.clicked("C")}>C</Button>
            <Button btn_type = "black" click = {() => this.props.clicked("7")}>7</Button>
            <Button btn_type = "black" click = {() => this.props.clicked("8")}>8</Button>
            <Button btn_type = "black" click = {() => this.props.clicked("9")}>9</Button>
            <Button btn_type = "red" click = {() => this.props.clicked("*")}>*</Button>
            <Button btn_type = "black" click = {() => this.props.clicked("4")}>4</Button>
            <Button btn_type = "black" click = {() => this.props.clicked("5")}>5</Button>
            <Button btn_type = "black" click = {() => this.props.clicked("6")}>6</Button>
            <Button btn_type = "red" click = {() => this.props.clicked("-")}>-</Button>
            <Button btn_type = "black" click = {() => this.props.clicked("1")}>1</Button>
            <Button btn_type = "black" click = {() => this.props.clicked("2")}>2</Button>
            <Button btn_type = "black" click = {() => this.props.clicked("3")}>3</Button>
            <Button btn_type = "red" click = {() => this.props.clicked("+")}>+</Button>
            <Button btn_type = "black" click = {() => this.props.clicked(".")}>.</Button>
            <Button btn_type = "black" click = {() => this.props.clicked("0")}>0</Button>
            <Button btn_type = "black" click = {() => this.props.clicked("=")}>=</Button>
            <Button btn_type = "red" click = {() => this.props.clicked("/")}>/</Button>
            </>
        );
    }

};

export default Buttons;