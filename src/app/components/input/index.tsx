'use client'
import { useState } from 'react'
import { TextField } from '@mui/material';
export default function inputBox() {

const [input, setInput] = useState('')
return (
    <TextField type="number" onChange={(e: any)=>setInput(e.target.value)} />)
}