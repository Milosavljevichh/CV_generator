//submit btn - when pressed, it should disappear and copy input values into HTML elements
//the input fields should then become read-only
import ActionBtns from "./Action-btns";
import { useState } from "react";

function GeneralInfo(){

    const [activeFields, setActiveFields] = useState(false);

    const handleActiveFields = (b) => {
        setActiveFields(b);
    }

    return(
        <>
            <section id="general">
                <input type="text" placeholder="John" readOnly={activeFields} />
                <input type="text" placeholder="Doe" readOnly={activeFields} />
                <input type="number" placeholder="38169291765" readOnly={activeFields} />
                <ActionBtns handleActiveFields={handleActiveFields} />
            </section>
        </>
    )
};  

export default GeneralInfo;