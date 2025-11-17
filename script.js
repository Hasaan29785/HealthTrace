document.getElementById('symptomForm').onsubmit = function(event) {
  event.preventDefault();
  const input = document.getElementById('symptoms').value.toLowerCase();
  const symptomsArray = input.split(',').map(s => s.trim());

  const diseases = [
    {
      name: "Common Cold",
      symptoms: ["cough", "sore throat", "runny nose"],
      advice: "Common cold is a viral infection of the upper respiratory tract. Rest well and drink fluids to stay hydrated. Warm liquids like soup or tea can soothe your throat. Over-the-counter cold medicines may help relieve symptoms. Avoid spreading the virus. If symptoms last more than 7–10 days or worsen, consult a doctor."
    },
    {
      name: "Influenza (Flu)",
      symptoms: ["fever", "headache", "body aches", "fatigue"],
      advice: "Flu is a contagious viral infection causing fever, fatigue, and body aches. Rest fully, drink plenty of fluids, and use fever reducers if necessary. Avoid close contact with others. Seek medical attention if breathing becomes difficult or symptoms worsen. Annual vaccination helps prevent infection."
    },
    {
      name: "COVID-19",
      symptoms: ["fever", "cough", "loss of taste", "loss of smell", "shortness of breath"],
      advice: "COVID-19 is a contagious respiratory infection. Isolate immediately, monitor breathing, rest, hydrate, and contact a healthcare provider for testing. Follow official safety guidelines. Seek urgent care if chest pain, severe shortness of breath, or confusion occurs."
    },
    {
      name: "Migraine",
      symptoms: ["headache", "light sensitivity", "sound sensitivity", "nausea"],
      advice: "Migraine causes severe headache, nausea, and sensitivity to light/sound. Rest in a dark quiet room, drink water, and take migraine-safe pain relief. Track triggers. Frequent migraines should be evaluated by a doctor for preventive treatment."
    },
    {
      name: "Food Poisoning",
      symptoms: ["nausea", "vomiting", "diarrhea", "stomach ache"],
      advice: "Food poisoning comes from contaminated food or water. Drink fluids, eat light meals, and rest. Oral rehydration solutions may help. Seek medical care if high fever, blood in stools, or symptoms persist."
    },
    {
      name: "Allergy",
      symptoms: ["sneezing", "runny nose", "itchy eyes"],
      advice: "Allergy may be triggered by pollen, dust, or other factors. Avoid allergens, maintain cleanliness, and use antihistamines if needed. Persistent or severe allergies should be assessed by an allergy specialist."
    },
    {
      name: "Stomach Ulcer",
      symptoms: ["stomach pain", "nausea", "heartburn"],
      advice: "Stomach ulcers are often caused by excess acid or infection. Avoid spicy/acidic foods, eat smaller meals, and rest. Over-the-counter antacids may help. Consult a doctor for proper diagnosis and treatment."
    },
    {
      name: "Diabetes",
      symptoms: ["frequent urination", "thirst", "fatigue", "weight loss"],
      advice: "Diabetes affects blood sugar regulation. Monitor blood sugar, drink water, avoid sugary foods, and rest. Consult a healthcare professional for diagnosis, medication, and lifestyle guidance."
    },
    {
      name: "Hypertension (High Blood Pressure)",
      symptoms: ["headache", "nosebleed", "dizziness", "blurred vision"],
      advice: "High blood pressure may cause these symptoms. Reduce stress, avoid salty foods, stay hydrated, and monitor your blood pressure. Follow medical advice for long-term management."
    },
    {
      name: "Asthma",
      symptoms: ["wheezing", "shortness of breath", "cough"],
      advice: "Asthma is a chronic respiratory condition. Use your inhaler if prescribed, avoid triggers like smoke and dust, stay hydrated, rest, and seek medical help if breathing worsens."
    },
    {
      name: "Heart Attack",
      symptoms: ["chest pain", "shortness of breath", "sweating", "nausea"],
      advice: "Heart attack signs are serious. Call emergency services immediately. Sit or lie down and stay calm. Follow medical instructions carefully."
    },
    {
      name: "Skin Allergy/Infection",
      symptoms: ["rash", "itching", "redness", "swelling"],
      advice: "Skin allergies or infections can cause irritation. Keep the area clean, avoid scratching, use cool compresses, and see a doctor if symptoms worsen."
    },
    {
      name: "Arthritis",
      symptoms: ["joint pain", "swelling", "stiffness"],
      advice: "Arthritis causes joint pain and stiffness. Gentle stretching, warm compresses, and rest can help. Consult a doctor for proper treatment options."
    },
    {
      name: "Anemia",
      symptoms: ["fatigue", "weakness", "pale skin", "shortness of breath"],
      advice: "Anemia is often caused by low iron or vitamins. Eat iron-rich foods, stay hydrated, get blood tests, and consult a doctor for proper treatment."
    },
    {
      name: "Spinal/Nerve Issue",
      symptoms: ["back pain", "numbness", "tingling", "leg pain"],
      advice: "Spinal or nerve issues can cause pain or numbness. Avoid heavy lifting, stretch gently, rest, and seek medical evaluation if symptoms worsen."
    },
    {
      name: "Meningitis",
      symptoms: ["fever", "vomiting", "neck pain", "headache", "stiff neck"],
      advice: "Meningitis is a serious condition. Seek emergency medical help immediately. Keep lights dim, avoid movement, and follow hospital instructions carefully."
    },
    {
      name: "Tuberculosis",
      symptoms: ["persistent cough", "weight loss", "fever", "night sweats"],
      advice: "Tuberculosis affects the lungs. Get tested for confirmation, avoid close contact with others, follow treatment, maintain nutrition, and rest."
    },
    {
      name: "Pneumonia",
      symptoms: ["cough", "fever", "shortness of breath", "chest pain"],
      advice: "Pneumonia is a lung infection. Seek medical care immediately. Rest, hydrate, take prescribed antibiotics if any, and monitor breathing."
    }
  ];

  // Match diseases based on any symptom
  const matchedDiseases = diseases.filter(disease =>
    disease.symptoms.some(symptom => symptomsArray.includes(symptom))
  );

  const resultDiv = document.getElementById('result');
  if (matchedDiseases.length > 0) {
    resultDiv.innerHTML = matchedDiseases.map(d => `
      <h3>${d.name}</h3>
      <p>${d.advice}</p>
    `).join('');
  } else {
    resultDiv.innerHTML = "<p>No matching disease found. Please check your symptoms or consult a doctor.</p>";
  }
};
