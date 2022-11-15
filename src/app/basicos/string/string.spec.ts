import { mensaje } from './string';
//  describe: sirve para agrupar pruebas

describe('Pruebas de strings', ()=>{
    //  it: para realizar una prueba en concreto. 
    it('Debe regresar un string', ()=>{
        const respuesta = mensaje('Andres');
        expect(typeof respuesta ).toBe( 'string' );
    });
    it('Debe regresar el nombre que envio como argumento', ()=>{
        const nombre = 'Andres'
        const respuesta = mensaje(nombre);
        console.log(respuesta)
        expect( respuesta ).toContain( nombre );
    });
});


// it('Debe regresar uns tring');