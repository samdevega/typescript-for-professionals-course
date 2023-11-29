(() => {
  type ComplexType = {
    buyer: {
      email: string
      name: string
    }
    products: {
      id: number
      name: string
      reference: string
    }[]
    payment: {
      creditCardToken: string
    }
  }

  // Use part of the complex type without declaring a new type
  // type PaymentType = ComplexType['payment']
  // Inline
  function getPayment(): ComplexType['payment'] {
    return {
      creditCardToken: '8y1x36n25g9ro0zp'
    }
  }

  // For arrays
  type ProductType = ComplexType['products'][0]
})()