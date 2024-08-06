import { useState } from 'react';
import { inputList } from './data.jsx';
import ActionBtns from './Action-btns.jsx';
import "../styles/Form.css"
import "../styles/CV.css"


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
    const [addedFields, setAddedFields] = useState(1);

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

    const getSectionName = () => {
        switch(activeSection){
            case 0:
                return "General Information:"
            case 1:
                return "Educational Information"
            case 2:
                return "Practical Experience"
    }
}

const addAnotherSection = () => {
    let newInputs = [];
    let newEducationalInfo = { ...educationalInfo };
    let newPracticalInfo = { ...practicalInfo };

    inputList[activeSection].forEach((input) => {
        let newObj = { ...input };
        newObj.name += addedFields.toString();
        newObj.id += addedFields.toString();
        newInputs.push(newObj);

        if (activeSection === 1) {
            newEducationalInfo[newObj.name] = "";
        } else if (activeSection === 2) {
            newPracticalInfo[newObj.name] = "";
        }
    });

    if (activeSection === 1) {
        setEducationalInfo(newEducationalInfo);
    } else if (activeSection === 2) {
        setPracticalInfo(newPracticalInfo);
    }

    inputList[activeSection] = [...inputList[activeSection], ...newInputs];
    setAddedFields(addedFields + 1);
};

    return (
        !isSubmitted ? <>
        {console.log(educationalInfo)}
            <h2 id='sectionTitle'>{getSectionName()}</h2>
            <div id='form'>
                {inputList[activeSection].map((input, i) => (
                    <>
                    {/* TODO: Add restrictions */}
                    <div key={i} className='inputField'>
                        <label key={input.id} htmlFor="input.id">{input.label}</label>
                        <input key={i} type={input.type} value={getValue(input.setFunction, input.name)} name={input.name} id={input.id} placeholder={input.placeholder} onChange={(e) => {saveInputInfo(input.name, input.setFunction, e.target.value)}}/>
                    </div>
                    </>
                ))}
                {(activeSection === 1 || activeSection === 2) && <button onClick={() => addAnotherSection()}>Add</button>}
            </div>
            <div id='btnsContainer'>
                <ActionBtns changeActiveSection={changeActiveSection} activeSection={activeSection} submitForm={submitForm}/>
            </div>
        </> : 
        <>
        <div id='CV'>
            <div id='general' className='section'>
                <h1>{generalInfo.firstName + " " + generalInfo.lastName}</h1>
                <h6>{generalInfo.email + " - " + generalInfo.phone}</h6>
                <hr />
            </div>
            <div id='education' className='section'>
                <br />
                <h2>Education:</h2>
                <br />
                <h4>{educationalInfo.college + ": " + educationalInfo.studyTitle + " - " + educationalInfo.fromYear + "-" + educationalInfo.toYear}</h4>
            </div>
            <div id='practical' className='section'>
                <br />
                <h2>Practical Experience:</h2>
                <h3>{"Company: " + practicalInfo.company}</h3>
                <div className='container'>
                    <h4>{"Position: " + practicalInfo.position + " - " + practicalInfo.fromDate + "-" + practicalInfo.toDate}</h4>
                    <p>{"Resposibilities: " + practicalInfo.responsobilities}</p>
                </div>
            </div>
        </div>
            <button onClick={submitForm}>Edit</button>
        </>
    )
}
 export default Form;