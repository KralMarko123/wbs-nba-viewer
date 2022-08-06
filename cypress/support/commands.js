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

Cypress.Commands.add(
  "checkPlayerInfoInDetailsPage",
  (playerName, dob, draftYear, team) => {
    cy.get(".info-text").eq(0).should("contain.text", playerName);
    cy.get(".info-text").eq(1).should("contain.text", team);
    cy.get(".info-text").eq(3).should("contain.text", draftYear);
    cy.get(".info-text").eq(4).should("contain.text", dob);
  }
);

Cypress.Commands.add("checkNotFound", () => {
  cy.get(".not-found").should("be.visible");
  cy.get(".no-results-message").should(
    "have.text",
    "Looks like there isn't anything here..."
  );
});
