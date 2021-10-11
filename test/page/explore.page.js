class ExplorePage {

    get topicsBtn(){
        return $('[href="/topics"][class*="js-selected"]');
    }

    async clickTopicsBtn(){
        let topicsBtnElement = await this.topicsBtn;
        await topicsBtnElement.click();
    }   
}

module.exports = new ExplorePage()
