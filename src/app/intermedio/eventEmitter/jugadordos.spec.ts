import { JugadorDos } from './jugadordos';

describe('JugadorDos emit', ()=>{
        let jugador:JugadorDos;
        beforeEach(()=>jugador = new JugadorDos());

        it('Debe emitir un evento cuando recibe daño', ()=>{
            let nuevohp = 0;
                jugador.hpCambia.subscribe(hp=>{
                    nuevohp = hp;
                })

                jugador.recibeDano(1000);
                expect( nuevohp ).toBe(0);
            }
        )
        it('Debe emitir un evento cuando recibe daño y sobrevivir si es menos de 100', ()=>{
            let nuevohp = 0;
                jugador.hpCambia.subscribe(hp=>nuevohp = hp);

                jugador.recibeDano(50);
                expect( nuevohp ).toBe(50);
            }
        )
    }
)