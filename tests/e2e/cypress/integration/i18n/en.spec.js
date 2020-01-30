/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('i18n | EN', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('/en');
  });

  it('Should have EN sentences in Head component', () => {
    cy.fixture('i18nEN').then((translations) => {
      cy.get('head title').should('contain', translations.head.title);
      cy.get('head meta[name="application-name"]').should('have.attr', 'content', translations.head.appname);
      cy.get('head meta[name="description"]').should('have.attr', 'content', translations.head.description);
      cy.get('head meta[name="keywords"]').should('have.attr', 'content', translations.head.keywords);
    });
  });


  it('Should have EN sentences in Header component', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nEN').then((translations) => {
        cy.get(object.i18n.appHeader_title).first().contains(translations.body.navbar_title.split(' ')[0]);
        cy.get(object.i18n.appHeader_title).last().contains(translations.body.navbar_title.split(' ')[1]);
        cy.get(object.i18n.subheader).contains(translations.body.brief_description);
      });
    });
  });

  it('Should have EN sentences in NavButtons component', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nEN').then((translations) => {
        cy.get(object.static.nb_infobtn).click({ force: true });

        cy.get(object.static.nb_calcbtn).contains(translations.body.calculate);

        cy.viewport('iphone-6');
        cy.reload();
        cy.get(object.static.nb_calcbtn).contains(translations.body.calculate);
      });
    });
  });

  it('Should have EN sentences in CalcInput component header & subheader link', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nEN').then((translations) => {
        cy.get(object.i18n.mc_calcheader).contains(translations.body.risk_score_calculator);
        cy.get(object.static.ci_elinksccs).contains(translations.body.using_guidelines);
      });
    });
  });

  it('Should have EN sentences in Form component input labels', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nEN').then((translations) => {
        cy.get(object.i18n.form_gender_female).contains(translations.body.woman);
        cy.get(object.i18n.form_gender_male).contains(translations.body.man);
        cy.get(object.i18n.form_label_age).contains(translations.body.age);
        cy.get(object.i18n.form_label_hdl).contains(translations.body.colesterol_hdl);
        cy.get(object.i18n.form_label_ldl).contains(translations.body.colesterol_ldl);
        cy.get(object.i18n.form_label_totaldl).contains(translations.body.colesterol_total);
        cy.get(object.i18n.form_label_ta).contains(translations.body.arterial_pression);
        cy.get(object.i18n.form_label_wt).contains(translations.body.waist_circumference);
        cy.get(object.i18n.form_treatment_checkbox).contains(translations.body.hypertension_in_treatment);
        cy.get(object.i18n.form_smoking_checkbox).contains(translations.body.smoking);
        cy.get(object.i18n.form_diabetes_checkbox).contains(translations.body.diabetes);
      });
    });
  });

  it('Should have EN sentences in Results component type low', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nEN').then((translations) => {
        cy.get(object.static.form_gender_female).click({ force: true });
        cy.get(object.static.form_age_select).click({ force: true });
        cy.get(object.static.form_age_menuitem).click({ force: true });
        cy.get(object.static.form_hdl_select).click({ force: true });
        cy.get(object.static.form_hdl_menuitem).click({ force: true });
        cy.get(object.static.form_ldl_select).click({ force: true });
        cy.get(object.static.form_ldl_menuitem).click({ force: true });
        cy.get(object.static.form_totaldl_select).click({ force: true });
        cy.get(object.static.form_totaldl_menuitem).click({ force: true });
        cy.get(object.static.form_ta_select).click({ force: true });
        cy.get(object.static.form_ta_menuitem).click({ force: true });
        cy.get(object.static.form_wt_select).click({ force: true });
        cy.get(object.static.form_wt_menuitem).click({ force: true });
        cy.get(object.static.form_treatment_checkbox).click({ force: true });
        cy.get(object.static.form_smoking_checkbox).click({ force: true });
        cy.get(object.static.form_diabetes_checkbox).click({ force: true });
        cy.get(object.static.form_sendbtn).click({ force: true });

        cy.get(object.i18n.results_title).contains(translations.body.results);
        cy.get(object.i18n.results_score).contains(`${translations.body.score}: 4`);
        cy.get(object.i18n.results_cvd).contains(`${translations.body.cvd}: 2.4%`);
        cy.get(object.i18n.results_cvd).contains(translations.body.cvdexplanation);
        cy.get(object.i18n.results_heartage).contains(`${translations.body.heartage}: 39`);
        cy.get(object.i18n.results_risk).contains(`${translations.body.risk}: ${translations.body.low}`);
        cy.get(object.i18n.results_treatment).contains(translations.body.treatment);
        cy.get(object.i18n.results_treatment).contains(translations.body.patient_not_requires_treatment);
        cy.get(object.i18n.results_treatment).contains(translations.body.statins_only_indicated);
        cy.get(object.i18n.results_treatment).contains(translations.body.aterosclerosis);
        cy.get(object.i18n.results_treatment).contains(translations.body.abdominal_aortic_aneurysm);
        cy.get(object.i18n.results_treatment).contains(translations.body.chronic_kidney_disease);
      });
    });
  });

  it('Should have EN sentences in Results component type intermediate with risk factors (1)', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nEN').then((translations) => {
        cy.get(object.static.form_gender_male).click({ force: true });
        cy.get(object.static.form_age_select).click({ force: true });
        cy.get(object.i18n.form_age_menuitem_50_54).click({ force: true });
        cy.get(object.static.form_hdl_select).click({ force: true });
        cy.get(object.i18n.form_hdl_menuitem_35_45).click({ force: true });
        cy.get(object.static.form_ldl_select).click({ force: true });
        cy.get(object.i18n.form_ldl_menuitem_80).click({ force: true });
        cy.get(object.static.form_totaldl_select).click({ force: true });
        cy.get(object.i18n.form_totaldl_menuitem_158_200).click({ force: true });
        cy.get(object.static.form_ta_select).click({ force: true });
        cy.get(object.i18n.form_ta_menuitem_120_129).click({ force: true });
        cy.get(object.static.form_wt_select).click({ force: true });
        cy.get(object.i18n.form_wt_menuitem_morethan102).click({ force: true });
        cy.get(object.static.form_smoking_checkbox).click({ force: true });
        cy.get(object.static.form_diabetes_checkbox).click({ force: true });
        cy.get(object.static.form_sendbtn).click({ force: true });

        cy.get(object.i18n.results_title).contains(translations.body.results);
        cy.get(object.i18n.results_score).contains(`${translations.body.score}: 14`);
        cy.get(object.i18n.results_cvd).contains(`${translations.body.cvd}: 18.4%`);
        cy.get(object.i18n.results_cvd).contains(translations.body.cvdexplanation);
        cy.get(object.i18n.results_heartage).contains(`${translations.body.heartage}: 68`);
        cy.get(object.i18n.results_risk).contains(`${translations.body.risk}: ${translations.body.intermediate}`);
        cy.get(object.i18n.results_treatment).contains(translations.body.treatment);
        cy.get(object.i18n.results_treatment).contains(`${translations.body.treatment_intermediate_hasfactors} (${translations.body.smoking}, ${translations.body.diabetes}, ${translations.body.waist_circumference}) ${translations.body.so_treatment_is_recommended}`);
      });
    });
  });

  it('Should have EN sentences in Results component type intermediate with risk factors (2)', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nEN').then((translations) => {
        cy.get(object.static.form_gender_male).click({ force: true });
        cy.get(object.static.form_age_select).click({ force: true });
        cy.get(object.i18n.form_age_menuitem_50_54).click({ force: true });
        cy.get(object.static.form_hdl_select).click({ force: true });
        cy.get(object.static.form_hdl_menuitem).click({ force: true });
        cy.get(object.static.form_ldl_select).click({ force: true });
        cy.get(object.static.form_ldl_menuitem).click({ force: true });
        cy.get(object.static.form_totaldl_select).click({ force: true });
        cy.get(object.i18n.form_totaldl_menuitem_240_278).click({ force: true });
        cy.get(object.static.form_ta_select).click({ force: true });
        cy.get(object.static.form_ta_menuitem).click({ force: true });
        cy.get(object.static.form_wt_select).click({ force: true });
        cy.get(object.i18n.form_wt_menuitem_lessthan102).click({ force: true });
        cy.get(object.static.form_sendbtn).click({ force: true });

        cy.get(object.i18n.results_title).contains(translations.body.results);
        cy.get(object.i18n.results_score).contains(`${translations.body.score}: 11`);
        cy.get(object.i18n.results_cvd).contains(`${translations.body.cvd}: 11.2%`);
        cy.get(object.i18n.results_cvd).contains(translations.body.cvdexplanation);
        cy.get(object.i18n.results_heartage).contains(`${translations.body.heartage}: 57`);
        cy.get(object.i18n.results_risk).contains(`${translations.body.risk}: ${translations.body.intermediate}`);
        cy.get(object.i18n.results_treatment).contains(translations.body.treatment);
        cy.get(object.i18n.results_treatment).contains(`${translations.body.treatment_intermediate_hasfactors} (${translations.body.low} HDL) ${translations.body.so_treatment_is_recommended}`);
      });
    });
  });

  it('Should have EN sentences in Results component type intermediate with high LDL', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nEN').then((translations) => {
        cy.get(object.static.form_gender_male).click({ force: true });
        cy.get(object.static.form_age_select).click({ force: true });
        cy.get(object.i18n.form_age_menuitem_60_64).click({ force: true });
        cy.get(object.static.form_hdl_select).click({ force: true });
        cy.get(object.i18n.form_hdl_menuitem_35_45).click({ force: true });
        cy.get(object.static.form_ldl_select).click({ force: true });
        cy.get(object.i18n.form_ldl_menuitem_135).click({ force: true });
        cy.get(object.static.form_totaldl_select).click({ force: true });
        cy.get(object.i18n.form_totaldl_menuitem_158_200).click({ force: true });
        cy.get(object.static.form_ta_select).click({ force: true });
        cy.get(object.i18n.form_ta_menuitem_120_129).click({ force: true });
        cy.get(object.static.form_wt_select).click({ force: true });
        cy.get(object.i18n.form_wt_menuitem_lessthan102).click({ force: true });
        cy.get(object.static.form_sendbtn).click({ force: true });

        cy.get(object.i18n.results_title).contains(translations.body.results);
        cy.get(object.i18n.results_score).contains(`${translations.body.score}: 13`);
        cy.get(object.i18n.results_cvd).contains(`${translations.body.cvd}: 15.6%`);
        cy.get(object.i18n.results_cvd).contains(translations.body.cvdexplanation);
        cy.get(object.i18n.results_heartage).contains(`${translations.body.heartage}: 64`);
        cy.get(object.i18n.results_risk).contains(`${translations.body.risk}: ${translations.body.intermediate}`);
        cy.get(object.i18n.results_treatment).contains(translations.body.treatment);
        cy.get(object.i18n.results_treatment).contains(translations.body.treatment_intermediate_ldl);
      });
    });
  });

  it('Should have EN sentences in Results component type intermediate with no risks', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nEN').then((translations) => {
        cy.get(object.static.form_gender_male).click({ force: true });
        cy.get(object.static.form_age_select).click({ force: true });
        cy.get(object.i18n.form_age_menuitem_60_64).click({ force: true });
        cy.get(object.static.form_hdl_select).click({ force: true });
        cy.get(object.i18n.form_hdl_menuitem_35_45).click({ force: true });
        cy.get(object.static.form_ldl_select).click({ force: true });
        cy.get(object.i18n.form_ldl_menuitem_80).click({ force: true });
        cy.get(object.static.form_totaldl_select).click({ force: true });
        cy.get(object.i18n.form_totaldl_menuitem_158_200).click({ force: true });
        cy.get(object.static.form_ta_select).click({ force: true });
        cy.get(object.i18n.form_ta_menuitem_120_129).click({ force: true });
        cy.get(object.static.form_wt_select).click({ force: true });
        cy.get(object.i18n.form_wt_menuitem_lessthan102).click({ force: true });
        cy.get(object.static.form_sendbtn).click({ force: true });

        cy.get(object.i18n.results_title).contains(translations.body.results);
        cy.get(object.i18n.results_score).contains(`${translations.body.score}: 13`);
        cy.get(object.i18n.results_cvd).contains(`${translations.body.cvd}: 15.6%`);
        cy.get(object.i18n.results_cvd).contains(translations.body.cvdexplanation);
        cy.get(object.i18n.results_heartage).contains(`${translations.body.heartage}: 64`);
        cy.get(object.i18n.results_risk).contains(`${translations.body.risk}: ${translations.body.intermediate}`);
        cy.get(object.i18n.results_treatment).contains(translations.body.treatment);
        cy.get(object.i18n.results_treatment).contains(translations.body.treatment_intermediate_norisks);
      });
    });
  });

  it('Should have EN sentences in Results component type high', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nEN').then((translations) => {
        cy.get(object.static.form_gender_male).click({ force: true });
        cy.get(object.static.form_age_select).click({ force: true });
        cy.get(object.i18n.form_age_menuitem_60_64).click({ force: true });
        cy.get(object.static.form_hdl_select).click({ force: true });
        cy.get(object.i18n.form_hdl_menuitem_35_45).click({ force: true });
        cy.get(object.static.form_ldl_select).click({ force: true });
        cy.get(object.i18n.form_ldl_menuitem_80).click({ force: true });
        cy.get(object.static.form_totaldl_select).click({ force: true });
        cy.get(object.i18n.form_totaldl_menuitem_158_200).click({ force: true });
        cy.get(object.static.form_ta_select).click({ force: true });
        cy.get(object.i18n.form_ta_menuitem_120_129).click({ force: true });
        cy.get(object.static.form_wt_select).click({ force: true });
        cy.get(object.i18n.form_wt_menuitem_morethan102).click({ force: true });
        cy.get(object.static.form_treatment_checkbox).click({ force: true });
        cy.get(object.static.form_smoking_checkbox).click({ force: true });
        cy.get(object.static.form_diabetes_checkbox).click({ force: true });
        cy.get(object.static.form_sendbtn).click({ force: true });

        cy.get(object.i18n.results_title).contains(translations.body.results);
        cy.get(object.i18n.results_score).contains(`${translations.body.score}: 19`);
        cy.get(object.i18n.results_cvd).contains(`${translations.body.cvd}: > 30%`);
        cy.get(object.i18n.results_cvd).contains(translations.body.cvdexplanation);
        cy.get(object.i18n.results_heartage).contains(`${translations.body.heartage}: > 80`);
        cy.get(object.i18n.results_risk).contains(`${translations.body.risk}: ${translations.body.high}`);
        cy.get(object.i18n.results_treatment).contains(translations.body.treatment);
        cy.get(object.i18n.results_treatment).contains(translations.body.patient_highly_requires_treatment);
        cy.get(object.i18n.results_treatment).contains(translations.body.primary_target);
        cy.get(object.i18n.results_treatment).contains(`${translations.body.alternative_target}: Apo B ≤0.8 g/L`);
        cy.get(object.i18n.results_treatment).contains(`${translations.body.alternative_target}: Non-HDL-C ≤2.6 mmol/L`);
      });
    });
  });

  it('Should have EN sentences in Info container', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nEN').then((translations) => {
        cy.get(object.static.nb_infobtn).should('be.visible');
        cy.get(object.static.nb_infobtn).click({ force: true });

        cy.get(object.static.info_goback).contains(translations.body.back);
        cy.get(object.i18n.mc_infoheader).contains(translations.body.info);

        cy.get(object.i18n.mc_infopsuse).contains(translations.body.usefulness);
        cy.get(object.i18n.mc_infopduse).contains(translations.body.usefulness_text_start);
        cy.get(object.i18n.mc_infopduse).contains(translations.body.usefulness_text_lowrisk);
        cy.get(object.i18n.mc_infopduse).contains(translations.body.usefulness_text_intermediaterisk);
        cy.get(object.i18n.mc_infopduse).contains(translations.body.usefulness_text_highrisk);
        cy.get(object.i18n.mc_infopduse).contains(translations.body.usefulness_text_end);

        cy.get(object.i18n.mc_infopspur).contains(translations.body.purpose);
        cy.get(object.i18n.mc_infopdpur).contains(translations.body.purpose_text1);
        cy.get(object.i18n.mc_infopdpur).contains(translations.body.purpose_text2);
        cy.get(object.i18n.mc_infopdpur).contains(translations.body.purpose_text3);

        cy.get(object.i18n.mc_infopsval).contains(translations.body.validation);
        cy.get(object.i18n.mc_infopdval).contains(translations.body.validation_text);
      });
    });
  });
});
