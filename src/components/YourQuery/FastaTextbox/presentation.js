import React from 'react';

function FastaTextbox(props) {
    let fastaWidth = props.data.windowWidth/20;
    let fastaHeight = props.data.windowHeight/50;
    return (
        <div>
            <p>*FastaTextBox</p>
            <textarea cols={fastaWidth} rows={fastaHeight} />
        </div>
    );
}

export default FastaTextbox;