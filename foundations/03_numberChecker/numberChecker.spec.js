

const numberChecker = require('./numberChecker.js')

describe('testblabla', () => {
  test('1st test', () =>{
    expect(numberChecker(1000)).toEqual(true)});
  test('2nd test', () =>{
    expect(numberChecker(10)).toEqual(true)})
  test('3rd test', () => {
    expect(numberChecker(9)).toEqual(false)
  })
  test('4th test', () => {
    expect(numberChecker(6)).toEqual(false)
  })
    }
    )

