import { useState } from 'react';
import Skill from './Skill';
import './Stat.css'

function Stat(props) {
  const [inputVal, setInputValue] = useState('');

  const handleStatChange = (event) => {
    let val = event.target.value;
    if (val !== '') val = Math.floor((val - 10) / 2);
    setInputValue(val);
    if (event.target.id == 'Dexterity') props.returnInit(val);
  }

  return (
    <div className='stat-block'>
        <h2>{props.name}</h2>
        <label>Score:</label>
        <input type="number" className='stat-score' id={props.name} onChange={handleStatChange} />
        <label>Modifier:</label>
        <input type="number" className='stat-input' value={inputVal} readOnly />
        <label>Save:</label>
        <input type="checkbox" id={`${props.name}SaveChk`} onChange={(event) => props.onChecked(event, `${props.name}Save`)} />
        <input type="number" id={`${props.name}Save`} className='stat-input' value={inputVal} readOnly />
        <hr></hr>
        <ul>
            {props.skills?.map(skill => <li>
                {skill.name}:
                <Skill
                  id={skill.id}
                  val={inputVal}
                  onChecked={props.onChecked}
                />
            </li>)}
        </ul>
    </div>
  )
}

export default Stat;
