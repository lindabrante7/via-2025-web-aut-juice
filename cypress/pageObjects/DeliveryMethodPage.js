/// <reference types="cypress" />

import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/delivery-method";
  }

  static get standardButton() {
    return cy.get("#mat-radio-44-input");
  }  

  static get ContinueButton() {
    return cy.contains("button", "Continue")
  }
}
