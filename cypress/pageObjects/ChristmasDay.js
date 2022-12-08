class ChristmasDay{
    
    getSearchField(){
        return cy.get("input[title='Search']")
    }

    getChristmasDate(){
        return cy.get('div[data-attrid*="holiday:dates"] >div >div')
    }
}
export default ChristmasDay