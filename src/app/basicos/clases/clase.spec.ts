import { Jugador } from './clase';

xdescribe( 'Pruebas de clase', ()=>{

    let jugador = new Jugador();

    beforeAll(()=>{
            // console.log('beforeAll')
        }
    );
    beforeEach(()=>{
            // console.log('beforeEach')
            // jugador.hp = 100
            jugador = new Jugador();
        }
        );
        
        afterAll(()=>{
            // console.log('afterAll')
        }
        );
        afterEach(()=>{
            // console.log('afterEach')
            // jugador.hp = 100
        }
    );    



    it('Debe retornar 80 de hp si recibe 20 de dano', ()=>{
                const res = jugador.recibeDano(20);
                expect( res ).toBe( 80 );
        });
   

    it('Debe retornar 80 de hp si recibe 20 de dano', ()=>{
                const res = jugador.recibeDano(20);
                expect( res ).toBe( 80 );
        });
   
    it('Debe retornar 80 de hp si recibe 20 de dano', ()=>{
                const res = jugador.recibeDano(20);
                expect( res ).toBe( 80 );
        });
   

    it('Debe retornar 80 de hp si recibe 20 de dano', ()=>{
                const res = jugador.recibeDano(20);
                expect( res ).toBe( 80 );
        });
 
    it('Debe retornar 0 de hp si recibe >100 dano', ()=>{
                const res = jugador.recibeDano(101);
                expect( res ).toBe( 0 );
        });
    
    }

    
    
    
)