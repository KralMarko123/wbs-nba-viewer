/// <reference types="Cypress" />

describe("e2e test suite", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("dev-url"));
  });

  it("opens up the Home page and checks the default state of the page", () => {
    cy.checkDefaultState();
  });

  it("Applies a filter which returns no results and asserts the page content", () => {
    cy.get("#name").type("Test Filter");
    cy.get(".player-card").should("not.exist");
    cy.get(".no-results-message")
      .should("be.visible")
      .and("have.text", "Seems there are no results...");
  });

  it("Checks if selected results count is equal to the number of player cards displayed", () => {
    const possibleResultsCounts = [10, 20, 50, "All"];

    possibleResultsCounts.forEach((count) => {
      cy.selectResultsCount(count);
      cy.get(".selected-option").should("have.text", count);

      count === "All"
        ? cy.get(".player-card").should("have.length.greaterThan", 50)
        : cy.get(".player-card").should("have.length", count);
    });
  });

  it("Applies a filter and checks if said filter corresponds with player names present on the page", () => {
    cy.selectResultsCount(10);

    const randomTwoLetterPair = ["ma", "ba", "ze", "no", "an", "do", "di"];
    randomTwoLetterPair.forEach((pair) => {
      cy.checkPlayerCardsAgainstText(pair);
    });
  });

  it("Enters the details page for each player card and asserts the content within", () => {
    const numberOfResults = 20;
    cy.selectResultsCount(numberOfResults);
    let playerName;
    let dob;
    let draftYear;
    let team;

    for (let i = 0; i < numberOfResults; i++) {
      cy.get(".player-card")
        .eq(i)
        .then((el) => {
          playerName = el.find(".player-title").text();
          dob = el.find(".player-data").eq(0).text().split(" ")[1];
          draftYear = el.find(".player-data").eq(1).text().substring(12);
          team = el.find(".player-data").eq(2).text().substring(6);
        })
        .click()
        .then(() => {
          cy.checkPlayerInfoInDetailsPage(playerName, dob, draftYear, team);
        });

      cy.get(".back-button").click();
      cy.get(".home").should("be.visible");
    }
  });
});
