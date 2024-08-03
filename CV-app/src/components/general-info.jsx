//submit btn - when pressed, it should disappear and copy input values into HTML elements
//the input fields should then become read-only
import ActionBtns from "./Action-btns";
import { useState } from "react";

function GeneralInfo({handleNameValue, handleLastnameValue, handlePhoneValue, handleEmailValue}){

    const [activeFields, setActiveFields] = useState(false);

    const handleActiveFields = (b) => {
        setActiveFields(b);
    }


    return(
        <>
            <section id="general">
                <input type="text" placeholder="John" readOnly={activeFields} onChange={(e) => handleNameValue(e.target.value)} />
                <input type="text" placeholder="Doe" readOnly={activeFields}onChange={(e) => handleLastnameValue(e.target.value)} />
                <input type="email" name="email" id="emailInput" placeholder="johnDoe@example.com"onChange={(e) => handlePhoneValue(e.target.value)} />
                <input type="number" placeholder="38169291765" readOnly={activeFields}onChange={(e) => handleEmailValue(e.target.value)} />
                <ActionBtns handleActiveFields={handleActiveFields} />
            </section>
        </>
    )
};  

export default GeneralInfo;