import { useState } from "react";

function ActionBtns({changeActiveSection, activeSection}) {

    const numberOfSections = 3;

    return (
        <>
            <div>
                <button onClick={() => changeActiveSection(-1)}>Back</button>
                <button onClick={() => changeActiveSection(1)}>{activeSection + 1 == numberOfSections ? "Submit" : "Next"}</button>
            </div>
        </>
    )
};

export default ActionBtns;