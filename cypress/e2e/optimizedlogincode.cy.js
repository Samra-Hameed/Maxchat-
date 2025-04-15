const testCases = [
    { username: 'samra_hameed', password: '654321', expected: 'success' },
    { username: 'samra', password: '654321', expected: 'fail' },
    { username: '', password: '654321', expected: 'fail' },
    { username: 'samra_hameed', password: '123456', expected: 'fail' },
  ];
  
  describe('Login Functionality', () => {
    beforeEach(() => {
      cy.visit(loginUrl); 
    });
  
    testCases.forEach(({ username, password, expected }) => {
      it(`Login with username: "${username}" and password: "${password}"`, () => {
        if (username) cy.get('#username').clear().type(username);
        if (password) cy.get('#password').clear().type(password);
  
        cy.get('#loginBtn').click();
  
        if (expected === 'success') {
          cy.url().should('include', '/dashboard');
        } else {
          cy.get('.error-msg').should('be.visible');
        }
      });
    });
  });
  