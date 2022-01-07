import { render, screen } from '@testing-library/react'
import { EntryProvider } from '../context/EntryContext'
import { NameProvider } from '../context/NameContext'
import Login from './Login'


test('renders login component', () => {
  render(
 
  <NameProvider>
  <EntryProvider>
    <Login/>
  </EntryProvider>
</NameProvider>
  )
  const linkElement = screen.getByText(/Log In/i)
  expect(linkElement).toBeInTheDocument()
})
