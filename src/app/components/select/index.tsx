'use client'
import { useState } from 'react'
import Select from '@mui/material/Select';

export default function DropDown(props: any) {
    const [select, setSelect] = useState('credits');
    const changeHandler = ()=> {
        props.onInputHandler(select)
    }
    return (
      <label>
        Payment Type
        <Select value={select} onChange={e => setSelect(e.target.value)} name="select" onInput={changeHandler}>
          <option value="credits">Credits</option>
          <option value="debits">Debits</option>
        </Select>
      </label>
    );
  }