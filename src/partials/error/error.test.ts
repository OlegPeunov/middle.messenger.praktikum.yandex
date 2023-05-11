import { Error } from './index'
import { expect } from 'chai';


describe ('Message component', ()=>{
  it('should render', () => {
    const meassage = new Error({label: '', id: '' });
  });

  it('label should be a string', () => {
    const meassage = new Error({label: '', id: '' });

    expect(meassage.element?.textContent).to.be.a('string');
  });

  it('id should be a string', () => {
    const meassage = new Error({label: '', id: '' });

    expect(meassage.element?.id).to.be.a('string');
  });

});
