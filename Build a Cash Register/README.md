## Cash Register App

This project is a **Cash Register application** built using HTML, CSS, and JavaScript. The app calculates the change owed to a customer based on the item price, the cash provided, and the cash available in the cash drawer. It also handles different scenarios and displays appropriate messages to the user.

## Features

* Input fields for **item price** and **cash received**.
* Editable **cash drawer** amounts for each denomination.
* Automatic **calculation of change due**.
* **Breakdown of change** by denomination.
* Messages for different scenarios:

  * Exact payment (no change needed)
  * Insufficient payment
  * Insufficient funds in the cash drawer
  * Successful change given
* Reset button to restore the cash drawer to default values.

## Technology Stack

* **HTML**: Structure of the app
* **CSS**: Styling and layout
* **JavaScript**: Logic for calculating change, handling the cash drawer, and updating the UI

## How to Use

1. Open `index.html` in a web browser.
2. Enter the **item price** and **cash provided**.
3. Adjust the cash drawer amounts if needed.
4. Click the **Take Payment** button to calculate and display the change.
5. Click the **Reset Drawer** button to restore default cash amounts.

## Cash Denominations

The app supports the following denominations:

* PENNY (\$0.01)
* NICKEL (\$0.05)
* DIME (\$0.10)
* QUARTER (\$0.25)
* ONE (\$1.00)
* FIVE (\$5.00)
* TEN (\$10.00)
* TWENTY (\$20.00)
* ONE HUNDRED (\$100.00)

## Scenarios Handled

* **Exact Payment**: When the cash provided equals the item price.
* **Insufficient Payment**: When the cash provided is less than the item price.
* **Insufficient Funds in Drawer**: When the drawer does not have enough cash to provide the correct change.
* **Successful Change**: When the drawer can provide the correct change.

