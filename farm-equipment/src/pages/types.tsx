export type ProductProps = {
    id: string,
    image: string,
    title: string,
    description: string,
    price: number,
}

export type AllProductsProps = {
    products: ProductProps[]
}



