/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('i18n | FR', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('/?lang=fr');
  });

  it('Should have FR sentences in Head component', () => {
    cy.fixture('i18nHead').then((translations) => {
      cy.get('head title').should('contain', translations.fr.title);
      cy.get('head meta[name="application-name"]').should('have.attr', 'content', translations.fr.appname);
      cy.get('head meta[name="description"]').should('have.attr', 'content', translations.fr.description);
      cy.get('head meta[name="keywords"]').should('have.attr', 'content', translations.fr.keywords);
    });
  });


  it('Should have FR sentences in Header component', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nFR').then((translations) => {
        cy.get(object.i18n.appHeader_title).first().contains(translations.navbar_title.split(' ')[0]);
        cy.get(object.i18n.appHeader_title).last().contains(translations.navbar_title.split(' ')[1]);
        cy.get(object.i18n.subheader).contains(translations.brief_description);
      });
    });
  });

  it('Should have FR sentences in NavButtons component', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nFR').then((translations) => {
        cy.get(object.static.nb_infobtn).click({ force: true });

        cy.get(object.static.nb_calcbtn).contains(translations.calculate);

        cy.viewport('iphone-6');
        cy.reload();
        cy.get(object.static.nb_calcbtn).contains(translations.calculate);
      });
    });
  });

  it('Should have FR sentences in CalcInput component header & subheader link', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nFR').then((translations) => {
        cy.get(object.i18n.mc_calcheader).contains(translations.risk_score_calculator);
        cy.get(object.static.ci_elinksccs).contains(translations.using_guidelines);
      });
    });
  });

  it('Should have FR sentences in Form component input labels', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nFR').then((translations) => {
        cy.get(object.i18n.form_gender_female).contains(translations.woman);
        cy.get(object.i18n.form_gender_male).contains(translations.man);
        cy.get(object.i18n.form_label_age).contains(translations.age);
        cy.get(object.i18n.form_label_hdl).contains(translations.colesterol_hdl);
        cy.get(object.i18n.form_label_ldl).contains(translations.colesterol_ldl);
        cy.get(object.i18n.form_label_totaldl).contains(translations.colesterol_total);
        cy.get(object.i18n.form_label_ta).contains(translations.arterial_pression);
        cy.get(object.i18n.form_label_wt).contains(translations.waist_circumference);
        cy.get(object.i18n.form_treatment_checkbox).contains(translations.hypertension_in_treatment);
        cy.get(object.i18n.form_smoking_checkbox).contains(translations.smoking);
        cy.get(object.i18n.form_diabetes_checkbox).contains(translations.diabetes);
      });
    });
  });

  it('Should have FR sentences in Results component type low', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nFR').then((translations) => {
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

        cy.get(object.i18n.results_title).contains(translations.results);
        cy.get(object.i18n.results_score).contains(`${translations.score}: 4`);
        cy.get(object.i18n.results_cvd).contains(`${translations.cvd}: 2.4%`);
        cy.get(object.i18n.results_cvd).contains(translations.cvdexplanation);
        cy.get(object.i18n.results_heartage).contains(`${translations.heartage}: 39`);
        cy.get(object.i18n.results_risk).contains(`${translations.risk}: ${translations.low}`);
        cy.get(object.i18n.results_treatment).contains(translations.treatment);
        cy.get(object.i18n.results_treatment).contains(translations.patient_not_requires_treatment);
        cy.get(object.i18n.results_treatment).contains(translations.statins_only_indicated);
        cy.get(object.i18n.results_treatment).contains(translations.aterosclerosis);
        cy.get(object.i18n.results_treatment).contains(translations.abdominal_aortic_aneurysm);
        cy.get(object.i18n.results_treatment).contains(translations.chronic_kidney_disease);
      });
    });
  });

  it('Should have FR sentences in Results component type intermediate with risk factors (1)', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nFR').then((translations) => {
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

        cy.get(object.i18n.results_title).contains(translations.results);
        cy.get(object.i18n.results_score).contains(`${translations.score}: 14`);
        cy.get(object.i18n.results_cvd).contains(`${translations.cvd}: 18.4%`);
        cy.get(object.i18n.results_cvd).contains(translations.cvdexplanation);
        cy.get(object.i18n.results_heartage).contains(`${translations.heartage}: 68`);
        cy.get(object.i18n.results_risk).contains(`${translations.risk}: ${translations.intermediate}`);
        cy.get(object.i18n.results_treatment).contains(translations.treatment);
        cy.get(object.i18n.results_treatment).contains(`${translations.treatment_intermediate_hasfactors} (${translations.smoking}, ${translations.diabetes}, ${translations.waist_circumference}) ${translations.so_treatment_is_recommended}`);
      });
    });
  });

  it('Should have FR sentences in Results component type intermediate with risk factors (2)', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nFR').then((translations) => {
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

        cy.get(object.i18n.results_title).contains(translations.results);
        cy.get(object.i18n.results_score).contains(`${translations.score}: 11`);
        cy.get(object.i18n.results_cvd).contains(`${translations.cvd}: 11.2%`);
        cy.get(object.i18n.results_cvd).contains(translations.cvdexplanation);
        cy.get(object.i18n.results_heartage).contains(`${translations.heartage}: 57`);
        cy.get(object.i18n.results_risk).contains(`${translations.risk}: ${translations.intermediate}`);
        cy.get(object.i18n.results_treatment).contains(translations.treatment);
        cy.get(object.i18n.results_treatment).contains(`${translations.treatment_intermediate_hasfactors} (${translations.low} HDL) ${translations.so_treatment_is_recommended}`);
      });
    });
  });

  it('Should have FR sentences in Results component type intermediate with high LDL', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nFR').then((translations) => {
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

        cy.get(object.i18n.results_title).contains(translations.results);
        cy.get(object.i18n.results_score).contains(`${translations.score}: 13`);
        cy.get(object.i18n.results_cvd).contains(`${translations.cvd}: 15.6%`);
        cy.get(object.i18n.results_cvd).contains(translations.cvdexplanation);
        cy.get(object.i18n.results_heartage).contains(`${translations.heartage}: 64`);
        cy.get(object.i18n.results_risk).contains(`${translations.risk}: ${translations.intermediate}`);
        cy.get(object.i18n.results_treatment).contains(translations.treatment);
        cy.get(object.i18n.results_treatment).contains(translations.treatment_intermediate_ldl);
      });
    });
  });

  it('Should have FR sentences in Results component type intermediate with no risks', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nFR').then((translations) => {
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

        cy.get(object.i18n.results_title).contains(translations.results);
        cy.get(object.i18n.results_score).contains(`${translations.score}: 13`);
        cy.get(object.i18n.results_cvd).contains(`${translations.cvd}: 15.6%`);
        cy.get(object.i18n.results_cvd).contains(translations.cvdexplanation);
        cy.get(object.i18n.results_heartage).contains(`${translations.heartage}: 64`);
        cy.get(object.i18n.results_risk).contains(`${translations.risk}: ${translations.intermediate}`);
        cy.get(object.i18n.results_treatment).contains(translations.treatment);
        cy.get(object.i18n.results_treatment).contains(translations.treatment_intermediate_norisks);
      });
    });
  });

  it('Should have FR sentences in Results component type high', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nFR').then((translations) => {
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

        cy.get(object.i18n.results_title).contains(translations.results);
        cy.get(object.i18n.results_score).contains(`${translations.score}: 19`);
        cy.get(object.i18n.results_cvd).contains(`${translations.cvd}: > 30%`);
        cy.get(object.i18n.results_cvd).contains(translations.cvdexplanation);
        cy.get(object.i18n.results_heartage).contains(`${translations.heartage}: > 80`);
        cy.get(object.i18n.results_risk).contains(`${translations.risk}: ${translations.high}`);
        cy.get(object.i18n.results_treatment).contains(translations.treatment);
        cy.get(object.i18n.results_treatment).contains(translations.patient_highly_requires_treatment);
        cy.get(object.i18n.results_treatment).contains(translations.primary_target);
        cy.get(object.i18n.results_treatment).contains(`${translations.alternative_target}: Apo B ≤0.8 g/L`);
        cy.get(object.i18n.results_treatment).contains(`${translations.alternative_target}: Non-HDL-C ≤2.6 mmol/L`);
      });
    });
  });

  it('Should have FR sentences in Info container', () => {
    cy.fixture('selectors').then((object) => {
      cy.fixture('i18nFR').then((translations) => {
        cy.get(object.static.nb_infobtn).should('be.visible');
        cy.get(object.static.nb_infobtn).click({ force: true });

        cy.get(object.static.info_goback).contains(translations.back);
        cy.get(object.i18n.mc_infoheader).contains(translations.info);

        cy.get(object.i18n.mc_infopsuse).contains(translations.usefulness);
        cy.get(object.i18n.mc_infopduse).contains(translations.usefulness_text_start);
        cy.get(object.i18n.mc_infopduse).contains(translations.usefulness_text_lowrisk);
        cy.get(object.i18n.mc_infopduse).contains(translations.usefulness_text_intermediaterisk);
        cy.get(object.i18n.mc_infopduse).contains(translations.usefulness_text_highrisk);
        cy.get(object.i18n.mc_infopduse).contains(translations.usefulness_text_end);

        cy.get(object.i18n.mc_infopspur).contains(translations.purpose);
        cy.get(object.i18n.mc_infopdpur).contains(translations.purpose_text1);
        cy.get(object.i18n.mc_infopdpur).contains(translations.purpose_text2);
        cy.get(object.i18n.mc_infopdpur).contains(translations.purpose_text3);

        cy.get(object.i18n.mc_infopsval).contains(translations.validation);
        cy.get(object.i18n.mc_infopdval).contains(translations.validation_text);
      });
    });
  });
});
