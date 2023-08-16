const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];

const tienda1 = Object.keys(objetos[0]);
const tienda2 = Object.keys(objetos[1]);
// console.log(tienda1)
// console.log(tienda2)
const tienda = [...tienda1,...tienda2];
// console.log(tienda);

//valores unicos
const productos = new Set(tienda);
// console.log(productos);
const productosTienda = [...productos];
console.log(productosTienda);

//2parte
const values1 = Object.values(objetos[0]);
const values2 = Object.values(objetos[1]);
const values = [...values1,...values2];
// console.log(values);

//reduce
const total = values.reduce((acc,curr)=>acc+=curr,0);
console.log(total);