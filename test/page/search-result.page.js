class SearchResultPage {

    get typescriptLeanguageBtn(){
        return $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]');
    }

    async clickTypescriptBtn(){
        let typescriptBtnElement = await this.typescriptLeanguageBtn;
        await typescriptBtnElement.click();
    }   

    async clickFirstResultFromTypeScript(){

        let searchArrayFirstElement = await (await (await $('[class="repo-list"]')).$$('[class="v-align-middle"]'))[0];
        await searchArrayFirstElement.click();
    }
}

module.exports = new SearchResultPage()
