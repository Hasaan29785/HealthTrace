document.getElementById('symptomForm').onsubmit = function(event) {
  event.preventDefault();
  const input = document.getElementById('symptoms').value.toLowerCase();
  const symptomsArray = input.split(',').map(s => s.trim());

  const diseases = [
    {
      name: "Common Cold",
      symptoms: ["cough", "sore throat", "runny nose"],
      advice: "You may be experiencing a common cold. Rest well and drink warm fluids. Over-the-counter cold medicines can help reduce symptoms. If symptoms last longer than a week, consider consulting a healthcare professional."
    },
    {
      name: "Influenza (Flu)",
      symptoms: ["fever", "headache", "body aches", "fatigue"],
      advice: "These symptoms suggest you may have the flu. Get plenty of rest and drink fluids. Fever reducers such as paracetamol may help. If you experience breathing difficulty or symptoms worsen, seek medical care immediately."
    },
    {
      name: "COVID-19",
      symptoms: ["fever", "cough", "loss of taste", "loss of smell", "shortness of breath"],
      advice: "Your symptoms might be related to COVID-19. You should isolate from others and monitor your breathing. Drink fluids and rest as much as possible. Contact a healthcare provider for testing and follow official safety guidelines."
    },
    {
      name: "Migraine",
      symptoms: ["headache", "light sensitivity", "sound sensitivity", "nausea"],
      advice: "You may be experiencing a migraine. Rest in a quiet, dark place and avoid bright lights. Drink water and consider taking migraine-safe pain relievers. If migraines occur often, consult a doctor for preventive treatment."
    },
    {
      name: "Food Poisoning",
      symptoms: ["nausea", "vomiting", "diarrhea", "stomach ache"],
      advice: "These symptoms suggest food poisoning. Drink lots of water to prevent dehydration and avoid heavy meals until symptoms improve. Oral rehydration solutions can help. Seek medical care if symptoms last more than 24 hours or worsen."
    },
    {
      name: "Allergy",
      symptoms: ["sneezing", "runny nose", "itchy eyes"],
      advice: "Your symptoms may be due to allergies. Try to avoid allergens and keep your surroundings clean. Antihistamines can help reduce symptoms. If allergies persist, consult an allergy specialist."
    },
    {
      name: "Stomach Ulcer",
      symptoms: ["stomach pain", "nausea", "heartburn"],
      advice: "These symptoms may indicate a stomach ulcer. Avoid spicy or acidic foods and eat smaller meals. Over-the-counter antacids may help, but a doctor should confirm the condition for proper treatment."
    },
    {
      name: "Diabetes",
      symptoms: ["frequent urination", "thirst", "fatigue", "weight loss"],
      advice: "These symptoms can be signs of diabetes. It’s important to get your blood sugar levels checked soon. Drink water and avoid sugary foods. A healthcare professional can guide you on diagnosis and treatment."
    },
    {
      name: "Hypertension (High Blood Pressure)",
      symptoms: ["headache", "nosebleed", "dizziness", "blurred vision"],
      advice: "High blood pressure may be causing your symptoms. Reduce stress and avoid salty foods. Rest and stay hydrated. Have your blood pressure checked as soon as possible and follow medical advice."
    },
    {
      name: "Asthma",
      symptoms: ["wheezing", "shortness of breath", "cough"],
      advice: "These symptoms may indicate asthma. Use your inhaler if you have one. Avoid smoke, dust, and cold air. If breathing becomes difficult or symptoms do not improve, seek immediate medical help."
    },
    {
      name: "Heart Attack",
      symptoms: ["chest pain", "shortness of breath", "sweating", "nausea"],
      advice: "These are serious signs of a possible heart attack. Seek emergency medical help immediately. Do not attempt physical activity. Stay calm until help arrives."
    },
    {
      name: "Skin Allergy/Infection",
      symptoms: ["rash", "itching", "redness", "swelling"],
      advice: "Your symptoms suggest a skin allergy or infection. Keep the area clean and avoid scratching. Cool compresses may reduce irritation. See a doctor if the rash spreads or becomes painful."
    },
    {
      name: "Arthritis",
      symptoms: ["joint pain", "swelling", "stiffness"],
      advice: "These symptoms may indicate arthritis. Try gentle stretching and avoid overusing the affected joint. Warm compresses may help. Consult a doctor for proper treatment options."
    },
    {
      name: "Anemia",
      symptoms: ["fatigue", "weakness", "pale skin", "shortness of breath"],
      advice: "These symptoms are commonly linked to anemia. Eat iron-rich foods like spinach or meat. A blood test is necessary to confirm it. Consult a doctor for proper treatment."
    },
    {
      name: "Spinal/Nerve Issue",
      symptoms: ["back pain", "numbness", "tingling", "leg pain"],
      advice: "These symptoms might be related to a spinal or nerve issue. Avoid heavy lifting and try gentle stretching. Rest if possible. If pain worsens, seek medical evaluation."
    },
    {
      name: "Meningitis",
      symptoms: ["fever", "vomiting", "neck pain", "headache", "stiff neck"],
      advice: "These symptoms could indicate meningitis, a serious condition. Seek emergency medical help immediately. Keep lights dim and avoid movement until you get medical attention."
    },
    {
      name: "Tuberculosis",
      symptoms: ["persistent cough", "weight loss", "fever", "night sweats"],
      advice: "These symptoms may be signs of tuberculosis. A medical test is required for diagnosis. Avoid close contact with others and consult a healthcare provider immediately."
    },
    {
      name: "Pneum
