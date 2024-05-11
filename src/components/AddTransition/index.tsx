
"use client"
import axios from 'axios';
import React, { useState } from 'react'

const AddTransition = () => {

    const paymentSchema = {
        customerId: '',
        transactionDescription: '',
        amount: '',
        paymentType: '',
        date: ''
    }

    const [formData, setFormData] = useState(paymentSchema);
    const [errMsg, setErrMsg] = useState('')

    const onHanldeChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmitHandle = (e: any) => {

        const headers = {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkIn0sImlhdCI6MTcxNTQyODQ2MSwiZXhwIjoxNzE1NDMyMDYxfQ.TOzxqprdmw81K1AWn7oGFja1jjmpno5_PNF2Brghoa4'
        }
        e.preventDefault();
        axios.post(
            'http://127.0.0.1:3003/api/add',
            formData, {
            headers: headers
        }
        ).then((res) => {
            console.log(res, 'res');
            setFormData(paymentSchema);

        }).catch((err) => {
            setErrMsg('Something went wrong!')
            console.log(err, 'errr')
        })
    }

    const clearAddTransition = (e: any) => {
        e.preventDefault();
        setFormData(paymentSchema);
    }

    return (
        <div className='addTransitionForm_holder'>
            <h1 className='text-lg font-semibold'>Add Transition</h1>
            <div className='transitonForm'>
                <form>

                    
                    <div className='formInput mb-3'>
                        <p className='text-sm'>Custometr Id</p>
                        <input type="text " className='w-full border-solid border-2 border-neutral-600 rounded-md p-1' placeholder='Customer Id' name="customerId" value={formData.customerId} onChange={(e) => onHanldeChange(e)} />
                    </div>
                    <div className='formInput mb-3'>
                        <p className='text-sm'>Payment Description</p>
                        <input type="text" className='w-full border-solid border-2 border-neutral-600 rounded-md p-1' placeholder='Description' name="transactionDescription" value={formData.transactionDescription} onChange={(e) => onHanldeChange(e)} />
                    </div>
                    <div className='formInput mb-3'>
                        <p className='text-sm'>Amont</p>
                        <input type="number" className='w-full border-solid border-2 border-neutral-600 rounded-md p-1' placeholder='Amount' name="amount" value={formData.amount} onChange={(e) => onHanldeChange(e)} />
                    </div>
                    <div className='formInput mb-3'>
                        <p className='text-sm'>Choose Payment Type</p>
                        <select name="paymentType" className='w-full border-solid border-2 border-neutral-600 rounded-md p-1' value={formData.paymentType} onChange={(e) => onHanldeChange(e)}>
                            <option value="">Select Payment</option>
                            <option value="debit">Make a payment</option>
                            <option value="credit">Recieve a payment</option>
                        </select>
                    </div>
                    <div className='formInput mb-3'>
                        <p className='text-sm'>Select Date</p>
                        <input type="Date" className= 'w-full border-solid border-2 border-neutral-600 rounded-md p-1' placeholder='Select Date' name="date" value={formData.date} onChange={(e) => onHanldeChange(e)} />
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <button onClick={(e) => { clearAddTransition(e) }} className='select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' >Cancel</button>
                        <button onClick={(e) => onSubmitHandle(e)} className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'>Submit</button>
                    </div>
                    {errMsg && <p className='text-sm color'>{errMsg}</p>}
                </form>
            </div>
        </div>
    )
}

export default AddTransition;