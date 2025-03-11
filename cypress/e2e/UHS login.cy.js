
describe('login page test', () => {
    it('Launch EMR login page', () => {
      cy.visit('http://tfs-server:8790/')
      cy.get("input[id=':r0:']").type('user@uhs.com')
      cy.get("input[id=':r1:']").type('12345')
      cy.get('button[id=":r2:"]').click()
      cy.get(':nth-child(1) > .MuiBox-root > .MuiTypography-body1').click()
      cy.get('.MuiBox-root.css-1saz685').click()
      cy.wait(3000)
    })
  })