 export const selects = [
    {
      label: 'Age',
      name: 'age',
      values: ["30 - 34", "35 - 39", "40 - 44", "45 - 49", "50 - 54", "55 - 59", "60 - 64", "65 - 69", "70 - 74", "75+"]
    },
    {
      label: 'Colesterol HDL',
      name: 'hdl',
      values: ["< 35.0", "35.0 - 45.9", "46.0 - 49.9", "50.0 - 61.9", "> 62.0"],
      helper: 'mg/dl'
    },
    {
      label: 'Colesterol LDL',
      name: 'ldl',
      values: ["< 80.0", "80.0 - 135.0", "> 135.0"],
      helper: 'mg/dl'
    },
    {
      label: 'Colesterol Total',
      name: 'totaldl',
      values: ["< 158", "158 - 200", "201 - 239", "240 - 278", "> 278"],
      helper: 'mg/dl'
    },
    {
      label: 'Presion Arterial Sistolica',
      name: 'ta',
      values: ["< 120", "120 - 129", "130 - 139", "140 - 149", "150 - 159", "160+"],
      helper: 'mmHg'
    },
    {
      label: 'Circunferencia de Cintura',
      name: 'wt',
      values: ["< 102 (40)", "> 102 (40)", "Unknown"],
      helper: 'cms (inches)'
    }
  ]

  export const checkboxes = [
    {
      checkboxKey: "smoking",
      label: "Fumad@r"
    },
    {
      checkboxKey: "diabetes",
      label: "Diabetes o Glucemia alta en ayunas"
    },
    {
      checkboxKey: "treatment",
      label: "Hipertension en tratamiento"
    },
    
  ]