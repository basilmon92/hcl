'use client'
import { useState } from 'react'
export default function selectComponent() {
    const [select, setSelect] = useState('credits');
    return (
      <label>
        Payment Type
        <select value={select} onChange={e => setSelect(e.target.value)} name="select">
          <option value="credits">Credits</option>
          <option value="debits">Debits</option>
        </select>
      </label>
    );
  }