Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('scrollHeight')) {
    return false;
  }
  return true;
});

describe('e2e filter tests', () => {
    
    beforeEach('Lorem Ipsum', () => {

    });

    it('dummy', () => {
        
    });
})