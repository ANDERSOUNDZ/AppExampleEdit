//declarar siempre variables con convenciones en mayusculas

export class CartItem{
    product: jsonProductItem;
    amount: number;
}

export class jsonProductItem {
    id: string;
    name: string;
}