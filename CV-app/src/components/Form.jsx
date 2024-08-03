import { useState } from 'react';
import { inputList } from './data.jsx';
import ActionBtns from './Action-btns.jsx';


//form component holds the inputs value, to later transform it into html elements
//values of each sections are grouped in different states
//currently active section is displayed through its index
//inputList (data.jsx file) is an array of all the sections
//sections themselves are also arrays, which hold input fields information as objects
function Form(){
    
    const [activeSection, setActiveSection] = useState(0);
    const [generalInfo, setGeneralInfo] = useState({firstName:"", lastName:"", phone:"", email:""});
    const [educationalInfo, setEducationalInfo] = useState({});
    const [practicalInfo, setPracticalInfo] = useState({});

    const changeActiveSection = (i) => {
        if (activeSection + i >= 0 && activeSection + i < inputList.length) {setActiveSection(activeSection + i)};
    }

    const saveInputInfo = (inputName, setterName, setterValue) => {
        let newInput
        switch(setterName){

            case "generalInfo":
                newInput = {...generalInfo}
                newInput[inputName] = setterValue
                setGeneralInfo(newInput);
                break;

            case "educationalInfo":
                newInput = {...educationalInfo}
                newInput[inputName] = setterValue
                setEducationalInfo(newInput)
                break;

            case "practicalInfo":
                newInput = {...practicalInfo}
                newInput[inputName] = setterValue
                setPracticalInfo(newInput)
                break;
        }
    }

    console.log(generalInfo);
    console.log(educationalInfo);
    console.log(practicalInfo);

    return (
        <>
            <div>
                {inputList[activeSection].map((input, i) => (
                    <>
                    <label key={i} htmlFor="input.id">{input.label}</label>
                    <input key={i + 1} type={input.type} name={input.name} id={input.id} placeholder={input.placeholder} onChange={(e) => {saveInputInfo(input.name, input.setFunction, e.target.value)}}/>
                    </>
                ))}
            </div>
            {/* TODO: Reset input values when 'Next' btn is clicked */}
            <ActionBtns changeActiveSection={changeActiveSection}/>
        </>
    )
}
 export default Form;