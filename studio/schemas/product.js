export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
      },
      {
        name:'productDescription',
        title:'Product Description',
        type:'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string',
      },
      {
        name: 'productImage',
        title: 'Product Image',
        type: 'image',
      },
    ],
}
