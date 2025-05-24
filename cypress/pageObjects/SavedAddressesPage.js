import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
static get url() {
    return "/#/";
}
static get addressesButton(){
    return cy.get ('button[aria-label="Add a new address"]');

}}