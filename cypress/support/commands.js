/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

Cypress.Commands.add('getIframe', (iframe)=> {
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})
Cypress.Commands.add('uploadFile', { prevSubject: 'element' }, (subject, file, fileName, mimeType) => {
    cy.wrap(subject).trigger('change', {
      force: true,
      dataTransfer: { files: [file], types: [mimeType] },
    });
  
    cy.fixture(file, 'base64').then((content) => {
      const blob = Cypress.Blob.base64StringToBlob(content, mimeType);
      const testFile = new File([blob], fileName, { type: mimeType });
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(testFile);
      cy.wrap(subject).trigger('drop', { dataTransfer });
    });
  });
Cypress.Commands.add('uploadFile', { prevSubject: 'element' }, (subject, file, fileName, mimeType) => {
  cy.wrap(subject).trigger('change', {
    force: true,
    dataTransfer: { files: [file], types: [mimeType] },
  });

  cy.fixture(file, 'base64').then((content) => {
    const blob = Cypress.Blob.base64StringToBlob(content, mimeType);
    const testFile = new File([blob], fileName, { type: mimeType });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(testFile);
    cy.wrap(subject).trigger('drop', { dataTransfer });
  });
});
  