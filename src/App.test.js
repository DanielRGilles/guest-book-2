import { render, screen } from '@testing-library/react'
import App from './App'
import { EntryProvider } from './context/EntryContext'
import { NameProvider } from './context/NameContext'

test('renders guest book page', () => {
  render(
    <NameProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </NameProvider>
  )
  const linkElement = screen.getByText(/Sign Book/i)
  expect(linkElement).toBeInTheDocument()
})
