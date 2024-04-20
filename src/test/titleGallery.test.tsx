import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TitleGallery } from '@/common/TitleForGallery'

describe('TitleForGallery', () => {
  describe('should render title correctly', () => {
    const firstLine = 'First Line'
    const secondLine = 'Second Line'

    let firstLineElement: HTMLDivElement
    beforeEach(() => {
      render(<TitleGallery firstLineText={firstLine} secondLineText={secondLine} />)
      firstLineElement = screen.getByText(firstLine)
    })
    test('check default value', () => {
      expect(firstLineElement).toBeInTheDocument()
    })
  })
})
