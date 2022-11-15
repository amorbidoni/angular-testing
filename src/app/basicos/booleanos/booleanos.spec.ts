import { userLogged } from './booleanos';

describe('Pruebas de booleanos', ()=>{
    it('Debe retornar true', ()=>{
        const res = userLogged();
        expect(res).toBeTruthy();
    })
})