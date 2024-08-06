
import NextBtn from "./Next-btn";
import SubmitBtn from "./Submit-btn";

function ActionBtns({changeActiveSection, activeSection, submitForm}) {

    const numberOfSections = 3;

    return (
        <>
                <button onClick={() => changeActiveSection(-1)}>Back</button>
                {activeSection + 1 == numberOfSections ? <SubmitBtn submitForm={submitForm}/> : <NextBtn changeActiveSection={changeActiveSection} />}
          
        </>
    )
};

export default ActionBtns;