function Skill(props) {
    return(
        <>
            <input type="checkbox" id={`${props.id}Prof`} onChange={(event) => props.onChecked(event, props.id)} />
            <input type="checkbox" id={`${props.id}Exp`} onChange={(event) => props.onChecked(event, props.id)} disabled />
            <input type="number" id={props.id} className='stat-input' value={props.val} readOnly />
        </>
    );
}

export default Skill;