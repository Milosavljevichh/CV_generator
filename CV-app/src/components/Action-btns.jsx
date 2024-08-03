import { useState } from "react";

function ActionBtns({changeActiveSection}) {

    return (
        <>
            <div>
                <button onClick={() => changeActiveSection(-1)}>Back</button>
                <button onClick={() => changeActiveSection(1)}>Next</button>
            </div>
        </>
    )
};

export default ActionBtns;