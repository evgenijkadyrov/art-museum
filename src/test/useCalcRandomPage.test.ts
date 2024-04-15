import { assert, test } from 'vitest'
import { calcRandomPageNumber } from '@/utils/calcRandomPage.helper'

test('assert.isAbove', () => {
  const min = 1
  const max = 100
  const randomPage = calcRandomPageNumber(min, max)

  assert.isAbove(randomPage, min, `${randomPage} is strictly greater than ${min}`)
})
