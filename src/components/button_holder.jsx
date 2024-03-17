/**
 * @author       CaptainCluster
 * @link         https://github.com/CaptainCluster
 * @repository   JavaScript-Calculator
 * @license      GNU-General-Public-License-v3.0
 * 
 * @description  This file contains the center for generating each calculation
 *               button (and their functionalities) and adding them to the HTML.
 */
import React from 'react'
import CalcButton from './calc_button';

/**
 * @returns {JSXComponent} A component holding each of the calculator buttons
 */
export default function ButtonHolder({ setFormulaDisplay, setDisplayInput, formulaDisplay, displayInput}) {
    // Creating suitable objects to contain all necessary parameters for the buttons
    const buttonElementObjects = [    
        { id: "clear", symbol: "AC" }, { id: "divide", symbol: "/" }, { id: "multiply", symbol: "x" },
        { id: "seven", symbol: "7" }, { id: "eight", symbol: "8" }, { id: "nine", symbol: "9" }, 
        { id: "subtract", symbol: "-" }, { id: "four", symbol: "4" }, { id: "five", symbol: "5" }, 
        { id: "six", symbol: "6" }, { id: "add", symbol: "+"}, { id: "one", symbol: "1" }, 
        { id: "two", symbol: "2" }, { id: "three", symbol: "3" }, { id: "equals", symbol: "=" },
        { id: "zero", symbol: "0" }, { id: "decimal", symbol: "." }
    ];

    const generateButtons =  () => {
        const calcButtonList = [];
        for(let i = 0; i < 17; i++) {    
            calcButtonList.push(
            <CalcButton 
                key=                { buttonElementObjects[i].id}
                buttonID=           { buttonElementObjects[i].id } 
                inputSymbol=        { buttonElementObjects[i].symbol } 
                setFormulaDisplay=  { setFormulaDisplay } 
                setDisplayInput=    { setDisplayInput } 
                formulaDisplay=     { formulaDisplay } 
                displayInput=       { displayInput }/>);
        }
        return calcButtonList;
    }

    return(
        <div id="button-holder">
            {generateButtons()}     
        </div>
    );
}