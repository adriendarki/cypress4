describe('Authentification réussie', () => {

    it('On se connecte et on entre les bonnes infos',() => {
      cy.visit("https://www.backmarket.fr")
      cy.get('a[href*="register"]').click()
      cy.wait(3000)
      cy.get('input[id="email-signin"]').type('test@yopmail.com')
      cy.get('input[data-test="input-field-input"]').first().type('WCSforever13') 
      cy.get('[data-test=submit-button-login]').click()
      cy.get('.vdiN-eiE8V54yQfNIbc7f').should('contain', 'Mes commandes')
    })
  })
describe('On se connecte mais les infos sont erronées', () => {
    it('Login with wrong credentials',() => {
        cy.visit("https://www.backmarket.fr")
        cy.get('a[href*="register"]').click()
        cy.wait(3000)
        cy.get('input[id="email-signin"]').type('test@yopmail.com')
        cy.get('input[data-test="input-field-input"]').first().type('WCSWCS')
        cy.get('[data-test=submit-button-login]').click()
        cy.get('[data-test=login-credential-error]').should('contain', 'Mauvaise combinaison email/mot de passe')
  })
})