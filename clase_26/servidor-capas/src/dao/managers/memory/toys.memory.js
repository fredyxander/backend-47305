const toys = [];

export class ToysMemory{
    get(){
        return toys;
    };

    save(toy){
        toys.push(toy);
        return "Juguete Creado";
    };
}