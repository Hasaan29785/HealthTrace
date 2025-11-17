document.getElementById('symptomForm').onsubmit = function(event) {
  event.preventDefault();
  const input = document.getElementById('symptoms').value.toLowerCase();
  const symptomsArray = input.split(',').map(s => s.trim());

  const diseases = [
    {
      name: "Common Cold",
      symptoms: ["cough", "sore throat", "runny nose"],
      advice: 
        "You may be experiencing a common cold. Rest well and stay hydrated throughout the day. " +
        "Over-the-counter cold medicines can help reduce discomfort. If symptoms persist for more than a week, seek medical guidance. " +
        "Avoid cold drinks and keep yourself warm."
    },
    {
      name: "Influenza (Flu)",
      symptoms: ["fever", "headache", "body aches", "fatigue"],
      advice:
        "Your symptoms may indicate influenza. Get plenty of rest and increase your fluid intake. " +
        "Use fever reducers if needed and avoid physical exertion. Seek medical help if your fever lasts over 48 hours. " +
        "Stay isolated to avoid spreading the infection."
    },
    {
      name: "COVID-19",
      symptoms: ["fever", "cough", "loss of taste", "loss of smell", "shortness of breath"],
      advice:
        "Your symptoms match COVID-19. Immediately isolate yourself and monitor your temperature closely. " +
        "Stay hydrated and rest well while avoiding contact with others. Seek medical attention if breathing becomes difficult. " +
        "Testing is recommended to confirm the condition."
    },
    {
      name: "Migraine",
      symptoms: ["headache", "light sensitivity", "sound sensitivity", "nausea"],
      advice:
        "These symptoms suggest a migraine episode. Rest in a dark, quiet room and avoid bright screens. " +
        "Use migraine-specific medication or pain relievers if needed. Stay hydrated and reduce stress triggers. " +
        "Seek medical help if headaches become frequent or severe."
    },
    {
      name: "Food Poisoning",
      symptoms: ["nausea", "vomiting", "diarrhea", "stomach ache"],
      advice:
        "This may be
