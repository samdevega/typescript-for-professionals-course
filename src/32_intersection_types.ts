(() => {
  type Point2D = {
    x: number
    y: number
  }
  
  type Point3D = 
    & Point2D
    & { z: number }
  
  
  type Person = {
    name: string
  }
  
  type Email = {
    email: string
  }
  
  type Phone = {
    phone: string
  }
  
  type ContactDetails = Person & Email & Phone
  
  function contact(details: ContactDetails) {
    console.log(`Dear ${details.name}.
    I hope you received our email at ${details.email}.
    We will call you at ${details.phone} shortly.`)
  }
  
  contact({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '111222333'
  })
})()