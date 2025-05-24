import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
static get url() {
    return "/#/";
}
static get AddNewCard(){
    return cy.get('#mat-expansion-panel-header-0')
}

static get FillName (){
    return cy.get('#mat-input-2')
}

static get FillCardNumber (){
    return cy.get('#mat-input-3')
}
static get CardDate (){
    return cy.get('#mat-input-4')
}

static get CardExpiryDate (){
    return cy.get('#mat-input-5')
}

static get SubmitButton (){
    return cy.get('#submitButton')
}

static get CardList () {
    return cy.get('mat-row')

}
}