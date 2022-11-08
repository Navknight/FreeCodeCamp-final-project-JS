function checkCashRegister(price, cash, cid) {
    const denomination = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }
    let cashremaining = 0;
    for (let element of cid) {
        cashremaining += element[1];
    }
    cashremaining = cashremaining.toFixed(2);
    let change = cash - price;
    const a = [];
    if (change > cashremaining) {
        return { status: "INSUFFICIENT_FUNDS", change: a };
    }
    else if (change.toFixed(2) === cashremaining) {
        return { status: "CLOSED", change: cid };
    }
    else {
        cid = cid.reverse();
        for (let elem of cid) {
            let temp = [elem[0], 0];
            while (change >= denomination[elem[0]] && elem[1] > 0) {
                temp[1] += denomination[elem[0]];
                elem[1] -= denomination[elem[0]];
                change -= denomination[elem[0]];
                change = change.toFixed(2);
            }
            if (temp[1] > 0) {
                a.push(temp);
            }
        }
    }
    if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: a };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);