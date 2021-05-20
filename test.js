 let Internet=require("./Internet").Internet;

 let internet=new Internet(15);
 let calc=internet.amount_to_pay();
 console.log("You must pay USD "+calc.pay+" per "+ internet.numberofhoursconsumed+" internet hours");


