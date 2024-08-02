import { useState } from "react";
import ActionBtns from "./Action-btns";

function EducationalInfo() {

    const [activeFields, setActiveFields] = useState(false);

    const handleActiveFields = (b) => {
        setActiveFields(b);
    }

    return(
        <>
            <section id="educational">
                <input type="text" placeholder="Future Minds" readOnly={activeFields}  />
                <input type="text" placeholder="title of study" readOnly={activeFields}  />
                <label htmlFor="">From-to year:</label>
                <input type="number" placeholder="2010" readOnly={activeFields}  />
                <p style={{display:"inline-flex"}}> - </p>
                <input type="number" placeholder="2014" readOnly={activeFields} />
                <ActionBtns handleActiveFields={handleActiveFields} />
            </section>
        </>
    )
};

export default EducationalInfo;