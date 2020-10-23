import React, {Component} from 'react';
import Result from './Result';
import styles from './Calculator.module.css';
import Buttons from './Buttons';


class Calculator extends Component{
    state = {
        result: " " 
    };

    onClickHandler = (val) =>{
        if (val === "C")
        {
            this.resetHandler();
        }
        else if (val === "=")
        {
            this.calculateHandler();
        }
        else{
            this.setState({result: this.state.result + val});
            console.log(this.state.result)
        }
    };

    resetHandler = () =>{
        this.setState({result: " "})
    }

    calculateHandler = () =>{
        let res = this.state.result;
        let final_val = eval(res);
        this.setState({result: final_val})
    }

    render(){
        return(
            <div className = {styles.top}>   
                <Result final = {this.state.result} />
                <Buttons clicked = {this.onClickHandler}/>
            </div>           
        )
        
    }
}


export default Calculator;