// Imports
import { describe, it, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

// To Test
import App from '../App'
import { sum } from '@/test/App'
import { Home } from '@/pages/home'
import { TitlePage } from '@/common/TitlePage'
import { expectTypeOf } from 'vitest'

// Tests
describe('Renders main page correctly', async () =>
  /**
   * Passes - shows title correctly
   */
  it('Should render the page correctly', async () => {
    // Setup
    await render(<TitlePage firstLine={'yeee'} secondLine={'rerere'} />)
    const h1 = await screen.queryByText('Vite + React')

    // Post Expectations
    expectTypeOf(h1).not.toBeNull()
  }))
