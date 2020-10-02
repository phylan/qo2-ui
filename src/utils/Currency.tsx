
export const formatCurrency = (amount?: number) => {
    if(amount == null) { return "" }
    let formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    return formatter.format(amount)
  }