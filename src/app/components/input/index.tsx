'use client'
import { useState } from 'react'
import { TextField } from '@mui/material';
export default function InputBox(props: any) {

const [input, setInput] = useState('')

return (
    <TextField type="text" name='name' value={input} onChange={(e: any)=>setInput(e.target.value)} data-testid="custom-element" />)
}