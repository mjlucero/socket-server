import { Usuario } from './usuario';

export class UsuariosLista {
    private lista: Usuario[] = [];

    constructor() {}

    //Agregar un usuario
    public agregar( usuario: Usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    //Actualizar nombre de un usuario
    public actualizarNombre(id: string, nombre: string){
        for (const usuario of this.lista) {
            if ( usuario.id === id ) {
                usuario.nombre = nombre;
                break;
            }
        }
    }

    //Obtener lista de usuarios
    public getLista(){
        return this.lista;
    }

    //Obtener un usuario especifico
    public getUsuario( id: string) {
        return this.lista.find( usuario => usuario.id === id );
    }

    //Obtener todos los usuarios de una sala
    public getUsuariosSala( sala: string) {
        return this.lista.find( usuario => usuario.sala === sala );
    }

    //Borrar un usuario
    public borrarUsuario( id: string ) {
        const tempUsuario = this.getUsuario(id);

        this.lista = this.lista.filter( usuario => usuario.id !== id );

        return tempUsuario;
    }
}