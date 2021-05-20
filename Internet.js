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
module.exports={Internet}