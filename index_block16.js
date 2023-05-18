// You have been hired by a pharmaceutical startup as a junior developer. Things are busy and they need you to start right away. To encourage customer retention, they have been reworking their checkout system to include two different types of discounts.

// Using the following criteria, your first assignment is to create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.

function totalCost (pricePerRefill, refills){
    return pricePerRefill * refills;
}

function discount(money){
const amountToRemove=money *.25

return money-amountToRemove
}

const couponDiscount= (money) =>{
    return money-10
}
const checkOut=(obj)=>{
    let totalMoney= totalCost(obj.pricePerRefill, obj.refills)

if(obj.subscription===true){
    totalMoney=discount(totalMoney)
}

if(obj.coupon){
    totalMoney=couponDiscount(totalMoney)
}
console.log(`Your grand total is $${totalMoney}`);
}

checkOut (timmy)
checkOut (sarah)
checkOut (rocky)
