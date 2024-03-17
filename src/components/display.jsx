/**
 * @author       CaptainCluster
 * @link         https://github.com/CaptainCluster
 * @repository   JavaScript-Calculator
 * @license      GNU-General-Public-License-v3.0
 * 
 * @description  This file contains all the necessities to display
 *               the made calculation to the user.
 * 
 *               NOTE! The calculator can only display and process
 *               one calculation at a time!!!
 */

import React from 'react'

/**
 * @returns {JSXComponent} The component for displaying the made
 *                         calculation 
 */
export default function Display({formulaDisplay, displayInput}){

    return(
        <div id="display-outer">
            <div className="formula-screen">{formulaDisplay}</div>
            <div id="display">{displayInput}</div>
        </div>
    );
}