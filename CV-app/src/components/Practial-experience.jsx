function PracticalExp(){
    return (
        <>
            <section id="practical">
                <input type="text" placeholder="companu name" />
                <input type="text" placeholder="position" />
                <input type="text" placeholder="main responsibilities" />
                <label htmlFor="">From-to date:</label>
                <input type="number" placeholder="25-1-2014" />
                <p style={{display:"inline-flex"}}> - </p>
                <input type="number" placeholder="25-2-2014"/>
            </section>
        </>
    )
};

export default PracticalExp;