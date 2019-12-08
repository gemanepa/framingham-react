/* eslint-disable */
/// <reference types="Cypress" />

context('Navigation | Elinks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be linking to android app', () => {
    cy.fixture('navselectors').then((object) => {
      const selectorBtn = cy.get(object.static['nb_androidbtn']);
      selectorBtn.should('be.visible')
      selectorBtn.contains('Android App')

      const selectorLink = cy.get(object.static['nb_androidlink']);
      selectorLink.should('have.attr', 'target', '_blank');
      selectorLink.should('have.attr', 'rel', 'noopener noreferrer');
      selectorLink.should('have.attr', 'href', 'https://play.google.com/store/apps/details?id=com.gemanepa.framingham');
    });
  });
  
  it('should be linking to Wikipedia', () => {
    cy.fixture('navselectors').then((object) => {
      const selectorBtn = cy.get(object.static['nb_elinksbtn']);
      selectorBtn.should('be.visible')
      selectorBtn.contains('Elinks')

      selectorBtn.click({force: true})

      const selectorLink = cy.get(object.static['nb_elinkswiki']);
      selectorLink.should('exist')
      selectorLink.should('have.attr', 'href', 'https://en.wikipedia.org/wiki/Framingham_Heart_Study');
      selectorLink.should('have.attr', 'title', 'Wikipedia');
      selectorLink.should('have.attr', 'target', '_blank');
      selectorLink.should('have.attr', 'rel', 'noopener noreferrer');
      selectorLink.contains('Wikipedia')
    });
  });

  it('should be linking to FHS', () => {
    cy.fixture('navselectors').then((object) => {
      const selectorBtn = cy.get(object.static['nb_elinksbtn']);
      selectorBtn.should('be.visible')
      selectorBtn.contains('Elinks')

      selectorBtn.click({force: true})

      const selectorLink = cy.get(object.static['nb_elinksfh']);
      selectorLink.should('exist')
      selectorLink.should('have.attr', 'href', 'https://www.framinghamheartstudy.org/');
      selectorLink.should('have.attr', 'title', 'Framingham Heart Study');
      selectorLink.should('have.attr', 'target', '_blank');
      selectorLink.should('have.attr', 'rel', 'noopener noreferrer');
      selectorLink.contains('FHS')
    });
  });

  it('should be linking to NIH', () => {
    cy.fixture('navselectors').then((object) => {
      const selectorBtn = cy.get(object.static['nb_elinksbtn']);
      selectorBtn.should('be.visible')
      selectorBtn.contains('Elinks')

      selectorBtn.click({force: true})

      const selectorLink = cy.get(object.static['nb_elinksnih']);
      selectorLink.should('exist')
      selectorLink.should('have.attr', 'href', 'https://www.nhlbi.nih.gov/science/framingham-heart-study-fhs/');
      selectorLink.should('have.attr', 'title', 'National Institutes of Health');
      selectorLink.should('have.attr', 'target', '_blank');
      selectorLink.should('have.attr', 'rel', 'noopener noreferrer');
      selectorLink.contains('NIH')
    });
  });

  it('should be linking to CCS', () => {
    cy.fixture('navselectors').then((object) => {
      const selectorLink = cy.get(object.static['ci_elinksccs']);
      selectorLink.should('be.visible')
      selectorLink.should('have.attr', 'href', 'https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf');
      selectorLink.should('have.attr', 'target', '_blank');
      selectorLink.should('have.attr', 'rel', 'noopener noreferrer');
      selectorLink.contains('Using 2017 Canadian CardioVascular Society Guidelines')
    });
  });
});
