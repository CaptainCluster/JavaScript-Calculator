/**
 * @author       CaptainCluster
 * @link         https://github.com/CaptainCluster
 * @repository   JavaScript-Calculator
 * @license      GNU-General-Public-License-v3.0
 * 
 * @description  This file wraps up every single component with Container
 */
import React, { useState } from 'react';
import ButtonHolder from './button_holder';
import Display from './display';

/**
 * @returns {JSXComponent} A container containing all the JSX components
 */
export default function Container() {
    const [displayInput, setDisplayInput]       = useState(0);
    const [formulaDisplay, setFormulaDisplay]   = useState("");

    return (
        <div id="container" className="calculator">
            <Display formulaDisplay={ formulaDisplay } displayInput={ displayInput }/>
            <ButtonHolder setFormulaDisplay={ setFormulaDisplay } setDisplayInput={ setDisplayInput }
            formulaDisplay={ formulaDisplay } displayInput={ displayInput }/>
        </div>
    );
}