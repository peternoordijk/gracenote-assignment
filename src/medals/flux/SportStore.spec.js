import SportStore from './SportStore';


describe('SportStore', () => {

  it('should set the color with a capital first letter', () => {
    SportStore.setRouteParams(123, 'yElLoW');
    expect(SportStore.color).toBe('Yellow');
    expect(SportStore.sportId).toBe(123);
  });

})
