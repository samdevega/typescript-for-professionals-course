(() => {
  type InputValue = string
  type InputOnChange = (newValue: InputValue) => void
  type InputType = 'text' | 'email'

  type InputProps = {
    type: InputType,
    value: InputValue,
    onChange: InputOnChange
  }

  /**
   * Types support:
   * - Unions
   * - Intersections (&) (alt extends)
   * - Primitives
   * - Shorthand Functions
   * - Advanced Type Functions
   */
})()