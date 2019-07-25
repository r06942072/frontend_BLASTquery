import React from 'react';

function Reset(props) {
    return (
        <div>
            <p>*Reset</p>
            <form>
                <input type="reset" value="Reset" onClick={props.handleReset}/>
            </form>
        </div>
    );
}

export default Reset;