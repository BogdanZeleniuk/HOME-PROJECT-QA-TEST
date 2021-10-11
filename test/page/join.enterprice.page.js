const signInPage = require('../page/sign-in.page.js');

class JoinEnterpricePage {

    get userNameInput(){
        return $('#user_login');
    }

    get userEmailInput(){
        return $('#user_email');
    }

    get userPasswordInput(){
        return $('#user_password');
    }

    get sendProductsCheckbox(){
        return $('#all_emails');
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

    async clickSendProductsCheckbox(){
        let sendProductsCheckboxElement = await this.sendProductsCheckbox;
        if((await sendProductsCheckboxElement.isSelected()) === false)
        await sendProductsCheckboxElement.click();
    } 
}

module.exports = new JoinEnterpricePage()
