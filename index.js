
const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('%c pass', 'color: green')
      return true
    } else {
      console.log('%c fail', 'color: red')
      console.log(`%c expected: ${assertion}`, 'color: yellow')
      console.log(`%c got: ${exp}`, 'color: purple')
      return false
    }
  }
})

const expect = (exp) => matchers(exp)

// function adder(a, b) {
//   return a + b 
// }

// describe('adder', () => {
//   it('adds two numbers', () => {
//     const result = adder(1, 2)
//     expect(result).toBe(3)
//   })
// })
