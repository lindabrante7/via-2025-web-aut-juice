import { BasePage } from "../pageObjects/basePage";

export class OrderSummaryPage extends BasePage {
static get url() {
    return "/#/";
}
static get PlaceOrderPay(){
    return cy.contains("button", "Place your order and pay")
}

}
