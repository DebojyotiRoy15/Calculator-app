import React, {component} from 'react';
import styles from './Result.module.css';


const result = (props) => {
   return(
    <div className = {styles.result}>
        <p>{props.final}</p>
    </div>
   ) 
};

export default result;