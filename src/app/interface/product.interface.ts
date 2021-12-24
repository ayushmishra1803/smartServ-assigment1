export interface ProductReponse{
  count:number,
  products:productItem[]
}
export interface productItem{
  title:string,
  subcategory:string,
  price:number,
  popularity:number
}
