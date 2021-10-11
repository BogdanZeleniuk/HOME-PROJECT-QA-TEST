class UserMainPage {

    get userMainInfoIcon(){
        return $('[href="https://github.com/account"]');
    }

    async clickUserMainInfoIcon(){
        let userMainInfoIconElement = await this.userMainInfoIcon;
        await userMainInfoIconElement.click();
    }

}

module.exports = new UserMainPage()
