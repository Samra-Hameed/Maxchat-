describe('MaxChat Testing', () => {

    it('Launch Max Chat', () => {
      cy.visit('https://communication.mremind.com')
     cy.get("input[id=':r0:']").type('Hamza_asad')
     cy.get("input[id=':r1:']").type('924622')
     cy.get("button[type='button']").click()
     cy.get("a[aria-label='emails'] svg").click()
     cy.get("button[class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-fullWidth css-1mcazua'] span[class='MuiButton-icon MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel'] svg").click()
     
     //typing name in to folder
     cy.get("input[id=':r9:']").type('samra hameed')
     //selecting relevant person from the drop down
     cy.get("div[role='presentation'] span:nth-child(1)").click()
     //adding subject
     cy.get("input[placeholder='Add a Subject']").type("cypress automation")
     //compose your email in the box
     cy.get("div[class='ql-editor ql-blank'] p").type('Hi this is Hamza AsadUllah from Quality assurance department.')

     cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.css-s3z33b").click()

    
     

   })


  

  })