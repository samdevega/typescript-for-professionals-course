(() => {
  type Padding = 'small' | 'normal' | 'large' | (string & {})

  function getPadding(padding: Padding): string {
    switch (padding) {
      case 'small':
        return '12px'
      case 'normal':
        return '16px'
      case 'large':
        return '24px'
      default:
        return padding
    }
  }

  let padding: Padding
  padding = 'small'
  padding = '8px'
  padding = '' // Check autocomplete
})()