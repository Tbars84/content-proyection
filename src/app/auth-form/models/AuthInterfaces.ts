export interface User {
  email: string,
  password: string
}
export interface StockList {
  label: string,
  value: StockItem
}

interface StockItem {
  id: number,
  brand: string,
  type: string,
  code: string,
  price?: number
}
