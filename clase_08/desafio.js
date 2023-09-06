POST: /api/carts
response:{
    id:"asdasd",
    products:[]
}

GET: /api/carts/:cid
response:{
    id:"sahgd",
    products:[
        {
            id:"product1",
            quanty:1
        },
        {
            id:"product2",
            quanty:1
        }
    ]
}

POST: /api/carts/:cid/product/:pid
{
    id:pid,
    quantity:1
}
//si el producto ya fue agregado
{
    id:pid,
    quantity:2
}