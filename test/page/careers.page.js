class CareersPage {

    get openPositionsBtn(){
        return $('[href="#positions"]');
    }

    async clickOpenPositionsBtn(){
        let openPositionsBtnElement = await this.openPositionsBtn;
        await openPositionsBtnElement.click();
    }

    async getListOfVacanties(){
        let listOfVacantiesArray = await (await $('[class="pb-md-6"]')).$$('[class="float-left f3-mktg text-normal py-4"]');
        
        let listOfVacantiesString = '';
        for(let i=0; i < listOfVacantiesArray.length; i++){
            listOfVacantiesString += await listOfVacantiesArray[i].getText() + '\n';
        }
        return listOfVacantiesString;
    }

    async printListOfVacancies(){
        let listOfVacantiesToPrint = await this.getListOfVacanties();
        console.log('The list of open positions is ' + '\n' + listOfVacantiesToPrint);
    }
}

module.exports = new CareersPage()
