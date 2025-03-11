describe('MaxChat Testing', () => {
   beforeEach(() => {
     cy.visit('/');
     });

    it('Chat', () => {
// User login 
//cy.visit('https://communication.mremind.com/')
    cy.get("input[id=':r0:']").type('samra_hameed')
    cy.get("input[id=':r1:']").type('654321')
  //cy.get("button[type='button']").click({multiple:true})
    cy.get('.css-19n8dai > .MuiButtonBase-root').click()
// Chat section
    cy.get("[data-testid='ChatRoundedIcon']").click()
    cy.wait(3000) 
  // search box
    cy.get("input[placeholder='Search People, Groups...']").type('hamza')
    cy.wait(3000)
    cy.get("input[placeholder='Search People, Groups...']").clear()
    cy.wait(3000)

  //chat user scroll
  /*  cy.get('.css-food6c').scrollTo('bottom')
    cy.wait(3000)
    cy.get('.css-food6c').scrollTo('top')
    cy.wait(3000) */

  // select chat
    cy.get(':nth-child(1) > .MuiGrid-grid-xs-8').click()
    cy.wait(3000)  
  // selected chat scroll 
    cy.get('.scrollbar-container.cs-message-list__scroll-wrapper.ps.ps--active-y').scrollTo('top',{ensureScrollable: false})
    cy.wait(3000)
    cy.get('.scrollbar-container.cs-message-list__scroll-wrapper.ps.ps--active-y').scrollTo('top',{ensureScrollable: false})
    cy.wait(3000)
    cy.get('.scrollbar-container.cs-message-list__scroll-wrapper.ps.ps--active-y').scrollTo('bottom',{ensureScrollable: false})
    cy.wait(3000)
  // Chat Dropdown arrow manually scroll up then run this comamnd
  //  cy.get('[data-testid="KeyboardArrowDownIcon"]').click({force:true})
  //  cy.wait(3000)

  // chat search
    cy.get('.css-uy2lmq').type('hi')
    cy.get('.css-11ygqv3').click()
    //upward search icon
    cy.get('[data-testid="KeyboardArrowUpIcon"]').click({ multiple: true, force: true })
    cy.wait(5000)
    //downward search icon
    cy.get('[data-testid="KeyboardArrowDownIcon"]').closest('button').click({force: true});
    //cy.get('[data-testid="KeyboardArrowDownIcon"]').click({ multiple: true })
    cy.wait(5000)      
    // clear search 
    cy.get("[data-testid='ClearIcon']").click()
    cy.wait(3000) 
    //Cancel button
    cy.get('.css-o4nel8').click()
    cy.wait(5000) 

  // to attachfile
  /*const filePath = 'C:\\Users\\samra hameed\\Downloads\\UHSManual-Scheduler.pdf';
    const elementSelector = "//input[@type='file']";       
    cy.uploadFileFromPath("//input[@type='file']", 'C:\\Users\\samra hameed\\Downloads\\UHSManual-Scheduler.pdf');
    cy.get('[data-testid="SendIcon"] > path').click({force:true})
    cy.wait(3000) */
    

  //Open side bar - Gallery - Drop-down functionality is pending
    cy.get("[data-testid='CollectionsIcon']").click()
    cy.wait(1000) 
   // to view user profile image from gallery
   // cy.get("[data-testid='AccountCircleIcon']").click()
   // cy.wait(3000) 
   // to view gallery from side bar
    cy.xpath("//button[normalize-space()='Gallery']").click()
    // to view user documents from gallery click on drop down
    cy.xpath("//li[1]//button[1]//*[name()='svg']").click()
    cy.xpath("//li[1]//button[1]//*[name()='svg']").click()
    // to view user photos from gallery click on drop down
    cy.xpath("//li[2]//button[1]//*[name()='svg']").click()
    cy.xpath("//li[2]//button[1]//*[name()='svg']").click()
   // to view profile from side bar
   // cy.xpath("//button[normalize-space()='Profile']").click()
   // username edit  
   /*
    cy.get("[data-testid='EditIcon']").click()
    cy.get('#\\:r5o\\:').clear();
    cy.get('#\\:r5o\\:').type('momna updated')
   // cross icon
   //cy.xpath("//div[@class='MuiBox-root css-axw7ok']//*[name()='svg']//*[name()='path' and contains(@d,'M19 6.41 1')]").click()
   // tick icon
    cy.xpath("//div[@class='MuiBox-root css-axw7ok']//*[name()='svg']").click({multiple:true})
   

   // Add to favorites
    cy.get("input[aria-label='ant design']").click()
   // Remove from favorites
    cy.get("input[aria-label='ant design']").click() */
   // close sidebar icon 
    cy.get("[data-testid='CloseIcon']").click()
    cy.wait(1000) 
    
  // to view user profile by clicking on img
    cy.get('.MuiGrid-grid-xs-6 > .MuiAvatar-root').click({force:true})
  // to select group name 
    cy.get('.css-1ghwnnj > .MuiButtonBase-root').click()
    cy.wait(1000)
  //  cy.get('[data-testid="EditIcon"]').click({multiple:true, force:true})

   /*  need to fix errors
   cy.get('.css-1gomreu > .MuiButtonBase-root > [data-testid="EditIcon"]').click() 
    cy.get('.MuiList-root').click()
    cy.get('.css-tr9z7b > .MuiListItemText-root > .MuiTypography-root').click()
    const profilePicPath = 'C:\\Users\\samra hameed\\Pictures\\profile.png';
    const profilePicSelector = "//span[normalize-space()='Edit Image']";
    cy.uploadFileFromPath(profilePicSelector, profilePicPath);
    */




    //cy.get('.css-gqg1od > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[data-testid="DoneIcon"]').click({ force: true });



  // to clear group name
  //  cy.get('.css-jav522 > :nth-child(2)').click()
  //  cy.wait(3000)
  // to rename group name
  //  cy.get('.css-154atec > .MuiBox-root > .MuiInputBase-root > .MuiInputBase-input').clear().type('QA Task Discussion')
  //  cy.wait(3000)  
  //  cy.get('[data-testid="DoneIcon"]').click()
  //  cy.wait(3000)

  // to leave a group
  //cy.get('.css-1keewkg > .MuiTypography-root').click()
  //cy.wait(3000)
  // to leave a group cancel button
  //cy.get('.css-18j13v2').click()
  //cy.wait(3000)
  // to leave a group okay button
  //cy.get('.css-1f0l1ij').click()
  //cy.wait(3000)


  // To remove a participant from group
  //cy.get('.css-jav522 > :nth-child(2) > .MuiButtonBase-root').click()
  //cy.wait(3000)
  //cancel click
  //cy.get('.css-172odef').click()
    
  // remove click
  //cy.get('.css-1qslno2').click()

  // to add participant in group
  /*cy.get('.css-jknayb > .MuiButtonBase-root').click()
    cy.wait(3000)
    cy.get('.css-1a9nyhc > .MuiBox-root > .MuiInputBase-root > .MuiInputBase-input').type('hamza')
    cy.wait(1000)
    cy.get('.css-1svcly9 > :nth-child(1)').find('input[type="checkbox"]').check()
    cy.wait(3000)
    cy.get('.css-1a9nyhc > .MuiBox-root > .MuiButtonBase-root').click()
    cy.wait(3000) */

  // to add group to favourites through button in detail
  //cy.get('input[aria-label="ant design"]').check()
  //cy.wait(3000)
  // click on close icon
  //  cy.get("[data-testid='CloseIcon']").click()
  //  cy.wait(3000)

  // to delete group or chat
  // click on delete button
  //cy.get('.css-1keewkg > .MuiTypography-root').click()
  //cy.wait(3000)
  // click on cancel button
  //cy.get('.css-18j13v2').click()
  //cy.wait(3000)
  // click on yes button
  //cy.get('.css-1f0l1ij').click()
  //cy.wait(3000)

  // sent message 
  // sent hello message
  cy.get('.css-1k6mr3k > .MuiBox-root').click()
  cy.get('#message-input').type('hello').click({force:true}) 
  // Call a user
  //cy.get("[data-testid='CallOutlinedIcon']").click()
  //cy.wait(1000) 
  //  to copy message 
   /* cy.get(':nth-child(10) > :nth-child(1) > :nth-child(1) > .MuiStack-root > [style="margin-left: 0px; flex-grow: 1; max-width: 80%;"] > .css-1jfqimh > .css-1rr4qq7 > .cs-message > .cs-message__content-wrapper > .cs-message__content > .message-outgoing > [style="display: flex; flex-direction: column; align-items: start; font-family: Poppins; position: relative;"] > [style="display: flex; align-items: flex-start; position: relative; flex-direction: row;"] > div > p > span').rightclick()
    cy.wait(1000)
    cy.get('li:nth-child(1)').click()
    cy.wait(1000)
    cy.get('.css-1k6mr3k > .MuiBox-root').rightclick()
    cy.get('.MuiList-root > :nth-child(3)').click()
    cy.wait(1000) 
  // to reply a message
    cy.get(':nth-child(10) > :nth-child(1) > :nth-child(1) > .MuiStack-root > [style="margin-left: 0px; flex-grow: 1; max-width: 80%;"] > .css-1jfqimh > .css-1rr4qq7 > .cs-message > .cs-message__content-wrapper > .cs-message__content > .message-outgoing > [style="display: flex; flex-direction: column; align-items: start; font-family: Poppins; position: relative;"] > [style="display: flex; align-items: flex-start; position: relative; flex-direction: row;"] > div > p > span').rightclick()
    cy.wait(1000)
    cy.get('.MuiList-root > :nth-child(3)').click()
    cy.wait(1000)
    cy.get('.css-1k6mr3k > .MuiBox-root').type('test') 
  // to forward message
    cy.get(':nth-child(10) > :nth-child(1) > :nth-child(1) > .MuiStack-root > [style="margin-left: 0px; flex-grow: 1; max-width: 80%;"] > .css-1jfqimh > .css-1rr4qq7 > .cs-message > .cs-message__content-wrapper > .cs-message__content > .message-outgoing > [style="display: flex; flex-direction: column; align-items: start; font-family: Poppins; position: relative;"] > [style="display: flex; align-items: flex-start; position: relative; flex-direction: row;"] > div > p > span').rightclick()
    cy.wait(3000)
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000)
    cy.get(':nth-child(3) > .MuiButtonBase-root').click()
    cy.get('.css-a0d98v > .MuiButtonBase-root').click()  
    
  // to edit message
    cy.get(':nth-child(10) > :nth-child(1) > :nth-child(1) > .MuiStack-root > [style="margin-left: 0px; flex-grow: 1; max-width: 80%;"] > .css-1jfqimh > .css-1rr4qq7 > .cs-message > .cs-message__content-wrapper > .cs-message__content > .message-outgoing > [style="display: flex; flex-direction: column; align-items: start; font-family: Poppins; position: relative;"] > [style="display: flex; align-items: flex-start; position: relative; flex-direction: row;"] > div > p > span').rightclick()
    cy.wait(3000)
    cy.get(':nth-child(6) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.css-1k6mr3k > .MuiBox-root').type('ok') 
    
  // to delete message
  cy.get(':nth-child(10) > :nth-child(1) > :nth-child(1) > .MuiStack-root > [style="margin-left: 0px; flex-grow: 1; max-width: 80%;"] > .css-1jfqimh > .css-1rr4qq7 > .cs-message > .cs-message__content-wrapper > .cs-message__content > .message-outgoing > [style="display: flex; flex-direction: column; align-items: start; font-family: Poppins; position: relative;"] > [style="display: flex; align-items: flex-start; position: relative; flex-direction: row;"] > div > p > span').rightclick()
  cy.wait(3000)
  cy.get(':nth-child(8) > .MuiListItemText-root > .MuiTypography-root').click()

  // sent emojis
    cy.get('button.MuiIconButton-sizeSmall > img').click()
    cy.get('button[aria-label="Smileys & People"]').click()
    cy.wait(3000)
    cy.get('input[placeholder="Search"]').type('hot')
    cy.get('button[aria-label="coffee"]').click()
    cy.get('input[placeholder="Search"]').clear()
    cy.get('input[placeholder="Search"]').type('food')
    cy.get('button[aria-label="shallow pan of food"]').click()
    cy.wait(3000) */
  // send message  
    cy.get('[data-testid="SendIcon"] > path').click({force:true}) 
    cy.wait(1000)

  // to select favorite chat
  //cy.get('.css-food6c > :nth-child(1)').click()
  //cy.wait(1000)

  // add chats to favourite
  //cy.get(':nth-child(4) > .MuiGrid-grid-xs-8').rightclick()
  //cy.wait(1000)
  //cy.get(':nth-child(16) > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
  //cy.wait(1000)

  // react on message
  //cy.get(':nth-child(24) > :nth-child(1) > [style="display: flex;"] > .MuiStack-root > .css-cucmhg').click()
  //cy.get('.css-1uww4r8 > :nth-child(2)').click()
  //cy.wait(1000)


  // Delete Chat 
//cy.get(':nth-child(4) > .MuiGrid-grid-xs-8').rightclick()
//cy.wait(1000)
//cy.get(':nth-child(17) > .MuiPaper-root > .MuiList-root > .css-11m3202').click({force:true})
//cy.wait(1000)
//cy.get('.css-srzu79').click()
//cy.get('.css-1s5yxi0').click()

  // first favorite chat to remove from favorites 
  //cy.get('.css-food6c > :nth-child(1)').click()
  //cy.wait(10000)
  //cy.get('.css-food6c > :nth-child(1)').rightclick()
  //cy.get(':nth-child(17) > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
  //cy.wait(1000)

// notification handling
//cy.get('.css-1xap3wt > .MuiStack-root > .MuiTypography-root').click()
//cy.wait(1000)

// tagging in a chat
/*  cy.get('.css-1k6mr3k > .MuiBox-root').click()
  cy.get('#message-input').type('@')
  cy.wait(1000)
  cy.xpath('//span[normalize-space()="Umaisa Hashim"]').click()
  cy.get('#message-input').type('hi')
  cy.wait(1000)
  cy.get('[data-testid="SendIcon"] > path').click({force:true}) 
  cy.wait(1000)
*/


  // new chat
  //cy.get('.css-uu4d94').click({force: true})
  //cy.wait(1000)
  // search user to add
  //cy.get('.MuiGrid-grid-sm-12 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('hamza')
  //cy.wait(1000)
  // select user to add
  //cy.get('.css-rfnosa > .MuiButtonBase-root').click()
  //cy.wait(10000)
  // Click on cross icon to close pop up
  //cy.get("[data-testid='CancelOutlinedIcon']").click()
  //cy.wait(5000)
  // Cancel button on add user pop up
  //cy.get('.MuiDialogActions-root > :nth-child(1)').click()
  //cy.wait(1000)
  // okay button on add user pop up
  //cy.get('.MuiDialogActions-root > :nth-child(2)').click()
  //cy.wait(5000)

  // new group
  /*cy.get('.css-fgrctz').click({force:true})
    cy.wait(1000)
    cy.get('.MuiGrid-grid-xs-8 > .MuiInputBase-root > .MuiInputBase-input').type('Software Testing team')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('Mom')
    cy.get('.css-qucmex > :nth-child(1) > .MuiButtonBase-root').click()
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').clear().type('uma')
    cy.get('.css-qucmex > :nth-child(1) > .MuiButtonBase-root').click()
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').clear().type('soh')
    cy.get('.css-rfnosa > .MuiButtonBase-root').click()
  // upload profile image 
  //cy.get('.MuiGrid-grid-xs-3\.5 > .MuiTypography-root').click()
  //cy.wait(1000)
  // Click on cross icon to close pop up
  //cy.get("[data-testid='CancelOutlinedIcon']").click()
  //cy.wait(1000)
  // Group Cancel button 
  //cy.get('.css-8fc3e0').click()
  // Group create button
    cy.get('.css-eor7e0').click()
    cy.wait(3000)
    cy.get('.css-1k6mr3k > .MuiBox-root > .MuiInputBase-root').click()
    cy.get('#message-input').type('Hi, Everyone How are you?')
    cy.get('[data-testid="SendIcon"] > path').click({force:true})
    cy.wait(3000)  */

  // Recent chat dropdown
    cy.get('.MuiSelect-select').click({force:true})
    cy.wait(1000)
    cy.get("[data-value='favorites']").click()
    cy.wait(1000)
    cy.get('.MuiSelect-select').click({force:true})
    cy.get("[data-value='recent']").click()
    cy.wait(1000)
// Call
    cy.get("[data-testid='VideoCallOutlinedIcon']").click({force: true})
    cy.wait(10000)
  // search box
    cy.get("input[placeholder='Search People, Groups...']").type('hamza')
    cy.wait(1000)
    cy.get("input[placeholder='Search People, Groups...']").clear()
    cy.wait(1000)
// Contact
    cy.get("[data-testid='PermContactCalendarOutlinedIcon']").click()
    cy.wait(1000)
  // search box
    cy.get("input[placeholder='Search People, Groups...']").type('hamza')
    cy.wait(1000)
    cy.get("input[placeholder='Search People, Groups...']").clear()
    cy.wait(1000)
  // All contacts dropdown
    cy.get('.MuiSelect-select').click()
    cy.wait(1000)
    cy.get("[data-value='favorites']").click()
    cy.wait(1000)
    cy.get('.MuiSelect-select').click()
    cy.wait(1000)
    cy.get("[data-value='all']").click()
    cy.wait(1000)
  //Add contact button
    cy.get('.MuiGrid-container > .MuiBox-root > .MuiButtonBase-root').click()
    cy.wait(1000)
    cy.get("[data-testid='CancelOutlinedIcon']").click({force: true})
    cy.wait(1000)



// Email section 
   cy.get("[data-testid='EmailIcon']").click()
   cy.wait(2000)
   });
                         
  })