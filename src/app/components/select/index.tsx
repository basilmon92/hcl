'use client'
import { useState } from 'react'
import Select from '@mui/material/Select';

export default function selectComponent() {
    const [select, setSelect] = useState('credits');
    return (
      <label>
        Payment Type
        <Select value={select} onChange={e => setSelect(e.target.value)} name="select">
          <option value="credits">Credits</option>
          <option value="debits">Debits</option>
        </Select>
      </label>
    );
  }