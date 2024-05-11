'use client'
import { useState } from 'react'
export default function inputBox() {

const [input, setInput] = useState('')
return (<>
    <input type="number" onChange={(e: any)=>setInput(e.target.value)} />
</>)
}