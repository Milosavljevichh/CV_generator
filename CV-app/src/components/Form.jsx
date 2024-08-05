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
    const [educationalInfo, setEducationalInfo] = useState({college:"", studyTitle:"",fromYear:"",toYear:""});
    const [practicalInfo, setPracticalInfo] = useState({company:"",position:"",responsobilities:"",fromDate:"",toDate:""});
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const getValue = (section, input) => {
        switch(section){
            case "generalInfo":
                return generalInfo[input];
            case "educationalInfo":
                return educationalInfo[input];
            case "practicalInfo":
                return practicalInfo[input];
        }
    }

    const submitForm = () => {
        setIsSubmitted(!isSubmitted);
    }

    return (
        !isSubmitted ? <>
            <div>
                {inputList[activeSection].map((input, i) => (
                    <>
                    {/* TODO: Add restrictions */}
                    <label key={i} htmlFor="input.id">{input.label}</label>
                    <input key={i + 1} type={input.type} value={getValue(input.setFunction, input.name)} name={input.name} id={input.id} placeholder={input.placeholder} onChange={(e) => {saveInputInfo(input.name, input.setFunction, e.target.value)}}/>
                    </>
                ))}
            </div>
            <ActionBtns changeActiveSection={changeActiveSection} activeSection={activeSection} submitForm={submitForm}/>
        </> : 
        <>
            <h1>{generalInfo.firstName + " " + generalInfo.lastName}</h1>
            <br />
            <h6>{generalInfo.email + " " + generalInfo.phone}</h6>
            <br />
            <h2>Education:</h2>
            <br />
            <h4>{educationalInfo.college + ":" + educationalInfo.studyTitle + " - " + educationalInfo.fromYear + "-" + educationalInfo.toYear}</h4>
            <button onClick={submitForm}>Edit</button>
        </>
    )
}
 export default Form;