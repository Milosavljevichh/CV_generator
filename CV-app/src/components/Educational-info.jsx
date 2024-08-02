function EducationalInfo() {
    return(
        <>
            <section id="educational">
                <input type="text" placeholder="Future Minds" />
                <input type="text" placeholder="title of study" />
                <label htmlFor="">From-to year:</label>
                <input type="number" placeholder="2010" />
                <p style={{display:"inline-flex"}}> - </p>
                <input type="number" placeholder="2014"/>
            </section>
        </>
    )
};

export default EducationalInfo;