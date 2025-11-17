window.onload = function() {
  document.getElementById('symptomForm').onsubmit = function(event) {
    event.preventDefault();
    const input = document.getElementById('symptoms').value.toLowerCase();
    const symptomsArray = input.split(',').map(s => s.trim());

    const diseases = [
      {
        name: "Common Cold",
        symptoms: ["cough", "sore throat", "runny nose"],
        advice: "Common cold is a viral infection of the upper respiratory tract. Rest well and drink fluids to stay hydrated. Over-the-counter cold medicines may help relieve symptoms. Avoid cold drinks and stay warm. If symptoms persist more than 7–10 days, consult a healthcare professional."
      },
      {
        name: "Influenza (Flu)",
        symptoms: ["fever", "headache", "body aches", "fatigue"],
        advice: "Flu is a contagious viral infection. Get plenty of rest, drink fluids, and take fever reducers if needed. Avoid contact with others to prevent spreading. Seek medical attention if symptoms worsen or breathing becomes difficult. Annual vaccination is recommended to prevent infection."
      },
      {
        name: "COVID-19",
        symptoms: ["fever", "cough", "loss of taste", "loss of smell", "shortness of breath"],
        advice: "COVID-19 is a contagious respiratory infection. Isolate immediately and monitor breathing. Stay hydrated and rest. Contact a healthcare provider for testing and follow official guidelines. Seek urgent care if you experience severe shortness of breath or chest pain."
      },
      {
        name: "Migraine",
        symptoms: ["headache", "light sensitivity", "sound sensitivity", "nausea"],
        advice: "Migraine is a neurological condition causing severe headaches, nausea, and light/sound sensitivity. Rest in a quiet, dark room, drink water, and consider migraine-safe pain relief. Track triggers and consult a doctor if migraines are frequent or worsening."
      },
      {
        name: "Food Poisoning",
        symptoms: ["nausea", "vomiting", "diarrhea", "stomach ache"],
        advice: "Food poisoning usually results from contaminated food or water. Drink plenty of fluids to prevent dehydration. Eat light meals and rest. Oral rehydration solutions may help. Seek medical attention if high fever, blood in stools, or symptoms persist."
      },
      {
        name: "Allergy",
        symptoms: ["sneezing", "runny nose", "itchy eyes"],
        advice: "Allergies can be triggered by pollen, dust, or other factors. Avoid allergens and maintain cleanliness. Antihistamines may relieve symptoms. Consult an allergy specialist if symptoms persist or worsen."
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
        advice: "High blood pressure may cause these symptoms. Reduce stress, avoid salty foods, stay hydrated, and monitor blood pressure. Seek medical advice for long-term management."
      },
      {
        name: "Asthma",
        symptoms: ["wheezing", "shortness of breath", "cough"],
        advice: "Asthma is a chronic respiratory condition. Use an inhaler if prescribed, avoid triggers like smoke/dust, stay hydrated, and rest. Seek urgent medical care if breathing worsens."
      },
      {
        name: "Heart Attack",
        symptoms: ["chest pain", "shortness of breath", "sweating", "nausea"],
        advice: "These are serious signs of a heart attack. Call emergency services immediately. Sit or lie down and stay calm. Do not exert yourself. Follow medical instructions carefully."
      },
      {
        name: "Skin Allergy/Infection",
        symptoms: ["rash", "itching", "redness", "swelling"],
        advice: "Skin allergies or infections can cause irritation. Keep the area clean, avoid scratching, use cool compresses, and monitor symptoms. Consult a doctor if it worsens."
      },
      {
        name: "Arthritis",
        symptoms: ["joint pain", "swelling", "stiffness"],
        advice: "Arthritis causes joint pain and stiffness. Gentle stretching, warm compresses, and resting affected joints help. Consult a doctor for diagnosis and treatment options."
      },
      {
        name: "Anemia",
        symptoms: ["fatigue", "weakness", "pale skin", "shortness of breath"],
        advice: "Anemia is often due to low iron or vitamins. Eat iron-rich foods, stay hydrated, and get blood tests. Consult a doctor for proper treatment."
      },
      {
        name: "Spinal/Nerve Issue",
        symptoms: ["back pain", "numbness", "tingling", "leg pain"],
        advice: "Back or nerve issues can cause pain or numbness. Avoid heavy lifting, do gentle stretching, rest, and consult a medical professional if pain worsens."
      },
      {
        name: "Meningitis",
        symptoms: ["fever", "vomiting", "neck pain", "headache", "stiff neck"],
        advice: "Meningitis is a serious infection. Seek emergency medical care immediately. Keep lights dim and avoid movement. Follow hospital instructions carefully."
      },
      {
        name: "Tuberculosis",
        symptoms: ["persistent cough", "weight loss", "fever", "night sweats"],
        advice: "Tuberculosis affects the lungs. Get tested for confirmation, avoid close contact, follow treatment, maintain nutrition, and rest."
      },
      {
        name: "Pneumonia",
        symptoms: ["cough", "fever", "shortness of breath", "chest pain"],
        advice: "Pneumonia is a lung infection. Seek medical care immediately. Rest, hydrate, take prescribed antibiotics if any, and monitor breathing."
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
};
