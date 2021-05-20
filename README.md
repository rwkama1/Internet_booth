# Internet Booth

## Description

Calculate the amount to pay in an Internet booth, taking into account that the cost per hour is USD 1.00 and for every 5 hours they give you one hour of free promotion.

## Solution

```Javascript

class Internet
{
    constructor(pnumberofhoursconsumed)
    {
        this.numberofhoursconsumed=pnumberofhoursconsumed;
    }
    amount_to_pay=()=>
    {
        let promotion=0;
        let pay=0;
        promotion=Math.trunc(this.numberofhoursconsumed/5);
        pay=this.numberofhoursconsumed-promotion;
        return {pay,promotion};

    }
   
}

```
## Usage

```Javascript

 let Internet=require("./Internet").Internet;

 let internet=new Internet(15);
 let calc=internet.amount_to_pay();
 console.log("You must pay USD "+calc.pay+" per "+ internet.numberofhoursconsumed+" internet hours");


```