const signUpPage = require('../page/sign-up.page.js');

class EnterpriseServerPage {

    get name(){
        return $('#contact_request_name');
    }

    get company(){
        return $('#contact_request_organization_name');
    }

    get workEmail(){
        return $('#contact_request_email');
    }

    get phoneNumber(){
        return $('#contact_request_phone');
    }

    get instalationType(){
        return $('#contact_request_instance_type_aws');
    }

    get questionsAboutGitHub(){
        return $('#questions_yes');
    }

    get listOfQuestions(){
        return $("#questions-list");
    }

    get acceptationTermsOfUse(){
        return $('#contact_request_agreed_to_terms');
    }

    async setName(){
        let nameElemenet = await this.name;
        const randomName = signUpPage.randomValue;
        await nameElemenet.setValue(randomName);
    }

    async setCompany(){
        let companyElemenet = await this.company;
        const randomCompany = signUpPage.randomValue;
        await companyElemenet.setValue(randomCompany);
    }

    async setWorkEmail(){
        let workEmailElemenet = await this.workEmail;
        const randomWorkEmail = signUpPage.randomEmail;
        await workEmailElemenet.setValue(randomWorkEmail);
    }

    async setPhoneNumber(){
        let phoneNumberElemenet = await this.phoneNumber;
        const randomPhone = signUpPage.randomNumbersOnly;
        await phoneNumberElemenet.setValue(randomPhone);
    }

    async setListOfQuestions(){
        let listOfQuestionsElement = await this.listOfQuestions;
        const randomText = signUpPage.randomValue;
        await listOfQuestionsElement.setValue(randomText);
    }

    async clickInstalationType(){
        let instalationTypeElement = await this.instalationType;
        if((await instalationTypeElement.isSelected()) === false)
        await instalationTypeElement.click();
    } 

    async clickQuestionsAboutGitHub(){
        let questionsAboutGitHubElement = await this.questionsAboutGitHub;
        if((await questionsAboutGitHubElement.isSelected()) === false)
        await questionsAboutGitHubElement.click();
    } 

    async clickAcceptationTermsOfUse(){
        let acceptationTermsOfUseElement = await this.acceptationTermsOfUse;
        if((await acceptationTermsOfUseElement.isSelected()) === false)
        await acceptationTermsOfUseElement.click();
    }
}

module.exports = new EnterpriseServerPage()
