import { EventEmitter } from "@angular/core";

export class JugadorDos {
    hp!:number;
    hpCambia:EventEmitter<number> = new EventEmitter<number>();
    constructor(){
        this.hp = 100;
    }

    recibeDano(dano:number){
        dano >= this.hp ? this.hp = 0 : this.hp -= dano;    
        this.hpCambia.emit(this.hp);
    }
}