
export class Jugador {
    hp!:number;
    constructor(){
        this.hp = 100;
    }

    recibeDano(dano:number){
        dano >= this.hp ? this.hp = 0 : this.hp -= dano;    
        return this.hp;
    }
}