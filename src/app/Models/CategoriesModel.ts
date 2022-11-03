export interface CategoriesModels{
  id:number,
  name:string,
  image:string,//images,
  subcategories:SubcategoriesModel
}
export interface SubcategoriesModel{
  id:number,
  name:string,
  image:string,
  categorieId:number
}
