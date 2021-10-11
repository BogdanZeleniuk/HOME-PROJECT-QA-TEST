describe('Home project for QA automation', () => {

	const assert = require('assert');
    const mainPage = require('../page/main.page.js');
    const signUpPage = require('../page/sign-up.page.js');
    const signInPage = require('../page/sign-in.page.js');
    const userMainPage = require('../page/user.main.page.js');
    const profilePage = require('../page/profile.page.js');
    const passwordResetPage = require('../page/password-reset.page.js');
    const pricingPage = require('../page/pricing.page.js');
    const joinPricingPage = require('../page/join.pricing.page.js');
    const explorePage = require('../page/explore.page.js');
    const enterprisePage = require('../page/enterprise.page.js');
    const joinEnterpricePage = require('../page/join.enterprice.page.js');
    const enterpriseServerPage = require('../page/enterprise.server.page.js');
    const careersPage = require('../page/careers.page.js');
    const searchResultPage = require('../page/search-result.page.js');

    it('should put random credentials into signUp form', async () => {

        await browser.url('https://github.com/');

        await mainPage.clickSignUpForGitHubBtn();

        const newTitleToSignUpPage = 'Join GitHub · GitHub';
        let currentTitleToCheck = await browser.getTitle();
        assert.strictEqual(newTitleToSignUpPage, currentTitleToCheck);
        
        await browser.waitUntil(async function(){
            const emailContainerElement = await $('#email-container');
            let isVisible = await emailContainerElement.isDisplayed();
            return await isVisible;
        }, 5000, "Exception while signing up for GitHub");
    
        await signUpPage.setEmail();
        await browser.pause(500);
        await signUpPage.clickContinueBtnFirst();

        await signUpPage.setPassword();
        await browser.pause(500);
        await signUpPage.clickContinueBtnSecond();

        await signUpPage.setUserName();
        await browser.pause(500);
        await signUpPage.clickContinueBtnThird();

        await signUpPage.setNoToProductOfferToGet();
        await browser.pause(500);
        await signUpPage.clickContinueBtnFourth();

        const verifyLabelLocator = await $('[class="text-mono text-bold signup-text-prompt mt-4"]');
        let verifyLabelLocatorIsDisplayed = verifyLabelLocator.isDisplayedInViewport();    
        assert.ok(verifyLabelLocatorIsDisplayed);
    })

    it('should sign in an already created user with certain email and password', async () => {

        await browser.url('https://github.com/');

        await mainPage.clickSignInForGitHubBtn();

        await signInPage.setEmail();
        await browser.pause(500);

        await signInPage.setPassword();
        await browser.pause(500);

        await signInPage.clickSignInBtn();

        await mainPage.clickMainProfileImgIcon();
        await browser.pause(500);
        await mainPage.clickYourProfileBtn();

        let newUrlForSignedInUser = 'https://github.com/TestAccountQAAutomation';
        let currentTitleToCheck = await browser.getUrl();
        assert.strictEqual(newUrlForSignedInUser, currentTitleToCheck);

        await userMainPage.clickUserMainInfoIcon();
        await browser.pause(500);

        await profilePage.clickUserEmailFromProfile();
        await browser.pause(500);

        let userSelectedEmail = await (await profilePage.userSelectedEmailFromProfileBtnName()).trim();
        assert.strictEqual(userSelectedEmail, 'TestAccountQAAutomation@mail.ru');

        await signInPage.clickUserProfileBtn();
        await signInPage.clickUserLogOutBtn();
    })

    it('should show the error message or sent new password on email after putting data into forgotPassword input', async () => {

        await browser.url('https://github.com/');

        await mainPage.clickSignInForGitHubBtn();
        await signInPage.clickForgotPasswordLabel();

        await passwordResetPage.setEmailInputToReset('wrongEmailAdd');
        await browser.pause(1000);

        await passwordResetPage.setEmailInputToReset('');
        await browser.pause(1000);

        await passwordResetPage.setEmailInputToReset(signInPage.loginEmail);
        await browser.pause(1000);
    })

    it('should check mouseOver event on menu elements', async () => {

        await browser.url('https://github.com/');

        let verifyWhyGitHubMenu = await $('[href="/features"][class*="link"]');
        let verifyExploreMenu = await $('[href="/explore"]');
        let verifyPricingMenu = await $('[href="/pricing"][class*="Bump-link--hover"]');

        await mainPage.mouseOverExploreBtn();
        await browser.pause(2000);
        let verifyExploreIsDisplayed = verifyExploreMenu.isDisplayedInViewport();
        assert.ok(verifyExploreIsDisplayed);

        await mainPage.mouseOverPricingBtn();
        await browser.pause(2000);
        let verifyPricingIsDisplayed = verifyPricingMenu.isDisplayedInViewport();
        assert.ok(verifyPricingIsDisplayed);

        await mainPage.mouseOverWhyGitHubBtn();
        await browser.pause(2000);
        let verifyWhyGitHubMenuIsDisplayed = verifyWhyGitHubMenu.isDisplayedInViewport();
        assert.ok(verifyWhyGitHubMenuIsDisplayed);
    })

    it('should redirect to pricing page, put credentials into inputs and work with "Explore" menu item ', async () => {

        await browser.url('https://github.com/');
        let otherElementToPoint = await $('[class="h1-mktg color-text-white mb-3 position-relative z-2"]');
        await otherElementToPoint.moveTo();

        await mainPage.mouseOverPricingBtn();
        await browser.pause(2000);
        await mainPage.clickPlansBtn();

        await pricingPage.clickJoinForFreeBtn();

        await joinPricingPage.setUserNameInput();
        await browser.pause(500);

        await joinPricingPage.setEmailInput();
        await browser.pause(500);

        await joinPricingPage.setPasswordInput();
        await browser.pause(500);
        await browser.back();

        await mainPage.scrollUpExplore();

        //let otherElementToPoint = await $('[class="h1-mktg color-text-white mb-3 position-relative z-2"]');
        //await otherElementToPoint.moveTo();

        await mainPage.mouseOverExploreBtn();
        await browser.pause(2000);
        await mainPage.clickExploreGitHubBtn();

        await explorePage.clickTopicsBtn();
        let topicLabelIsVisible = await (await $('[class="h1"]')).isDisplayedInViewport();
        assert.ok(topicLabelIsVisible); 
    })

    it('should check how search field works in GitHub', async () => {

        await browser.url('https://github.com/');

        await mainPage.clickSearchInput();
        await browser.pause(500);
        await mainPage.setSearchInput();
        await browser.pause(500);

        await mainPage.clickJumpToSearchResult();
        await browser.pause(500);

        await searchResultPage.clickTypescriptBtn();
        await searchResultPage.clickFirstResultFromTypeScript();

        let newUrl = await browser.getUrl();
        let hasUrlWdioWord = await newUrl.indexOf('webdriverio');

        let hasUrlWdioWordResult = false;
        if(hasUrlWdioWord > -1)
        hasUrlWdioWordResult = true;

        assert.ok(hasUrlWdioWordResult);
    })

    it('should check the work of enterprice redirection from GitHub', async () => {

        await browser.url('https://github.com/');

        await mainPage.clickEnterpriseBtn();
        await enterprisePage.clickStartFreeTrialBtn();
        await browser.pause(500);

        let enterpriseCloud = await $('[class="currency-container col-12 signup-plan-column js-details-container mr-sm-2 "]');
        await enterpriseCloud.click();

        await joinEnterpricePage.setUserNameInput();
        await browser.pause(500);

        await joinEnterpricePage.setEmailInput();
        await browser.pause(500);

        await joinEnterpricePage.setPasswordInput();
        await browser.pause(500);

        await joinEnterpricePage.clickSendProductsCheckbox();
        await browser.pause(500);
        
        await browser.back();
        await browser.pause(500);
    })

    it('should check the work of enterprise cloud redirection on GitHub', async () => {

        await browser.url('https://github.com/organizations/enterprise_plan?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise');
    
        let enterpriseServer = await $('[class="currency-container col-12 signup-plan-column js-details-container"]');
        await enterpriseServer.click();

        await enterpriseServerPage.setName();
        await browser.pause(500);

        await enterpriseServerPage.setCompany();
        await browser.pause(500);

        await enterpriseServerPage.setWorkEmail();
        await browser.pause(500);

        await enterpriseServerPage.setPhoneNumber();
        await browser.pause(500);

        await enterpriseServerPage.clickInstalationType();
        await browser.pause(500);

        await enterpriseServerPage.clickQuestionsAboutGitHub();
        await browser.pause(500);

        await enterpriseServerPage.setListOfQuestions();
        await browser.pause(500);

        await enterpriseServerPage.clickAcceptationTermsOfUse();
        await browser.pause(500);
    })

    it('should print the list of vacanties into console terminal', async () => {

        await browser.url('https://github.com/');

        await mainPage.clickCareersBtn();
        await careersPage.clickOpenPositionsBtn();
        await careersPage.printListOfVacancies();
    })
});