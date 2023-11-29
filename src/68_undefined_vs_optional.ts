(() => {
  // Optional
  type ExampleOptional = {
    name?: string
  }
  let optional: ExampleOptional

  optional = { name: undefined }
  optional = {}

  // Undefined
  type ExampleUndefined = {
    name: string | undefined
  }
  let undef: ExampleUndefined
  undef = { name: undefined }
  undef = {} // Error: name is missing


  // Use Optional unless you have the necessity of having a property with undefined value. E.g:
  function setConfig(config: {
    name: string,
    priority?: number
  }) {}

  setConfig({ name: 'CaseA', priority: undefined })
  setConfig({ name: 'CaseB', priority: 1 })
  setConfig({ name: 'CaseC' })
})()