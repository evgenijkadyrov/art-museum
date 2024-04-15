import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'

import { TitlePage } from '@/common/TitlePage'

describe('TitlePage', () => {
  test('should render title correctly', () => {
    const firstLine = 'First Line'
    const secondLine = 'Second Line'
    const isActive = true
    const isColored = false

    const { getByText } = render(
      <TitlePage
        firstLine={firstLine}
        secondLine={secondLine}
        isActive={isActive}
        isColored={isColored}
      />
    )

    const firstLineElement = getByText('First Line')
    const secondLineElement = getByText('Second Line')

    expect(firstLineElement).toBeInTheDocument()
    expect(secondLineElement).toBeInTheDocument()
    expect(secondLineElement).not.toHaveClass('active')
  })
})
