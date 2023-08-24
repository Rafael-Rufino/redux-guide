export interface ProductTypes {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}

const products: ProductTypes[] = [
  {
    id: "6228fe63b7e6cb904bbe0165",
    price: 150.0,
    name: "Suéter Branco",
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1559502867-c406bd78ff24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  },
  {
    id: "6228fec7b7e6cb904bbe016f",
    name: "Regata Azul",
    price: 150.0,
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s",
  },
  {
    id: "6228ff71b7e6cb904bbe0175",
    name: "Suéter Vermelho Vibrante",
    price: 200.0,
    imageUrl:
      "https://images.unsplash.com/photo-1584670747417-594a9412fba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Vestido Vermelho",
    price: 250.0,
    imageUrl:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80",
    id: "6228ff93b7e6cb904bbe0177",
  },
  {
    id: "6228fe80b7e6cb904bbe0168",
    name: "Jaqueta Xadrez",
    price: 300.0,
    imageUrl:
      "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    price: 200.0,
    name: "Blusa Branca",
    id: "6228ff31b7e6cb904bbe0172",
    imageUrl:
      "https://images.unsplash.com/photo-1624206112918-f140f087f9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    price: 200.0,
    imageUrl:
      "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    id: "62290014b7e6cb904bbe017c",
    name: "Camiseta Listrada",
  },
  {
    id: "6228ffa5b7e6cb904bbe017a",
    name: "Vestido Branco",
    price: 250.0,
    imageUrl:
      "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    id: "6228feab1b7e6cb904bbe016b",
    price: 180.0,
    name: "Blusa Manga Longa",
    imageUrl:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvdXBhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "6228feb91b7e6cb904bbe016d",
    name: "Camiseta Listrada",
    price: 120.0,
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm91cGFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "6228feb91b7e6cb904bbe016d",
    name: "Jaleco Rosa",
    price: 120.0,
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvdXBhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "6228feb91b7e6cb904bbe0100",
    name: "Blusa Rosa",
    price: 120.0,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvdXBhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "6228feb91b7dcb904bbe0100",
    name: "Blusa Rosa",
    price: 120.0,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvdXBhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default products;
