import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
static get url() {
    return "/#/";
}
static get  AddCountry (){
    return cy.get('#mat-input-2')
} 
static get  AddName (){
    return cy.get('#mat-input-3')
} 
static get  MobileNumber (){
    return cy.get('#mat-input-4')
} 
static get  AddZipCode (){
    return cy.get('#mat-input-5')
} 
static get  AddAddress (){
    return cy.get('#address')
} 
static get  AddCity (){
    return cy.get('#mat-input-7')
} 
static get  AddState (){
    return cy.get('#mat-input-8')
} 

static get SubmitButton (){
    return cy.get('#submitButton')
}


static get AddressValidation() {
    return cy.get('.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-Address.mat-column-Address.ng-star-inserted');
}
}