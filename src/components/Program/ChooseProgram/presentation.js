import React from 'react';

function ChooseProgram(props) {
    return (
        <div onChange={props.handleRadioButton}>
            <p>Select a program:</p>
            <input type="radio" name="program" value="blastn" /> blastn
            <input type="radio" name="program" value="tblastn" /> tblastn
            <input type="radio" name="program" value="tblastx" /> tblastx
            <input type="radio" name="program" value="blastp" /> blastp
            <input type="radio" name="program" value="blastx" /> blastx
        </div>
    );
}

export default ChooseProgram;