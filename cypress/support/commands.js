// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

/// <reference types="cypress-xpath" />


import 'cypress-file-upload';

Cypress.Commands.add('uploadFileFromPath', (selector, filePath) => {
    cy.readFile(filePath, 'binary').then((fileContent) => {
        const blob = Cypress.Blob.binaryStringToBlob(fileContent);
        const fileName = filePath.split('\\').pop(); // Extract file name from path
        const file = new File([blob], fileName);
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        cy.xpath(selector).then(($el) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.files = dataTransfer.files;

            // Append the input element and trigger the change event
            $el[0].appendChild(input);
            input.dispatchEvent(new Event('change', { bubbles: true }));
        });
    });
});
