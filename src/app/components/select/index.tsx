'use client'
import { useState } from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DropDown(props: any) {
    
    const [select, setSelect] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value as string);
      };

    const changeHandler = (e: any)=> {
        setSelect(e.target.value)
        props.setFn(e.target.value);
    }
    
    return (
      <>
      {console.log("???",select)}
        <Select value={select} onChange={(e: any)=>{handleChange(e)}} name="select">
          {props.data.map((value: any) => {
return <option key={value} value={value}>{value}</option>;
})}
        </Select>
      </>
    );
  }