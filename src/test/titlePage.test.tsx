import { beforeEach, describe, expect, test, assert } from 'vitest'
import { render, screen } from '@testing-library/react'

import { TitlePage } from '@/common/TitlePage'

describe('TitlePage', () => {
  describe('should render title correctly', () => {
    const firstLine = 'First Line'
    const secondLine = 'Second Line'
    const isActive = true
    const isColored = false
    let firstLineElement: HTMLDivElement
    beforeEach(() => {
      render(
        <TitlePage
          firstLine={firstLine}
          secondLine={secondLine}
          isActive={isActive}
          isColored={isColored}
        />
      )
      firstLineElement = screen.getByText(firstLine)
    })
    test('check default value', () => {
      expect(firstLineElement).toBeInTheDocument()
      assert.include(firstLineElement.className, 'active', 'string ')
    })
  })
})
