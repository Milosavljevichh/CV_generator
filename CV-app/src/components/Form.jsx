import { useState } from 'react';
import { inputList } from './data.jsx';
import ActionBtns from './Action-btns.jsx';


//form component holds the inputs value, to later transform it into html elements
//it also holds the index of the currently active field
function Form(){
    
    const [activeSection, setActiveSection] = useState(0);
    const [generalInfo, setGeneralInfo] = useState({firstName:"", lastName:"", phone:"", email:""})

    const changeActiveSection = (i) => {
        if (activeSection + i >= 0 && activeSection + i < inputList.length) {setActiveSection(activeSection + i)};
    }

    const saveInputInfo = (inputName, setterName, setterValue) => {
        const newInput = {...generalInfo}
        newInput[inputName] = setterValue
        setterName(newInput)
    }

    console.log(generalInfo);

    return (
        <>
            <div>
                {inputList[activeSection].map((input, i) => (
                    <>
                    <label key={i} htmlFor="input.id">{input.label}</label>
                    <input key={i + 1} type={input.type} name={input.name} id={input.id} placeholder={input.placeholder} onChange={(e) => {saveInputInfo(input.name, setGeneralInfo, e.target.value)}}/>
                    </>
                ))}
            </div>
            <ActionBtns changeActiveSection={changeActiveSection}/>
        </>
    )
}
 export default Form;