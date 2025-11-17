window.onload = function() {
  document.getElementById('symptomForm').onsubmit = function(event) {
    event.preventDefault();
    const input = document.getElementById('symptoms').value.toLowerCase();
    const symptomsArray = input.split(',').map(s => s.trim());

    const diseases = [
      { 
        name: "Common Cold", 
        symptoms: ["cough", "sore throat", "runny nose"], 
        advice: "Common cold is a mild viral infection of the upper respiratory tract. You may experience coughing, sneezing, sore throat, and runny nose. Rest well, drink warm fluids like tea or soup, and keep yourself warm. Over-the-counter cold medicines can help relieve symptoms. Maintain hygiene to avoid spreading it. If symptoms persist beyond 7-10 days, worsen, or include high fever, consult a healthcare professional."
      },
      { 
        name: "Influenza (Flu)", 
        symptoms: ["fever", "headache", "body aches", "fatigue"], 
        advice: "Influenza is a contagious viral infection causing fever, fatigue, headache, and body aches. Rest completely, drink plenty of fluids, and use fever reducers if needed. Avoid close contact with others. Seek medical care if you have breathing difficulties, high fever, or rapidly worsening symptoms. Annual vaccination is recommended."
      },
      { 
        name: "COVID-19", 
        symptoms: ["fever", "cough", "loss of taste", "loss of smell", "shortness of breath"], 
        advice: "COVID-19 is a contagious respiratory infection. Isolate immediately to prevent spreading, monitor breathing, and rest. Stay hydrated and maintain nutrition. Contact a healthcare provider for testing. Seek urgent medical attention if you experience chest pain, confusion, or severe difficulty breathing."
      },
      { 
        name: "Migraine", 
        symptoms: ["headache", "light sensitivity", "sound sensitivity", "nausea"], 
        advice: "Migraine is a neurological condition causing intense headache, nausea, and sensitivity to light or sound. Rest in a dark, quiet room, stay hydrated, and take migraine-safe pain relievers. Track triggers like stress, certain foods, or sleep deprivation. Frequent migraines should be evaluated by a doctor for preventive treatment options."
      },
      { 
        name: "Food Poisoning", 
        symptoms: ["nausea", "vomiting", "diarrhea", "stomach ache"], 
        advice: "Food poisoning is caused by consuming contaminated food or water. Drink plenty of fluids, use oral rehydration solutions, rest, and eat light meals. Seek medical care if symptoms include high fever, blood in stools, persistent vomiting, or dehydration."
      },
      { 
        name: "Allergy", 
        symptoms: ["sneezing", "runny nose", "itchy eyes"], 
        advice: "Allergy may be triggered by pollen, dust, or other environmental factors. Avoid allergens, keep your environment clean, and use antihistamines if necessary. Persistent or severe allergies should be assessed by an allergy specialist."
      },
      { 
        name: "Stomach Ulcer", 
        symptoms: ["stomach pain", "nausea", "heartburn"], 
        advice: "Stomach ulcers may be caused by excess stomach acid or infections. Avoid spicy or acidic foods, eat smaller meals, rest, and stay hydrated. Over-the-counter antacids can help, but consult a doctor for proper diagnosis and treatment."
      },
      { 
        name: "Diabetes", 
        symptoms: ["frequent urination", "thirst", "fatigue", "weight loss"], 
        advice: "Diabetes affects blood sugar regulation. Monitor blood sugar, drink water, and avoid sugary foods. Consult a healthcare professional for diagnosis, medication, and lifestyle management guidance."
      },
      { 
        name: "Hypertension (High Blood Pressure)", 
        symptoms: ["headache", "nosebleed", "dizziness", "blurred vision"], 
        advice: "High blood pressure may cause headaches, dizziness, and blurred vision. Reduce stress, limit salt intake, stay hydrated, and monitor your blood pressure regularly. Consult a doctor for long-term management strategies."
      },
      { 
        name: "Asthma", 
        symptoms: ["wheezing", "shortness of breath", "cough"], 
        advice: "Asthma is a chronic respiratory condition. Use inhalers as prescribed, avoid triggers like smoke or dust, stay hydrated, and rest. Seek immediate medical help if breathing becomes difficult."
      },
      { 
        name: "Heart Attack", 
        symptoms: ["chest pain", "shortness of breath", "sweating", "nausea"], 
        advice: "These are serious signs of a possible heart attack. Call emergency services immediately. Sit or lie down calmly, and follow medical instructions carefully. Do not attempt physical activity."
      },
      { 
        name: "Skin Allergy/Infection", 
        symptoms: ["rash", "itching", "redness", "swelling"], 
        advice: "Skin allergies or infections cause rash, redness, and itching. Keep the area clean, avoid scratching, and apply cool compresses. See a doctor if it spreads, worsens, or becomes painful."
      },
      { 
        name: "Pneumonia", 
        symptoms: ["cough", "fever", "shortness of breath", "chest pain"], 
        advice: "Pneumonia is a serious lung infection. Seek medical evaluation immediately. Rest, stay hydrated, and take prescribed antibiotics if needed. Monitor your breathing carefully."
      }
    ];

    // Count matching symptoms for each disease
    const diseaseMatches = diseases.map(disease => {
      const matchCount = disease.symptoms.filter(symptom => symptomsArray.includes(symptom)).length;
      return { ...disease, matchCount };
    });

    // Find the disease with the highest number of matches
    const maxMatches = Math.max(...diseaseMatches.map(d => d.matchCount));
    const mostLikelyDiseases = diseaseMatches.filter(d => d.matchCount === maxMatches && d.matchCount > 0);

    const resultDiv = document.getElementById('result');
    if (mostLikelyDiseases.length > 0) {
      // Only show the most likely disease (or multiple if tied)
      resultDiv.innerHTML = mostLikelyDiseases.map(d => `
        <h3>${d.name}</h3>
        <p>${d.advice}</p>
      `).join('');
    } else {
      resultDiv.innerHTML = "<p>No matching disease found. Please check your symptoms or consult a doctor.</p>";
    }
  };
};
