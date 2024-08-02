import { useState } from "react";
import ActionBtns from "./Action-btns";

function PracticalExp(){

    const [activeFields, setActiveFields] = useState(false);

    const handleActiveFields = (b) => {
        setActiveFields(b);
    }

    return (
        <>
            <section id="practical">
                <input type="text" placeholder="companu name" readOnly={activeFields}  />
                <input type="text" placeholder="position" readOnly={activeFields}  />
                <input type="text" placeholder="main responsibilities" readOnly={activeFields}  />
                <label htmlFor="">From-to date:</label>
                <input type="number" placeholder="25-1-2014" readOnly={activeFields}  />
                <p style={{display:"inline-flex"}}> - </p>
                <input type="number" placeholder="25-2-2014" readOnly={activeFields} />
                <ActionBtns handleActiveFields={handleActiveFields} />
            </section>
        </>
    )
};

export default PracticalExp;