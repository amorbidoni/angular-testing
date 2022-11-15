import { getRobots } from './arreglos';

xdescribe('Pruebas de arreglos', ()=>{

    it('Debe retornar al menos 3 robots', ()=>{
            const res = getRobots();
            expect( res.length ).toBeGreaterThanOrEqual(3);
        }
    );
    it('Debe existir robocopn y megaman', ()=>{
        const res = getRobots();
        expect( res ).toContain('Megaman');
        expect( res ).toContain('Robocop');
    }
)

})