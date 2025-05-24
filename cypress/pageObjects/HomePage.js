import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("button#navbarAccount");
  }

  static get loginButton() {
    return cy.get("button#navbarLoginButton");
  }

  static get userProfileButton(){
    return cy.get("button[aria-label='Go to user profile']")
  }

  static get searchIcon() {
    return cy.get("#searchQuery")
  }

  static get searchField() {
    return cy.get("#searchQuery input")
  }

  static get productBox() {
    return cy.get("div.mdc-card")
  }

  static get productInfo(){
    return cy.get("app-product-details")
  }

  static get closeButton(){
    return cy.get("button[aria-label='Close Dialog']")
   }

  static get cardsAmount(){
    return cy.get(".mat-mdc-paginator-range-actions")
  }
  static get clickPaginator(){
    return cy.get(".mat-mdc-paginator-touch-target")
  }
  static get changeCardAmount(){
    return cy.get(".mdc-list-item__primary-text")
  }
  static get addToBasket() {
    return cy.get("button[aria-label='Add to Basket']");
  }
  static get showBasket() {
    return cy.get("[aria-label='Show the shopping cart']");
  }
  static get Account() {
    return cy.get("button#navbarAccount");
  }
  static get OrderPay() {
    return cy.contains("span.mat-mdc-menu-item-text", "Orders & Payment")
    .should('be.visible')
    .click();
  }
  static get SavedAddress() {
    return cy.get("button[aria-label='Go to saved address page']");
  }
    static get AccountButton() {
    return cy.get("button#navbarAccount");
}
static get PaymentOtions(){
  return cy.get('button[aria-label="Go to saved payment methods page"]')
}
}