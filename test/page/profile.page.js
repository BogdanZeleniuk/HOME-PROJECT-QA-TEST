class ProfilePage {

    get userEmailFromProfileBtn(){
        return $('[class="js-selected-navigation-item menu-item"][href="/settings/emails"]');
    }

    get userSelectedEmailFromProfileBtn(){
        return $('#primary_email_select');
    }

    async clickUserEmailFromProfile(){
        let userEmailFromProfileBtnElement = await this.userEmailFromProfileBtn;
        await userEmailFromProfileBtnElement.click();
    }

    async userSelectedEmailFromProfileBtnName(){
        let userSelectedEmail = await this.userSelectedEmailFromProfileBtn;
        return await userSelectedEmail.getText();
    }
   
}

module.exports = new ProfilePage()
