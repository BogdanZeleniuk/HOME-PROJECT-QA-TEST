const signInPage = require('../page/sign-in.page.js');

class JoinPricingPage {

    get userNameInput(){
        return $('#user_login');
    }

    get userEmailInput(){
        return $('#user_email');
    }

    get userPasswordInput(){
        return $('#user_password');
    }

    async setUserNameInput(){
        let userNameInputElemenet = await this.userNameInput;
        let userName = signInPage.userName;
        await userNameInputElemenet.setValue(userName);
    }

    async setEmailInput(){
        let userEmailInput = await this.userEmailInput;
        let userEmail = signInPage.loginEmail;
        await userEmailInput.setValue(userEmail);
    }

    async setPasswordInput(){
        let userPasswordInputElement = await this.userPasswordInput;
        let userPassword = signInPage.passwordToLogin;
        await userPasswordInputElement.setValue(userPassword);
    }
   
}

module.exports = new JoinPricingPage()
