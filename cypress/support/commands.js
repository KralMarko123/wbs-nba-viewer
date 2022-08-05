Cypress.Commands.add("checkDefaultState", () => {
  cy.get(".spinner")
    .should("exist")
    .get(".loading-text")
    .should("have.text", "Getting Players");
  cy.get(".selected-option").should("have.text", "20");
  cy.get("#name").should("be.empty");
  cy.get(".player-card").should("have.length", 20);
});

Cypress.Commands.add("selectResultsCount", (count) => {
  cy.get(".custom-select").click();
  cy.get(".option").each((el) =>
    el.text().includes(count) ? cy.wrap(el).click() : null
  );
});

Cypress.Commands.add("checkPlayerCardsAgainstText", (text) => {
  cy.get("#name").type(text);
  cy.get(".player-card").each((el) => {
    el.find(".player-title").text().includes(text);
  });
  cy.get("#name").clear();
});
