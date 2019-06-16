/* eslint-disable no-undef */
require('@babel/preset-env')
import { getFirstName, isValidPassword } from '../src/utils/user.js'
console.log(process.env.node_env) // eslint-disable-line
test('should return first name from full name', () => {
  const firstName = getFirstName('Konstantin Steinmiller')
  expect(firstName).toBe('Konstantin')
})

test('should return first name when given first name', () => {
  const value = 'Konstantin'
  const firstName = getFirstName(value)
  expect(firstName).toBe(value)
})

test('should check for secure password', () => {
  const value = 'passwo123'
  const password = isValidPassword(value)
  expect(password).toBe(true)
})
