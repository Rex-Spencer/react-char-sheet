import { useState } from 'react'
import Stat from './components/Stat'
import stats from './utils/stats'
import './App.css'

function App() {
  const [profVal, setProfVal] = useState('2');
  const [initVal, setInitVal] = useState('');
  const [rows, setRows] = useState([
    { name: '', bonus: '', damage: '' },
    { name: '', bonus: '', damage: '' },
    { name: '', bonus: '', damage: '' }
  ]);

  const handleProfChange = (event) => {
    setProfVal(event.target.value);
  }

  const initCallback = (initVal) => {
    setInitVal(initVal);
  }

  const addProfVal = (event, id) => {
    let skill = document.getElementById(id);
    let check = document.getElementById(event.target.id);
    let expCheck = document.getElementById(`${id}Exp`);
    if (check.checked) {
      skill.value = parseInt(skill.value) + parseInt(profVal);
      if (check.id == `${id}Prof`) expCheck.disabled = false;
    } else {
      skill.value = parseInt(skill.value) - parseInt(profVal);
      if (check.id == `${id}Prof`) {
        expCheck.disabled = true;
        if (expCheck.checked) {
          skill.value = parseInt(skill.value) - parseInt(profVal);
          expCheck.checked = false;
        }
      }
    }
  }

  const listStats = stats.map((stats, index) =>
    <Stat
      key={index}
      name={stats.name}
      skills={stats.skills}
      onChecked={addProfVal}
      returnInit={initCallback}
    />
  );

  function addRow() {
    setRows([...rows, { name: '', bonus: '', damage: '' }]);
  }

  const removeRow = (target) => {
    if (rows.length > 1) setRows(rows.slice(0, rows.length - 1));
  }

  return (
    <>
      <section id="charId" className='section-border'>
        <div>
          <label>Name:&nbsp;</label>
          <input type='text' className='third-input' />
          <label>Level:&nbsp;</label>
          <select className='third-input' onChange={handleProfChange}>
            <option value='2' >1</option>
            <option value='2' >2</option>
            <option value='2' >3</option>
            <option value='2' >4</option>
            <option value='3' >5</option>
            <option value='3' >6</option>
            <option value='3' >7</option>
            <option value='3' >8</option>
            <option value='4' >9</option>
            <option value='4' >10</option>
            <option value='4' >11</option>
            <option value='4' >12</option>
            <option value='5' >13</option>
            <option value='5' >14</option>
            <option value='5' >15</option>
            <option value='5' >16</option>
            <option value='6' >17</option>
            <option value='6' >18</option>
            <option value='6' >19</option>
            <option value='6' >20</option>
          </select>
          <label>Proficiency Bonus:&nbsp;</label>
          <input type='number' className='third-input' value={profVal} readOnly/>
        </div>
        <div>
          <label>Class:&nbsp;</label>
          <input type='text' className='third-input' />
          <label>Race:&nbsp;</label>
          <input type='text' className='third-input' />
          <label>Background:&nbsp;</label>
          <input type='text' className='third-input' />
        </div>
      </section>
      <section id="charVitals" className='section-border'>
        <div>
          <label>Hit Points:&nbsp;</label>
          <input type='number' />
          /
          <input type='number' readOnly />
          <label>Temporary Hit Points:&nbsp;</label>
          <input type='number' />
          <label>Hit Dice:&nbsp;</label>
          <input type='text' />
          /
          <input type='text' readOnly />
        </div>
        <div>
          <label>Death Saves:&nbsp;</label>
          <div>
            <label>Successes:&nbsp;</label>
            <input type='checkbox' />
            <input type='checkbox' />
            <input type='checkbox' />
          </div>
          <div>
            <label>Failures:&nbsp;</label>
            <input type='checkbox' />
            <input type='checkbox' />
            <input type='checkbox' />
          </div>
        </div>
        <label>Armour Class:&nbsp;</label>
        <input type='number' />
        <label>Initiative:&nbsp;</label>
        <input type='number' value={initVal} readOnly/>
        <label>Speed:&nbsp;</label>
        <input type='number' />
      </section>
      <section id="charStats">
        {listStats}
      </section>
      <div className='col'>
        <section id='charEquipment' className='section-border col-half' style={{border: 0 + 'px', padding: 0}}>
          <div id='attacksTable' className='equip-sub' style={{marginTop: 0}}>
            <label className='bold-text'>Attacks & Spellcasting:</label>
            <table>
              <thead>
                <tr>
                  <th width='42.5%'>Name</th>
                  <th width='15%'>Bonus</th>
                  <th width='42.5%'>Damage Type</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => {
                  return(
                    <tr key={idx}>
                      <td width='42.5%'><input type='text' defaultValue={row.name} /></td>
                      <td width='18%'><input type='number' className='center-text' defaultValue={row.bonus} /></td>
                      <td width='39.5%'><input type='text' defaultValue={row.damage} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button onClick={addRow}>Add Row</button>
            <button onClick={removeRow}>Remove Row</button>
          </div>
          <div id='otherProfs' className='equip-sub'>
            <label className='bold-text'>Other Proficiencies & Languages:</label>
            <br/>
            <hr/>
            <label>Armour:&nbsp;</label>
            <br/>
            <label>&nbsp;Light:&nbsp;</label>
            <input type='checkbox' />
            <label>&nbsp;Medium:&nbsp;</label>
            <input type='checkbox' />
            <label>&nbsp;Heavy:&nbsp;</label>
            <input type='checkbox' />
            <label>&nbsp;Shields:&nbsp;</label>
            <input type='checkbox' />
            <hr/>
            <label>Weapons:&nbsp;</label>
            <br/>
            <textarea rows='3'></textarea>
            <hr/>
            <label>Tools:&nbsp;</label>
            <br/>
            <textarea rows='3'></textarea>
            <hr/>
            <label>Languages:&nbsp;</label>
            <br/>
            <textarea rows='3' style={{marginBottom: 0.5 + 'rem'}}></textarea>
          </div>
          <div id='equipment' className='equip-sub' style={{marginBottom: 0}}>
            <label className='bold-text'>Equipment:&nbsp;</label>
            <hr/>
            <label>&nbsp;CP:&nbsp;</label>
            <input type='text' className='coin-input' />
            <label>&nbsp;EP:&nbsp;</label>
            <input type='text' className='coin-input' />
            <label>&nbsp;SP:&nbsp;</label>
            <input type='text' className='coin-input' />
            <label>&nbsp;GP:&nbsp;</label>
            <input type='text' className='coin-input' />
            <label>&nbsp;PP:&nbsp;</label>
            <input type='text' className='coin-input' />
            <hr/>
            <textarea rows='15' style={{marginBottom: 0.5 + 'rem'}}></textarea>
          </div>
        </section>
        <section id='charFeatures' className='section-border col-half' style={{padding: 0}}>
          <label className='bold-text'>Features & Traits:&nbsp;</label>
          <textarea rows='60' style={{marginBottom: 0.5 + 'rem'}}></textarea>
        </section>
      </div>
    </>
  );
}

export default App