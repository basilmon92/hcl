import {screen, render, fireEvent} from '@testing-library/react'
import CustomButton from '@/app/components/Button/index'

const setup = () => {
    const utils = render(<CustomButton />)
    const input = screen.queryByText('submit')
    return {
      input,
      ...utils,
    }
  }

test(' input component', () => {
    expect(input).not.toBeNull()
  })