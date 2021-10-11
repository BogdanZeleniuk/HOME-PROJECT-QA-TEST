class SignUpPage {

    get emailInput(){
        return $('#email');
    }

    get passwordInput(){
        return $('#password');
    }

    get userNameInput(){
        return $('#login');
    }

    get productOfferToGetInput(){
        return $('#opt_in');
    }

    get createAccontBtn(){
        return $('[class="form-control signup-submit-button width-full py-2 js-octocaptcha-form-submit"]'); 
    }

    get randomValue(){

        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let str = '';
        for (let i = 1; i <= 20; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
    };

    get randomNumbersOnly(){

        let chars = '0123456789';

        let str = '';
        for (let i = 1; i <= 9; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
    };

    get randomEmail(){
        return (this.randomValue + '@gmail.com');
    }

    async continueBtnAfterEmail(){
        return await $('[class*="js-continue-button signup"][data-optimizely-event="click.signup_continue.email"]');
    }

    async continueBtnAfterPassword(){
        return await $('[class*="js-continue-button signup"][data-optimizely-event="click.signup_continue.password"]');
    }

    async continueBtnAfterUserName(){
        return await $('[class*="js-continue-button signup"][data-optimizely-event="click.signup_continue.username"]');
    }

    async continueBtnAfterProductQuestion(){
        return await $('[class*="js-continue-button signup"][data-optimizely-event="click.signup_continue.opt-in"]');
    }

    async setEmail(){
        let emailInputElement = await this.emailInput;
        let randomEmailValue = await this.randomEmail;
        await emailInputElement.addValue(randomEmailValue);
    }    

    async setPassword(){
        let passwordlInputElement = await this.passwordInput;
        let randomPasswordlValue = await this.randomValue;
        await passwordlInputElement.addValue(randomPasswordlValue);
    }

    async setUserName(){
        let userNamelInputElement = await this.userNameInput;
        let randomUserNamelValue = this.randomValue;
        await userNamelInputElement.addValue(randomUserNamelValue);
    }

    async setNoToProductOfferToGet(){
        let productOfferToGetInputElement = await this.productOfferToGetInput;
        await productOfferToGetInputElement.addValue('n');
    }

    async clickContinueBtnFirst(){
        let firstContinueBtn = await this.continueBtnAfterEmail();
        await firstContinueBtn.click();
    }

    async clickContinueBtnSecond(){
        let secondContinueBtn = await this.continueBtnAfterPassword();
        await secondContinueBtn.click();
    }
    async clickContinueBtnThird(){
        let thirdContinueBtn = await this.continueBtnAfterUserName();
        await thirdContinueBtn.click();
    }
    async clickContinueBtnFourth(){
        let fourthContinueBtn = await this.continueBtnAfterProductQuestion();
        await fourthContinueBtn.click();
    }
}

module.exports = new SignUpPage()