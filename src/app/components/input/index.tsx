'use client'
import { useState } from 'react'
import { TextField } from '@mui/material';
export default function InputBox(props: any) {

const [input, setInput] = useState('')
const changeHandler = ()=> {
    props.onInputHandler(input)
}
return (
    <TextField type="number" value={input} onChange={(e: any)=>setInput(e.target.value)} onInput={changeHandler} />)
}