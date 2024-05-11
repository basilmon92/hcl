'use client'
import { Button } from '@mui/material'
import { useState } from 'react'

export default function CustomButton(props: any) {

    const changeHandler = (e: any)=> {
        props.setFn(e.target.value);
    }

return (
    <Button disabled={props.disabled} onClick={(e: any)=>{changeHandler(e)}}>{props.name}</Button>)
}