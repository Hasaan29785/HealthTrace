window.onload = function() {
  document.getElementById('symptomForm').onsubmit = function(event) {
    event.preventDefault();
    const input = document.getElementById('symptoms').value.toLowerCase();
    const symptomsArray = input.split(',').map(s => s.trim());

    const diseases = [
      {
        name: "Common Cold",
        symptoms: ["cough", "sore throat", "runny nose"],
        advice: "You may have a common cold. It's caused by a viral infection of the upper respiratory tract. Rest is crucial, and staying hydrated helps your immune system. Warm fluids like tea or soup can ease throat irritation. Over-the-counter cold medicines may help with symptoms. Avoid spreading the virus by washing hands frequently and covering your mouth when coughing. If symptoms last more than 7–10 days or worsen, consult a healthcare professional."
      },
      {
        name: "Influenza (Flu)",
        symptoms: ["fever", "headache", "body aches", "fatigue"],
        advice: "Your symptoms suggest influenza. This is a contagious viral infection that can lead to severe fatigue and body aches. Rest completely and drink plenty of fluids. Fever reducers such as paracetamol or ibuprofen may help. Avoid close contact with others to prevent spreading. If breathing becomes difficult, or symptoms worsen, seek medical attention immediately. Annual flu vaccination is recommended to prevent future infections."
      },
      {
        name: "COVID-19",
        symptoms: ["fever", "cough", "loss of taste", "loss of smell", "shortness of breath"],
        advice: "These symptoms may indicate COVID-19. It's a contagious respiratory infection that can range from mild to severe. Isolate from others immediately and monitor your breathing closely. Stay hydrated, rest, and maintain nutrition. Get tested for confirmation and follow public health guidelines. Seek urgent medical care if you experience difficulty breathing, persistent chest pain, or confusion. Notify close contacts and maintain hygiene precautions."
      },
      {
        name: "Migraine",
        symptoms: ["headache", "light sensitivity", "sound sensitivity", "nausea"],
        advice: "You may be experiencing a migraine, which is a neurological condition causing severe headaches, often accompanied by nausea and light/sound sensitivity. Rest in a quiet, dark room and avoid bright lights or loud noises. Hydrate well and consider over-the-counter migraine-specific medications. Track triggers to help prevent future attacks. If migraines are frequent, consult a neurologist for preventive therapy."
      },
      {
        name: "Food Poisoning",
        symptoms: ["nausea", "vomiting", "diarrhea", "stomach ache"],
        advice: "These symptoms suggest food poisoning, usually caused by consuming contaminated food or water. Drink plenty of fluids to prevent dehydration and consider oral rehydration solutions. Avoid solid, heavy meals until symptoms improve. Rest is important. Seek medical attention if you have high fever, blood in stools, or symptoms lasting more than 24 hours. Good food hygiene can prevent recurrence."
      },
      {
        name: "Allergy",
        symptoms: ["sneezing", "runny nose", "itchy eyes"],
        advice: "Your symptoms may indicate an allergy. This could be triggered by pollen, dust, or other environmental factors. Avoid allergens whenever possible. Antihistamines can relieve symptoms. Keeping your home clean and using air filters can help. If symptoms persist, consult an allergy specialist to identify triggers and develop a management plan."
      }
    ];

    // Find the most likely matching disease(s)
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
