import {screen, render, fireEvent} from '@testing-library/react'
import InputBox from '@/app/components/Input/index'

const setup = () => {
    const utils = render(<InputBox />)
    const input = screen.getByTestId('custom-element')
    return {
      input,
      ...utils,
    }
  }

test(' input component', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: '23'}})
    expect(input.value).toBe('23')
  })