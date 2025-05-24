import { BasePage } from "../pageObjects/basePage";
import { BasketPage } from "../pageObjects/BasketPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { RegistrationPage } from "../pageObjects/registrationPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { CreateAddressPage } from "../pageObjects/CrateAddressPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetACustomerLink.click();
      // Find - how to generate random number in JS
      const andomNumber = Math.floor(Math.random() * 900000) + 100000;
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      const emailAddress = `email_${randomNumber}@ebox.com`;      // Save that email address to some variable
      // Fill in password field and repeat password field with same password
      const password = "ABC123#()";
      RegistrationPage.emailField.type(emailAddress);
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegistrationPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestionOptions
      .contains ("Name of your favorite pet?")
      .click();
      // Fill in answer
      RegistrationPage.answerField.type("Beethoven");
      // Click Register button
      RegistrationPage.registrationButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(emailAddress);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should("contain.text", emailAddress);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon(enter)");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", 'Sour but full of vitamins');
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {

      // Create scenario - Search 500ml and validate Lemon, while having multiple cards
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
  
      });
  
    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Create scenario - Search 500ml and validate cards
      // Click on search icon
      HomePage.searchIcon.click();  
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productInfo.should("contain.text", "Now with even more exotic flavour.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productBox.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productInfo.should("contain.text", "Sweet & tasty!");
      HomePage.closeButton.click();
      });

    // Create scenario - Read a review
    it("Read a review", () => {
      // Create scenario - Read a review
      // Click on search icon
      HomePage.searchIcon.click(); 
      // Search for King
      HomePage.searchField.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productBox.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewsButton.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.productInfo.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
      });

    // Create scenario - Add a review

    it("Add a review", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchField.type("Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productBox.contains("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      HomePage.reviewField.type("Tastes like metal");
      // Click Submit
      HomePage.submitReviewButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewsButton.click();
      // Validate review - "Tastes like metal"
      HomePage.reviewsContent.should("contain.text", "demoTastes like metalthumb_up0demo");
    });


    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate default amount of cards is 12
      HomePage.cardsAmount.should("contain.text", "1 – 12");
  
      // Open paginator dropdown to change items per page
      HomePage.clickPaginator.click();
      
      // Change items per page to 24
      HomePage.changeCardAmount.contains("24").click();
      
      // Validate amount of cards is 24
      HomePage.cardsAmount.should("contain.text", "1 – 24");
  
      // Open paginator dropdown again
      HomePage.clickPaginator.click();
      
      // Change items per page to 36
      HomePage.changeCardAmount.contains("36").click();
      
      // Validate amount of cards is 36
      HomePage.cardsAmount.should("contain.text", "1 – 36");
  });

    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {

    // Click on search icon
    HomePage.searchIcon.click();
    // Search for Girlie
    HomePage.searchField.type('Girlie{enter}');
    // Add to basket "Girlie"
    HomePage.addToBasket.click();
    // Click on "Your Basket" button
    HomePage.showBasket.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.checkoutButton.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    SelectAddressPage.selectAddressButton.contains("United Fakedom").click();
    // Click Continue button
    SelectAddressPage.clickContiuneButton.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.standardButton.click();
    // Click Continue button
    DeliveryMethodPage.ContinueButton.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    PaymentOptionsPage.selectCards.click();
    // Click Continue button
    PaymentOptionsPage.ContinueButton.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    OrderSummaryPage.PlaceOrderPay.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    OrderCompletionPage.Confirmation.should('contain.text', 'Thank you for your purchase!')
  });

    it("Add adress", () => {
    // Create scenario - Add address

    // Click on Account
    HomePage.Account.click();
    // Click on Orders & Payment
    HomePage.OrderPay.click();
    // Click on My saved addresses
    HomePage.SavedAddress.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SavedAddressesPage.addressesButton.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    const Country=("Latvija");
    CreateAddressPage.AddCountry.type(Country)
    const Name=("Zane");
    CreateAddressPage.AddName.type(Name)
    const Mobile=("29323738");
    CreateAddressPage.MobileNumber.type(Mobile)
    const Zipcode=("2140");
    CreateAddressPage.AddZipCode.type(Zipcode)
    const Addres=("Auseklu");
    CreateAddressPage.AddAddress.type(Addres)
    const City=("Valmeira");
    CreateAddressPage.AddCity.type(City)
    const State=("1");
    CreateAddressPage.AddState.type(State)
    // Click Submit button
    CreateAddressPage.SubmitButton.click();
    // Validate that previously added address is visible
    CreateAddressPage.AddressValidation.should("contain.text","2140")
  });

      it.only("Add payment option", () => {
    // Create scenario - Add payment option
    // Click on Account
    HomePage.AccountButton.click();
    // Click on Orders & Payment
    HomePage.OrderPay.click();
    // Click on My payment options
    HomePage.PaymentOtions.click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPaymentMethodsPage.AddNewCard.click();
    // Fill in Name
    const Namee=("Anna");
    SavedPaymentMethodsPage.FillName.type(Namee)
    // Fill in Card Number
    const CardsNum=("5466 3597 2315 1547");
    SavedPaymentMethodsPage.FillCardNumber.type(CardsNum)
    // Set expiry month to 7
    const ExpireCardMonth = '7';
    cy.get('#mat-input-4').select(ExpireCardMonth); 
    // Set expiry year to 2090
    const expireYear = "2090";
    SavedPaymentMethodsPage.CardExpiryDate.select(expireYear)
    // Click Submit button
    SavedPaymentMethodsPage.SubmitButton.click();
    // Validate that the card shows up in the list
    SavedPaymentMethodsPage.CardList.should("contain.text", "Anna")
      });
  });
});