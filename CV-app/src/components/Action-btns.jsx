import { useState } from "react";

function ActionBtns({changeActiveSection}) {
    // const [isEditable, setIsEditable] = useState(true);

    return (
        <>
            {/* <div id="actionBtns">
                <button onClick={() => {
                    handleActiveFields(false)
                    setIsEditable(true)
                }}>Edit</button>

                {isEditable && <button onClick={() => {
                    handleActiveFields(true)
                    setIsEditable(false)
                }}>Next</button>} 
            </div> */}
            <div>
                <button onClick={() => changeActiveSection(-1)}>Back</button>
                <button onClick={() => changeActiveSection(1)}>Next</button>
            </div>
        </>
    )
};

export default ActionBtns;