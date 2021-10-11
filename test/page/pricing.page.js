class PricingPage {

    get joinForFreeBtn(){
        return $('[href="/join?plan=free&ref_cta=Join%2520for%2520free&ref_loc=cards&ref_page=%2Fpricing&source=pricing-card-free"]');
    }

    async clickJoinForFreeBtn(){
        let joinForFreeBtnElement = await this.joinForFreeBtn;
        await joinForFreeBtnElement.click();
    }
   
}

module.exports = new PricingPage()
