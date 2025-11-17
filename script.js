document.getElementById('symptomForm').onsubmit = function(event) {
  event.preventDefault();
  const input = document.getElementById('symptoms').value.toLowerCase();
  const symptomsArray = input.split(',').map(s => s.trim());

  const diseases = [
    {
      name: "Common Cold",
      symptoms: ["cough", "sore throat", "runny nose"],
      advice: "You may be experiencing a common cold. Rest well and drink warm fluids. Over-the-counter cold medicines can help reduce symptoms. Keep warm and avoid cold drinks. If symptoms last longer than a week, consult a healthcare professional."
    },
    {
      name: "Influenza (Flu)",
      symptoms: ["fever", "headache", "body aches", "fatigue"],
      advice: "These symptoms suggest you may have the flu. Get plenty of rest and drink fluids. Fever reducers like paracetamol can help. Avoid contact with others to prevent spreading. See a doctor if symptoms worsen or breathing becomes difficult."
    },
    {
      name: "COVID-19",
      symptoms: ["fever", "cough", "loss of taste", "loss of smell", "shortness of breath"],
      advice: "Your symptoms might be related to COVID-19. Isolate from others and monitor your breathing. Drink fluids and rest. Contact a healthcare provider for testing. Follow official guidelines to protect yourself and others."
    },
    {
      name: "Migraine",
      symptoms: ["headache", "light sensitivity", "sound sensitivity", "nausea"],
      advice: "You may be experiencing a migraine. Rest in a quiet, dark place and avoid bright lights. Drink plenty of water. Consider migraine-safe pain relievers. If migraines occur often, consult a doctor for preventive treatment."
    },
    {
      name: "Food Poisoning",
      symptoms: ["nausea", "vomiting", "diarrhea", "stomach ache"],
      advice: "These symptoms suggest food poisoning. Drink plenty of water to prevent dehydration. Avoid heavy meals until symptoms improve. Oral rehydration solutions can help. Seek medical care if symptoms last more than 24 hours or worsen."
    },
    {
      name: "Allergy",
      symptoms: ["sneezing", "runny nose", "itchy eyes"],
      advice: "Your symptoms may be due to allergies. Try to avoid allergens and keep your surroundings clean. Antihistamines can help reduce symptoms. Use air filters if available. Consult an allergy specialist if symptoms persist."
    },
    {
      name: "Stomach Ulcer",
      symptoms: ["stomach pain", "nausea", "heartburn"],
      advice: "These symptoms may indicate a stomach ulcer. Avoid spicy or acidic foods and eat smaller meals. Over-the-counter antacids may help. Stay hydrated and rest. Consult a doctor for proper diagnosis and treatment."
    },
    {
      name: "Diabetes",
      symptoms: ["frequent urination", "thirst", "fatigue", "weight loss"],
      advice: "These symptoms may be signs of diabetes. Get your blood sugar levels checked soon. Drink plenty of water. Avoid sugary foods. Consult a healthcare professional for guidance on treatment and lifestyle changes."
    },
    {
      name: "Hypertension (High Blood Pressure)",
      symptoms: ["headache", "nosebleed", "dizziness", "blurred vision"],
      advice: "High blood pressure may be causing your symptoms. Reduce stress and avoid salty foods. Rest and stay hydrated. Check your blood pressure regularly. Follow medical advice for long-term management."
    },
    {
      name: "Asthma",
      symptoms: ["wheezing", "shortness of breath", "cough"],
      advice: "These symptoms may indicate asthma. Use your inhaler if prescribed. Avoid smoke, dust, and cold air. Stay hydrated and rest. Seek medical help if breathing becomes difficult or symptoms worsen."
    },
    {
      name: "Heart Attack",
      symptoms: ["chest pain", "shortness of breath", "sweating", "nausea"],
      advice: "These are serious signs of a possible heart attack. Call emergency services immediately. Do not attempt physical activity. Stay calm and sit or lie down. Follow medical personnel instructions carefully."
    },
    {
      name: "Skin Allergy/Infection",
      symptoms: ["rash", "itching", "redness", "swelling"],
      advice: "Your symptoms suggest a skin allergy or infection. Keep the area clean and avoid scratching. Apply cool compresses to reduce irritation. Monitor for spreading or worsening. See a doctor if symptoms persist."
    },
    {
      name: "Arthritis",
      symptoms: ["joint pain", "swelling", "stiffness"],
      advice: "These symptoms may indicate arthritis. Try gentle stretching and avoid overusing affected joints. Use warm compresses to reduce pain. Maintain a healthy weight. Consult a doctor for proper treatment options."
    },
    {
      name: "Anemia",
      symptoms: ["fatigue", "weakness", "pale skin", "shortness of breath"],
      advice: "These symptoms may indicate anemia. Eat iron-rich foods like spinach and meat. Drink plenty of water. A blood test is necessary to confirm. Consult a doctor for treatment options."
    },
    {
      name: "Spinal/Nerve Issue",
      symptoms: ["back pain", "numbness", "tingling", "leg pain"],
      advice: "These symptoms may be related to a spinal or nerve issue. Avoid heavy lifting and do gentle stretching. Rest when possible. Monitor for worsening symptoms. Seek medical evaluation if pain persists."
    },
    {
      name: "Meningitis",
      symptoms: ["fever", "vomiting", "neck pain", "headache", "stiff neck"],
      advice: "These symptoms could indicate meningitis, a serious condition. Seek emergency medical help immediately. Keep lights dim and avoid movement. Stay hydrated if possible. Follow hospital instructions strictly."
    },
    {
      name: "Tuberculosis",
      symptoms: ["persistent cough", "weight loss", "fever", "night sweats"],
      advice: "These symptoms may indicate tuberculosis. Get a medical test for confirmation. Avoid close contact with others. Follow doctor’s prescribed treatment. Maintain good nutrition and rest."
    },
    {
      name: "Pneumonia",
      symptoms: ["cough", "fever", "shortness of breath", "chest pain"],
      advice: "These symptoms may indicate pneumonia. Seek medical evaluation immediately. Rest and stay hydrated. Take prescribed antibiotics if given. Monitor breathing and contact a doctor if symptoms worsen."
    }
  ];

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
