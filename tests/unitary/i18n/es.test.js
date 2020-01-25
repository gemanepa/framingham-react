const i18nEn = require('../../../src/i18n/en.json');
const i18nEs = require('../../../src/i18n/es.json');

test('es body length', () => {
  expect(Object.keys(i18nEs).length).toEqual(58);
  expect(Object.keys(i18nEs).length).toEqual(Object.keys(i18nEn).length);
});

test('es body props vals', () => {
  expect(i18nEs).toEqual(
    {
        "abdominal_aortic_aneurysm": "Aneurisma Aortico Abdominal",
        "age": "Edad",
        "androidapp": "Android App",
        "alternative_target": "Objetivo Alternativo",
        "app_name": "CR Framingham",
        "arterial_pression": "Presion Arterial Sistolica",
        "aterosclerosis": "Aterosclerosis Clinica",
        "brief_description": "Determina el riesgo de enfermedades cardiovasculares en 10 años",
        "calculate": "Calcular",
        "chronic_kidney_disease": "Enfermedad Renal Cronica",
        "colesterol_hdl": "Colesterol HDL",
        "colesterol_ldl": "Colesterol LDL",
        "colesterol_total": "Colesterol Total",
        "cvd": "RCV",
        "cvdexplanation": "RCV: Riesgo CardioVascular en 10 años",
        "day": "Dia",
        "decrease_in": "disminucion en",
        "expanded_description": "The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years, assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk. It also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the variation of years between it and its chronological age.",
        "diabetes": "Diabetes o Glucemia alta en ayunas",
        "elinks": "Elinks",
        "exit": "Salir",
        "gender": "Genero",
        "genderRequired": "Genero es requerido",
        "heartage": "Edad Corazon",
        "high": "Alto",
        "hypertension_in_treatment": "Hipertension en tratamiento",
        "info": "Info",
        "intermediate": "Intermedio",
        "low": "Bajo",
        "man": "Hombre",
        "month": "Mes",
        "navbar_title": "CardioRiesgo Framingham",
        "or": "o",
        "patient": "Paciente",
        "patient_highly_requires_treatment": "El paciente necesita tratamiento",
        "patient_name": "Nombre del Paciente",
        "patient_not_requires_treatment": "El paciente no requiere tratamiento.",
        "patientdata": "Datos del Paciente",
        "primary_target": "Objetivo Primario",
        "results": "Resultados",
        "risk": "Riesgo",
        "risk_score_calculator": "Calculo de Riesgo",
        "score": "Puntuacion",
        "send": "Enviar",
        "smoking": "Tabaquismo",
        "so_treatment_is_recommended": "por lo que se recomienda tratamiento",
        "statins_only_indicated": "Estatinas solo indicadas en caso de:",
        "treatment": "Tratamiento:",
        "treatment_intermediate_hasfactors": "Si bien el nivel de riesgo no es Alto, el paciente presenta factores de riesgo para su edad",
        "treatment_intermediate_ldl": "Si bien el nivel de riesgo no es Alto, el paciente presenta niveles altos de LDL y se recomienda tratamiento",
        "treatment_intermediate_norisks": "Si bien el nivel de riesgo no es Bajo, el paciente no presenta factores de riesgo por lo que generalmente no requiere tratamiento",
        "treatment_low_diabetes": "Si bien el nivel de riesgo es Bajo, el paciente requiere tratamiento de estatinas debido a la presencia de diabetes o glucemia alta en ayunas en una persona mayor de 40 años",
        "unknown": "Desconocido",
        "using_guidelines": "Usando 2017 Canadian CardioVascular Society Guidelines",
        "waist_circumference": "Circunferencia de Cintura",
        "woman": "Mujer",
        "year": "Año",
        "years": "años"
    }
  );
});