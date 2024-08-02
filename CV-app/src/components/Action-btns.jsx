import { useState } from "react";

function ActionBtns({handleActiveFields}) {
    const [isEditable, setIsEditable] = useState(true);

    return (
        <>
            <div id="actionBtns">
                <button onClick={() => {
                    handleActiveFields(false)
                    setIsEditable(true)
                }}>Edit</button>

                {isEditable && <button onClick={() => {
                    handleActiveFields(true)
                    setIsEditable(false)
                }}>Submit</button>} 
            </div>
        </>
    )
};

export default ActionBtns;