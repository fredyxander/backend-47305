class TicketManager{
    #precioBaseGanancia=0.15;
    constructor(){
        this.eventos = [];
    };

    getEventos(){
        console.log(this.eventos);
    };

    agregarEvento(nombre,lugar,precio,capacidad=50,fecha=new Date()){
        let newId;
        if(this.eventos.length==0){
            newId=1
        } else {
            newId=this.eventos[this.eventos.length-1].id+1
        }
        const nuevoEvento = {
            id: newId,
            nombre,
            lugar,
            precio:precio*(1+this.#precioBaseGanancia),
            capacidad,
            fecha,
            participantes:[]
        }
        this.eventos.push(nuevoEvento);
    };

    agregarUsuario(idEvento, idUsuario){
        const evento = this.eventos.find(elm=>elm.id===idEvento);
        if(!evento){
            console.log("El evento no existe");
        } else {
            const usuarioExiste = evento.participantes.find(elm=>elm === idUsuario)
            if(usuarioExiste){
                console.log("El usuario ya fue agregado");
            } else {
                evento.participantes.push(idUsuario);
            }
        }
    };
}
const manager1 = new TicketManager();
console.log(manager1);
manager1.getEventos();
manager1.agregarEvento("Pelicula de acción","cinema 12",200,200,new Date("2023-08-15"));
manager1.agregarEvento("Cena familiar","restaurante italiano",600,undefined,new Date("2023-08-15"));
manager1.getEventos();
manager1.agregarUsuario(2,100);
manager1.agregarUsuario(2,140);
manager1.agregarUsuario(2,140);
manager1.getEventos();
