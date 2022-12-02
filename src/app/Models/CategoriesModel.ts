export interface CategoriesModels{
  id:number,
  name:string,
  image:string,//images,
  subcategories:SubcategoriesModel
}

export interface SubcategoriesModel{
  id:number;
  name:string;
  image:string;
  categorieId:number;
}

export interface ClasificationModel{
  id: number;
  image: string;
  name: string;
  subCategorieId: number;
}

export interface BarndsModels{
  id:number;
  image:string;//images,
  name:string;
}

export interface PresentationsModel{
  code: number;
  name: string;
  reference: string;
  plu: string;
  stock: number;
  price1: string;
  price2: string;
  price3: string;
  med: string;
  bulk: string;
  isActive: boolean;
}
