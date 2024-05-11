'use client'
import { useState } from 'react'
export default function selectComponent() {
    const [selectedType, setSelectedType] = useState('credits');
    return (
      <label>
        Payment Type
        <select value={selectedType} onChange={e => setSelectedType(e.target.value)} name="selectedType">
          <option value="credits">Credits</option>
          <option value="debits">Debits</option>
        </select>
      </label>
    );
  }