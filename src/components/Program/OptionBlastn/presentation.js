import React from 'react';

function OptionBlastn(props) {
    return (
        <div>
            <p>*OptionBlastn</p>
            <form onChange={props.handleProgram}>
                <p>...General Parameters</p>
                <label>
                    Max target sequences
                    <select>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="250">250</option>
                    </select>
                </label><br/>
                <label>
                    Expect threshold
                        <input type="text" name="name" placeholder="10.0"/> 
                </label><br/>
                <label>
                    Word size
                        <input type="text" name="name" placeholder="11"/> 
                </label><br/>
                <p>...Scoring Parameters</p>

                <p>...Filters and Masking</p>
            </form>
        </div>
    );
}

export default OptionBlastn;