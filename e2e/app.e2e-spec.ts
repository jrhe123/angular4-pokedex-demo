import { Ng4PokedexPage } from './app.po';

describe('ng4-pokedex App', () => {
  let page: Ng4PokedexPage;

  beforeEach(() => {
    page = new Ng4PokedexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
