require('../src/data.js');


describe('POKEMON', () => {
    it('is a metodo', () => {
        expect(typeof POKEMON).toBe('metodo');
    });

    it('returns `POKEMON`', () => {
        expect(metodo()).toBe('POKEMON');
    });
});