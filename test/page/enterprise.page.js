class EnterprisePage {

    get startFreeTrialBtn(){
        return $('[class="btn-mktg btn-transparent"][href="/organizations/enterprise_plan?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise"]');
    }

    async clickStartFreeTrialBtn(){
        let startFreeTrialBtnElement = await this.startFreeTrialBtn;
        await startFreeTrialBtnElement.click();
    }   
}

module.exports = new EnterprisePage()
