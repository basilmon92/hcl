'use client'
import { useState } from 'react'
export default function inputBox() {

const [customer, setCustomer] = useState()
return (<>
    <input type="number" onChange={(e: any)=>setCustomer(e.target.value)} />
</>)
}