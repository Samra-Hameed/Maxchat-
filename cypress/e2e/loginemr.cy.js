
describe('login page test', () => {
    it('Launch EMR login page', () => {
      cy.visit('https://emr.mremind.com/EMR/Login.aspx?ReturnUrl=%2f')
      cy.get('#txtUserName').type('samra_hameed')
      cy.get('#txtPassword').type('54321')
      cy.get('#btnLogin').click()
      cy.get('#txtSecurityCode').type('44047E34-ECD9-4D55-B4A4-B1B1BD2532A3')
      cy.get('#btnCheckCode').click()
      cy.get('#txtUserName').type('samra_hameed')
      cy.get('#txtPassword').type('54321')
      cy.get('#btnLogin').click()

    })
  })