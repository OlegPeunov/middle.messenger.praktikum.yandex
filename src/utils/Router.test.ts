import Router, { BlockConstructable } from './Router'
import { expect } from 'chai';
import sinon from 'sinon';



describe('Router', () => {

  global.window.history.back = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  };
  global.window.history.forward = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  }

  const getContentFake = sinon.fake.returns(document.createElement('div'));

  const BlockMock = class {
    getContent = getContentFake;
  } as unknown as BlockConstructable;

  it('use() should return Router instance', () => {
    const result = Router.use('/', BlockMock);

    expect(result).to.eq(Router);
  });

  it('Переход на новую страницу должен менять состояние сущности history', () => {
    window.history.pushState({page: 'login'}, 'Login', '/login');
    window.history.pushState({page: 'register'}, 'Register', '/register');

    expect(window.history.length).to.eq(3);
  });
});
