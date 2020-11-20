/// <reference types="cypress" />

describe("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Can connect to webpage and render keypad with a button", () => {
    cy.get("#1-key").should("exist");
  });

  it("Can enter a 6-digit number and have it show on-screen", () => {
    for (let i = 0; i < 7; i++) {
      cy.get(`#${i}-key`).click();
    }
    cy.get("[data-name=number-field]").should("contain.text", "123456");
  });

  it("Clicking the chevron displays a list of mnemonics", () => {
    for (let i = 0; i < 7; i++) {
      cy.get(`#${i}-key`).click();
    }
    cy.get("#submit")
      .click()
      .get("[data-name=mnemonic-list]")
      .children()
      .children()
      .children()
      .should("not.have.length", 0);
  });

  it("Displays the right number of mnemonics", () => {
    cy.get(`#1-key`)
      .click()
      .get(`#2-key`)
      .click()
      .get("#submit")
      .click()
      .get("[data-name=mnemonic-list]")
      .children()
      .children()
      .children()
      .should("have.length", 4);
  });
});
