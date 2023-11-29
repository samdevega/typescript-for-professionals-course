(() => {
  const AltToEnum = {
    device: 'device',
    email: 'email',
    social: 'social'
  } as const

  type AltToEnum = keyof typeof AltToEnum

  function doSomething(alt: AltToEnum) {}

  doSomething('device')
  doSomething(AltToEnum.device)
  Object.keys(AltToEnum) // ['device', 'email', 'social']
})()