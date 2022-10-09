class LandingPage
{
    

getUsername()

{

    return cy.contains('Phone number')
}


getPassword()
{

    return cy.contains('Password')
}

getLogin()
{
    return cy.contains('Log In')
}

getError()
{
    return cy.get('[data-testid=login-error-message]')
    
}

getTypeUsername()
{
    const username = "test";
    return username
}



}

export default LandingPage;