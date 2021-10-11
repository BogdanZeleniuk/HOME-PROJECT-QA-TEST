class SignInPage {

    userName = 'TestAccountQAAutomatio';
    loginEmail = 'TestAccountQAAutomation@mail.ru';
    passwordToLogin = 'noitamotua12345';

    get emailInput(){
        return $('#login_field');
    }

    get passwordInput(){
        return $('#password');
    }

    get forgotPasswordLabel(){
        return $('[href="/password_reset"]');
    }

    get signInBtn(){
        return $('[class="btn btn-primary btn-block"]');
    }

    get userProfileBtn(){
        return $('[class="details-overlay details-reset js-feature-preview-indicator-container"]');
    }

    get userLogOutBtn(){
        return $('[class="logout-form"]');
    }

    async setEmail(){
        let emailInputElementSignInPage = await this.emailInput;
        await emailInputElementSignInPage.addValue(this.loginEmail);
    }    

    async setPassword(){
        let passwordlInputElementSignInPage = await this.passwordInput;
        await passwordlInputElementSignInPage.addValue(this.passwordToLogin);
    }

    async clickSignInBtn(){
        let clickSignInBtnElement = await this.signInBtn;
        await clickSignInBtnElement.click();
    }

    async clickForgotPasswordLabel(){
        let clickforgotPasswordLabelElement = await this.forgotPasswordLabel;
        await clickforgotPasswordLabelElement.click();
    }

    async clickUserProfileBtn(){
        let userProfileBtnElement = await this.userProfileBtn;
        await userProfileBtnElement.click();
    }

    async clickUserLogOutBtn(){
        let userLogOutBtnElement = await this.userLogOutBtn;
        await userLogOutBtnElement.click();
    }
}

module.exports = new SignInPage()