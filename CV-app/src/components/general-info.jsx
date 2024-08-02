//submit btn - when pressed, it should disappear and copy input values into HTML elements
//the input fields should then become read-only
import ActionBtns from "./Action-btns";
import { useState } from "react";

function GeneralInfo(){

    const [activeFields, setActiveFields] = useState(false);
    const [nameValue, setNameValue] = useState("");
    const [lastnameValue, setLastnameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [emailValue, setEmailValue] = useState("")

    const handleActiveFields = (b) => {
        setActiveFields(b);
    }


    return(
        <>
            <section id="general">
                <input type="text" placeholder="John" readOnly={activeFields} onChange={(e) => setNameValue(e.target.value)} />
                <input type="text" placeholder="Doe" readOnly={activeFields} />
                <input type="email" name="email" id="emailInput" placeholder="johnDoe@example.com" />
                <input type="number" placeholder="38169291765" readOnly={activeFields} />
                <ActionBtns handleActiveFields={handleActiveFields} />
            </section>
        </>
    )
};  

export default GeneralInfo;