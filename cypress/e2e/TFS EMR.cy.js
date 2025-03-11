
describe('login page test', () => {
 /* beforeEach(() => {
      // Visit the login page before each test
      cy.visit('http://tfs-server:8081/EMR/Login.aspx');
    }); */


   it('Launch EMR login page', () => {
      cy.visit('http://tfs-server:8081/EMR/Login.aspx');
      cy.get('#txtUserName').type('samra_hameed')
      cy.get('#txtPassword').type('123456')
      cy.get('#btnLogin').click()
      cy.get('#txtSecurityCode').type('BB359B7E-BA73-4276-BB73-FEE3A283FBE3')
      cy.get('#btnCheckCode').click()
      cy.get('#txtUserName').type('samra_hameed')
      cy.get('#txtPassword').type('123456')
      cy.get('#btnLogin').click()
      cy.get(':nth-child(1) > .widthtd').click()
  //  })

    //setting
  //  it('Launch EMR setting', () => {  
      cy.get('#HyperLink7').click({force:true})
      cy.wait(2000)
  //  })

    //billing
   // it('Launch EMR Billing', () => {
      cy.get('#HyperLink4').click()
      cy.wait(2000)
      // location dropdown column
      cy.get('#ShowDDLlocation').click()
      cy.wait(2000)
      cy.get('body > form:nth-child(1) > div:nth-child(12) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(2) > th:nth-child(9) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(7)').click()
    //  cy.get('[type="checkbox"]').click({ force:true, multiple: true });
      cy.wait(2000)
      cy.get('span[onclick="okShowDDLlocaTion()"]').click()
      cy.wait(2000)
      cy.get('#btnCreateClaimMain').click()
      cy.wait(2000) 
      cy.get('#btnClaimStatusEnquiry').click({force:true})
      cy.wait(2000)
      cy.get('#ContentPlaceHolder1_btnCreateInstitutionalClaimMain').click({})
      cy.wait(10000)
      cy.get('#btnClaimSubmissionMain').click({force:true})
      cy.wait(10000)
      cy.get('#btnPatientInvoices').click({force:true})
      cy.wait(10000)
      cy.get('#btnPostPaymentMain').click({force:true})
      cy.wait(10000)

   // })

    //Files
    //it('Launch EMR Files', () => {
  
      cy.get('#HyperLink1').click()
      cy.wait(2000)
  //  })

    //Patient
  //  it('Launch EMR Patient', () => {
      cy.get('#HyperLink3').click()
      cy.wait(2000)
   // })

    //RBS
   // it('Launch EMR RBS', () => {
      cy.get('#liRBS').click()
      cy.wait(2000)
   // })

    //Report Customization
   // it('Launch EMR Report Customization', () => {
      cy.get('#MasterReportCustom').click()
      cy.wait(2000)

   // })

    //Home
   // it('Launch EMR  Home', () => {  
      cy.get('#HyperLink2').click()
      cy.wait(2000)
   // })
  
    //Dashboard
   // it('Launch EMR Dashboard', () => {  
      cy.get('#HyperLink9').click()
      cy.wait(2000)
   // })


   // it('For EMR Exception', () => {      
     Cypress.on('uncaught:exception', (err, runnable) => {
      // Returning false here prevents Cypress from failing the test
      return false; })
   // })
  })
})