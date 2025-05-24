import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
static get url() {
    return "/#/";
}
static get selectCards(){
    return cy.get ("#mat-radio-45-input")
}
static get ContinueButton() {
    return cy.contains("button", "Continue")
}
}
