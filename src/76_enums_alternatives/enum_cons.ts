// Enum cons
// ❌ Step 1: Enum is created with default numeric values by default
enum Enum1 {
  email,
  social
}

console.log(Enum1.email) // 0
console.log(Enum1.social) // 1

// ❌ Step 2: Someone adds a new key, in alphabetical order of course
enum Enum2 {
  app,
  email,
  social
}

console.log(Enum2.email) // 1
console.log(Enum2.social) // 2

// ❌ Enums allows to assign the same value to different keys
enum Enum3 {
  app = 0,
  email = 0,
  social = 2
}

// Unexpected behavior on numeric enums
enum Enum4 {
  app = 0,
  email = 1,
  social = 2
}

console.log(Enum4['app']) // 0
console.log(Enum4[0]) // 'app'

const keys1 = Object.keys(Enum4)
console.log(keys1)
// Expected: ['app', 'email', 'social']
// Actual: ['0', '1', '2', 'app', 'email', 'social']

// Fixed by string enums, but violates DRY
enum Enum5 {
  app = 'app',
  email = 'email',
  social = 'social'
}

const keys2 = Object.keys(Enum5)
console.log(keys2) // ['app', 'email', 'social']
console.log(Enum5.app) // 'app'