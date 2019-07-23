import React from 'react';

function Submit(props) {
    return (
        <div>
            <p>*Submit</p>
            <form action="/12345">
                <input type="submit" value="Submit Form" />
            </form>
        </div>
    );
}

export default Submit;