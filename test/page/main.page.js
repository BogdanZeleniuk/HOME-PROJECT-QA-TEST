class MainPage {

    get signUpForGitHubBtn(){
        return $('[class="btn-mktg btn-primary-mktg width-full width-sm-auto"]');
    }

    get signInForGitHubBtn(){
        return $('[class="HeaderMenu-link flex-shrink-0 no-underline"]');
    }

    get mainProfileImgIcon(){
        return $('[class="Header-item position-relative mr-0 d-none d-md-flex"]');
    }

    get yourProfileBtn(){
        return $('[href="/TestAccountQAAutomation"][class="dropdown-item"]');
    }

    get whyGitHubBtn(){
        return $('//summary[contains(text(),"Why GitHub")]/..');
    }

    get exploreBtn(){
        return $('//summary[contains(text(),"Explore")]/..');
    }

    get pricingBtn(){
        return $('//summary[contains(text(),"Pricing")]/..');
    }

    get plansBtn(){
        return $('details [href="/pricing"]');
    }

    get exploreGitHubBtn(){
        return $('[href="/explore"]');
    }

    get searchInput(){
        return $('[class*="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus"]');
    }

    get searchBtn(){
        return $('[class="js-jump-to-badge-search-text-global d-none"]');
    }

    get jumpToSearchResult(){
        return $('#jump-to-results');
    }

    get enterpriseBtn(){
        return $('[href="/enterprise"][class*="HeaderMenu-link"]');
    }

    get careersBtn(){
        return $('[href="/about/careers"]');
    }

    async clickSignUpForGitHubBtn(){
        let signUpForGitHubBtnElement = await this.signUpForGitHubBtn;
        await signUpForGitHubBtnElement.click();
    }

    async clickSignInForGitHubBtn(){
        let signInForGitHubBtnElement = await this.signInForGitHubBtn;
        await signInForGitHubBtnElement.click();
    }

    async clickMainProfileImgIcon(){
        let mainProfileImgIconElement = await this.mainProfileImgIcon;
        await mainProfileImgIconElement.click();
    }

    async clickYourProfileBtn(){
        let yourProfileBtnElement = await this.yourProfileBtn;
        await yourProfileBtnElement.click();
    }

    async mouseOverWhyGitHubBtn(){
        let whyGitHubBtnElement = await this.whyGitHubBtn;
        let XOff = await whyGitHubBtnElement.getLocation('x');
        let YOff = await whyGitHubBtnElement.getLocation('y');
        await whyGitHubBtnElement.moveTo({XOff,YOff});        
    }

    async mouseOverExploreBtn(){
        let exploreBtnElement = await this.exploreBtn;
        let XOff = await exploreBtnElement.getLocation('x');
        let YOff = await exploreBtnElement.getLocation('y');
        await exploreBtnElement.moveTo({XOff,YOff});       
    }

    async mouseOverPricingBtn(){
        let pricingBtnElement = await this.pricingBtn;
        let XOff = await pricingBtnElement.getLocation('x');
        let YOff = await pricingBtnElement.getLocation('y');
        await pricingBtnElement.moveTo({XOff,YOff});        
    }

    async scrollUpExplore(){
        let exploreBtnElement = await this.exploreBtn;
        await exploreBtnElement.scrollIntoView();
    }

    async clickPlansBtn(){
        let plansBtnElement = await this.plansBtn;
        await plansBtnElement.click();
    }

    async clickExploreGitHubBtn(){
        let exploreGitHubBtnElement = await this.exploreGitHubBtn;
        await exploreGitHubBtnElement.click();
    }

    async clickSearchInput(){
        let searchInputElementToClick = await this.searchInput;
        await searchInputElementToClick.click();
    }

    async setSearchInput(){
        let sarchInputElement = await this.searchInput;
        await sarchInputElement.setValue('webdriverio');
    }

    async clickSearchBtn(){
        let searchBtnElement = await this.searchBtn;
        await searchBtnElement.click();
    }

    async clickJumpToSearchResult(){
        let jumpToSearchResultBtn = await this.jumpToSearchResult;
        await  jumpToSearchResultBtn.click();
    }

    async clickEnterpriseBtn(){
        let enterpriseBtnElement = await this.enterpriseBtn;
        await enterpriseBtnElement.click();
    }

    async clickCareersBtn(){
        let careersBtnElement = await this.careersBtn;
        await careersBtnElement.click();
    }
}

module.exports = new MainPage()
