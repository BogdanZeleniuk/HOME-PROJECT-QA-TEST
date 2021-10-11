class PasswordResetPage {

    get emailInputToReset(){
        return $('#email_field');
    }

    async setEmailInputToReset(value){
        let emailInputElementResetPasswordPage = await this.emailInputToReset;
        await emailInputElementResetPasswordPage.setValue(value);
    }
   
}

module.exports = new PasswordResetPage()
