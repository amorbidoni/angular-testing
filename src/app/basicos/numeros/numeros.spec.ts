import { incrementar } from './numeros';

describe('Pruebas de numeros', ()=>{
    it('Si el numero es > 100 debe retornar 100', ()=>{
       const res = incrementar(300);
       expect(res).toBe(100);
    });
    it('Si el numero es < 100 debe el numero + 1', ()=>{
        const res = incrementar(50);
        console.log(res)
        expect(res).toBe(51);
     })
    
}) 