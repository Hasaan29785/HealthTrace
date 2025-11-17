document.getElementById('symptomForm').onsubmit = function(event) {
  event.preventDefault();
  const input = document.getElementById('symptoms').value.toLowerCase();
  const symptomsArray = input.split(',').map(s => s.trim());

  const diseases = [
    {
      name: "Common Cold",
      symptoms: ["cough", "sore throat", "runny nose"],
      advice: "You may be experiencing a common cold. Rest as much as possible and drink warm fluids throughout the day. Over-the-counter cold remedies may help reduce symptoms temporarily. If symptoms last more than a week, consider consulting a healthcare professional."
    },
    {
      name: "Influenza (Flu)",
      symptoms: ["fever", "headache", "body aches", "fatigue"],
      advice: "These symptoms suggest you may have influenza. Rest and stay well hydrated to support your recovery. Medications such as paracetamol can help reduce fever and pain. Seek medical attention if breathing becomes difficult or symptoms worsen after a few days."
    },
    {
      name: "COVID-19",
      symptoms: ["fever", "cough", "loss of taste", "loss of smell", "shortness of breath"],
      advice: "Your symptoms may be related to COVID-19. You should isolate yourself and avoid contact with others. Make sure to stay hydrated and monitor your breathing closely. Contact a healthcare provider to arrange testing and follow official health guidelines."
    },
    {
      name: "Migraine",
      symptoms: ["headache", "light sensitivity", "sound sensitivity", "nausea"],
      advice: "A migraine attack is possible based on your symptoms. Rest in a quiet, dark room and avoid bright lights or loud noises. Drinking water and taking pain relievers may help reduce discomfort. If migraines become frequent, consult a doctor for long-term management."
    },
    {
      name: "Food Poisoning",
      symptoms: ["nausea", "vomiting", "diarrhea", "stomach ache"],
      advice: "These signs could indicate food poisoning. Drink plenty of fluids to prevent dehydration and avoid heavy foods until symptoms improve. Electrolyte drinks can help replace lost minerals. Seek medical help if vomiting is severe or symptoms do not improve within 24 hours."
    },
    {
      name: "Allergy",
      symptoms: ["sneezing", "runny nose", "itchy eyes"],
      advice: "Your symptoms may be caused by an allergic reaction. Try to avoid known triggers and keep your environment clean. Over-the-counter antihistamines can help relieve sneezing and itching. If symptoms persist, consider consulting an allergy specialist."
    },
    {
      name: "Stomach Ulcer",
      symptoms: ["stomach pain", "nausea", "heartburn"],
      advice: "These symptoms may indicate a stomach ulcer. Avoid spicy, acidic, or greasy foods as they may worsen discomfort. Eating smaller meals more frequently can also help. A doctor can provide proper diagnosis and medication such as antacids or proton pump inhibitors."
    },
    {
      name: "Diabetes",
      symptoms: ["frequent urination", "thirst", "fatigue", "weight loss"],
      advice: "These symptoms are commonly associated with diabetes.
