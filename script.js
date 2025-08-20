document.getElementById('symptomForm').onsubmit = function(event) {
  event.preventDefault();
  const input = document.getElementById('symptoms').value.toLowerCase();
  const symptomsArray = input.split(',').map(s => s.trim());

  const diseases = [
    {
      name: "Common Cold",
      symptoms: ["cough", "sore throat", "runny nose"],
      advice: "You may have a common cold. Rest, drink fluids, and consider over-the-counter remedies."
    },
    {
      name: "Influenza (Flu)",
      symptoms: ["fever", "headache", "body aches", "fatigue"],
      advice: "You may have the flu. Rest, drink fluids, and see a doctor if symptoms are severe."
    },
    {
      name: "COVID-19",
      symptoms: ["fever", "cough", "loss of taste", "loss of smell", "shortness of breath"],
      advice: "You may have COVID-19. Isolate and contact a healthcare professional for testing."
    },
    {
      name: "Migraine",
      symptoms: ["headache", "light sensitivity", "sound sensitivity", "nausea"],
      advice: "You may be experiencing a migraine. Find a quiet, dark place and take pain relievers if needed."
    },
    {
      name: "Food Poisoning",
      symptoms: ["nausea", "vomiting", "diarrhea", "stomach ache"],
      advice: "You may have food poisoning. Rest, stay hydrated, and see a doctor if symptoms are severe."
    },
    {
      name: "Allergy",
      symptoms: ["sneezing", "runny nose", "itchy eyes"],
      advice: "These are common allergy symptoms. Avoid allergens and consider antihistamines."
    },
    {
      name: "Stomach Ulcer",
      symptoms: ["stomach pain", "nausea", "heartburn"],
      advice: "You may have a stomach ulcer. Avoid spicy foods and consult a doctor for proper diagnosis."
    },
    {
      name: "Diabetes",
      symptoms: ["frequent urination", "thirst", "fatigue", "weight loss", "excessive thirst"],
      advice: "These symptoms may indicate diabetes. Please consult a healthcare professional."
    },
    {
      name: "Hypertension (High Blood Pressure)",
      symptoms: ["headache", "nosebleed", "dizziness", "blurred vision"],
      advice: "These could be signs of hypertension. Check your blood pressure and consult a doctor."
    },
    {
      name: "Asthma",
      symptoms: ["wheezing", "shortness of breath", "cough"],
      advice: "You may have asthma. Use your inhaler and consult a healthcare provider if symptoms worsen."
    },
    {
      name: "Heart Attack",
      symptoms: ["chest pain", "shortness of breath", "sweating", "nausea"],
      advice: "Chest pain with these symptoms may be serious as these are signs of a heart attack. Seek emergency medical help immediately."
    },
    {
      name: "Skin Allergy/Infection",
      symptoms: ["rash", "itching", "redness", "swelling"],
      advice: "You may have a skin allergy or infection. Avoid scratching and consult a doctor if rash spreads."
    },
    {
      name: "Arthritis",
      symptoms: ["joint pain", "swelling", "stiffness"],
      advice: "These symptoms may indicate arthritis. Consult a healthcare provider for proper diagnosis."
    },
    {
      name: "Anemia",
      symptoms: ["fatigue", "weakness", "pale skin", "shortness of breath"],
      advice: "These symptoms could be anemia. Please consult a doctor for blood tests."
    },
    {
      name: "Spinal/Nerve Issue",
      symptoms: ["back pain", "numbness", "tingling", "leg pain"],
      advice: "You may have a nerve or spine issue. Please consult a doctor if pain is severe."
    },
    {
      name: "Meningitis",
      symptoms: ["fever", "vomiting", "neck pain", "headache", "stiff neck"],
      advice: "These could be signs of meningitis. Seek emergency medical help immediately."
    },
    {
      name: "Tuberculosis",
      symptoms: ["persistent cough", "weight loss", "fever", "night sweats"],
      advice: "These symptoms may indicate tuberculosis. Please consult a healthcare professional."
    },
    {
      name: "Pneumonia",
      symptoms: ["cough", "fever", "shortness of breath", "chest pain"],
      advice: "You may have pneumonia. Seek medical attention, especially if you have trouble breathing."
    },
    {
      name: "Bronchitis",
      symptoms: ["cough", "fatigue", "shortness of breath", "chest discomfort"],
      advice: "You may have bronchitis. Rest and consult a doctor if symptoms persist."
    },
    {
      name: "Otitis (Ear Infection)",
      symptoms: ["ear pain", "fever", "hearing loss", "fluid from ear"],
      advice: "You may have an ear infection. Consult a doctor for proper treatment."
    },
    {
      name: "Sinusitis",
      symptoms: ["facial pain", "nasal congestion", "headache", "runny nose"],
      advice: "You may have sinusitis. Use saline sprays and consult a doctor if pain is severe."
    },
    {
      name: "Conjunctivitis (Pink Eye)",
      symptoms: ["red eyes", "itching", "tearing", "discharge"],
      advice: "You may have conjunctivitis. Practice good hygiene and see a doctor if symptoms worsen."
    },
    {
      name: "Urinary Tract Infection (UTI)",
      symptoms: ["burning urination", "frequent urination", "lower abdominal pain", "cloudy urine"],
      advice: "You may have a urinary tract infection. Drink plenty of water and consult a doctor."
    }
  ];

  let advice = "";
  let foundDisease = false;

  for (const disease of diseases) {
    const matches = disease.symptoms.filter(s => symptomsArray.includes(s));
    if (matches.length >= Math.min(2, disease.symptoms.length)) {
      advice = disease.advice;
      foundDisease = true;
      break;
    }
  }

  if (!foundDisease) {
    advice = "Your symptoms do not match a common disease in our list. Please enter more symptoms or consult a doctor for accurate advice.";
  }

  document.getElementById('advice').innerText = advice;
};
