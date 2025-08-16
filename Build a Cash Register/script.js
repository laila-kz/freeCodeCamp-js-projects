let price = 1.87;
//cid = Cash In Drawer, each denomination with the total amount available in the drawer.
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

// Get references to input and button elements
const cashInput = document.getElementById('cash'); //cashInput: input box for customer cash
const purchaseBtn = document.getElementById('purchase-btn'); //purchaseBtn: button to trigger the transaction.
const changeDueDiv = document.getElementById('change-due'); //changeDueDiv: div where change or status messages are displayed.

let cash = 0; // Will hold the value provided by the customer

// Currency units and values
//Maps denomination names to their numeric value.
const UNIT_AMOUNT = {
  'PENNY': 0.01,
  'NICKEL': 0.05,
  'DIME': 0.1,
  'QUARTER': 0.25,
  'ONE': 1,
  'FIVE': 5,
  'TEN': 10,
  'TWENTY': 20,
  'ONE HUNDRED': 100
};

function checkCashRegister(price, cash, cid) {
  let changeDue = parseFloat((cash - price).toFixed(2)); // Calculate change due, rounded to two decimal places
  let totalCid = parseFloat(cid.reduce((sum, curr) => sum + curr[1], 0).toFixed(2)); // Calculate total cash in drawer, rounded to two decimal places
  let status = ''; // Initialize status variable

  if (changeDue > totalCid) {
    status = 'INSUFFICIENT_FUNDS';
    return { status, change: [] };
  }

  // Sort cid from highest to lowest
  let cidSorted = [...cid].reverse();
  let changeArrForOpen = []; // Array to hold the change to return if status is OPEN
  let changeDueCopy = changeDue;
  //Loops from highest to lowest denomination.
  for (let [unit, amount] of cidSorted) {
    let unitValue = UNIT_AMOUNT[unit]; // Get the value of the current denomination
    let unitToReturn = 0; // Amount of this denomination to return
    // Calculate how many of this denomination can be returned
    while (changeDueCopy >= unitValue && amount > 0) {
      changeDueCopy = parseFloat((changeDueCopy - unitValue).toFixed(2)); // Reduce changeDueCopy by the denomination value, rounded to two decimal places
      amount = parseFloat((amount - unitValue).toFixed(2));
      unitToReturn += unitValue;
    }
    if (unitToReturn > 0) { // If we are returning some of this denomination
      // Add the denomination and the amount to return to the change array
      changeArrForOpen.push([unit, parseFloat(unitToReturn.toFixed(2))]);
    }
  }
  // If changeDueCopy is not zero, cannot return exact change
  if (changeDueCopy > 0) {
    status = 'INSUFFICIENT_FUNDS';
    return { status, change: [] };
  }

  if (changeDue === totalCid) {
    status = 'CLOSED';
    // Only return denominations with non-zero values
    let closedArr = cid.filter(([unit, amount]) => amount > 0);
    return { status, change: closedArr };
  }

  status = 'OPEN';
  return { status, change: changeArrForOpen };
}

// Event listener for button click
purchaseBtn.addEventListener('click', function() {
    cash = Number(cashInput.value);
    if (cash < price) {
      alert('Customer does not have enough money to purchase the item');
      changeDueDiv.innerHTML = '';
      return;
    }
    if (cash === price) {
      changeDueDiv.innerHTML = 'No change due - customer paid with exact cash';
      return;
    }
    const result = checkCashRegister(price, cash, cid);
    if (result.status === 'INSUFFICIENT_FUNDS') {
      changeDueDiv.innerHTML = 'Status: INSUFFICIENT_FUNDS';
      return;
    }
    if (result.status === 'CLOSED') {
      let output = 'Status: CLOSED';
      result.change.forEach(([unit, amount]) => {
        output += ` ${unit}: $${amount.toFixed(2)}`;
      });
      changeDueDiv.innerHTML = output;
      return;
    }
    // Format change for OPEN status
    let output = 'Status: OPEN';
    result.change.forEach(([unit, amount]) => {
      output += ` ${unit}: $${amount.toFixed(2)}`;
    });
    changeDueDiv.innerHTML = output;
});
