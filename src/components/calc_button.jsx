/**
 * @author       CaptainCluster
 * @link         https://github.com/CaptainCluster
 * @repository   JavaScript-Calculator
 * @license      GNU-General-Public-License-v3.0
 * 
 * @description  A file for a CalcButton component, that serves a specified
 *               purpose in the process of making a calculation.
 */

import React from 'react';

export default function CalcButton({buttonID, inputSymbol, setFormulaDisplay, setDisplayInput, formulaDisplay, displayInput}){
  const operators =     ["+", "-", "x", "/"]; 
  const noDefinedCalcDisplayList = ["+", "-", "x", "/", ".", "=", "0"];

  /**
   * @description As a button is pressed, we need to figure out how it should contribute 
   * to the overall calculation process by figuring out a fitting scenario.
   */
  const calcButtonPressAction = () => {
    //Creating a switch-case for the inputSymbol to handle all the different possibilities
    switch (inputSymbol) {
      case "AC":        //AC ==> clearing the display
        setFormulaDisplay("");
        setDisplayInput("0");
        break;
      case "=":
        equalsScenario();
        break;
      case ".":
        decimalScenario();
        break;
      default:  //If the input is either an operator or an operand (number)
        if(operators.includes(inputSymbol)) {
          inputOperatorScenario();
        } else {
          inputNumberScenario();
        }
    }
  };

  /**
   * @description If the input is an operator, this is executed.
   */
  const inputOperatorScenario = () => {

    // If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) 
    if (inputSymbol !== '-' && operators.includes(formulaDisplay[formulaDisplay.length-1]) && operators.includes(formulaDisplay[formulaDisplay.length-2])) {
        formulaDisplay = formulaDisplay.slice(0, -2) + inputSymbol;
    } else if (operators.includes(formulaDisplay[formulaDisplay.length-1]) && inputSymbol !== '-') {
        formulaDisplay = formulaDisplay.slice(0, -1) + inputSymbol;
    } else {
        formulaDisplay += inputSymbol;
    }
    setFormulaDisplay(formulaDisplay);
    setDisplayInput(inputSymbol);
  };
  
  /**
   * @description If the received input is a number, this is executed.
   */
  const inputNumberScenario = () => {
    if (noDefinedCalcDisplayList.includes(displayInput)) {
        displayInput = inputSymbol;
    } else {
        displayInput += inputSymbol;
    }
    setDisplayInput(displayInput);
    setFormulaDisplay(formulaDisplay + inputSymbol);
};
  /**
   * @description If the received input is "=", this is executed.
   */
  const equalsScenario = () => {
    if(noDefinedCalcDisplayList.includes(displayInput)) {  //If there is nothing to be calculated
      return;
    }
    if(operators.includes(formulaDisplay[formulaDisplay.length-1])) {
        formulaDisplay.slice(0, -1);
    } 
    const result = processFormat();
    if(result){
      setFormulaDisplay(result.toString());
      setDisplayInput(result.toString());
    }
  };

  /**
   * @description Modifying the formula to make it fitting for a calculation. The "x" 
   * symbols are replaced with "*" to avoid errors.
   * 
   * @returns {string} eval(correctedFormat) A string containing the result of the calculation
   */
  const processFormat = () => {
    let correctedFormat = ""

    //Going through each symbol and making changes if needed
    for(let i = 0; i < formulaDisplay.length; i++){
        if(formulaDisplay[i] === "x"){
            correctedFormat += "*";
            continue;
        }
        correctedFormat += formulaDisplay[i];
    }
    return eval(correctedFormat);
  };

  /**
   * @description If the received input is ".", this is executed
   */
  const decimalScenario = () => {
    //The decimal will only be added if the previous entry is not a decimal.
    //If the last entry is an operator, a 0 (string) will automatically be 
    //added before the decimal.
    if (operators.includes(formulaDisplay[formulaDisplay.length-1])) {
        formulaDisplay +=  "0.";
    } else if (!displayInput.includes(".")) {
        formulaDisplay += ".";
    }
    setFormulaDisplay(formulaDisplay);
    setDisplayInput(formulaDisplay);
  };

  return (
    <div className="calc-button" id={buttonID} onClick={calcButtonPressAction}>
      {inputSymbol}
    </div>
  );
};

