// script.js — fixed and made more robust
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('symptomForm');
  const inputEl = document.getElementById('symptoms');
  const adviceEl = document.getElementById('advice');

  const diseases = [
    {
      name: "Common Cold",
      symptoms: ["cough", "sore throat", "runny nose"],
      advice:
        "You may be experiencing a common cold. Rest well and drink plenty of fluids. " +
        "Use over-the-counter cold medicines to ease symptoms if needed. " +
        "Avoid close contact with others while symptomatic to prevent spread. " +
        "See a doctor if symptoms worsen or last longer than 7 days."
    },
    {
      name: "Influenza (Flu)",
      symptoms: ["fever", "headache", "body aches", "fatigue"],
      advice:
        "Your symptoms may indicate influenza. Rest and keep well hydrated. " +
        "Use fever reducers or pain relievers as appropriate. " +
        "Avoid strenuous activity until recovery. " +
        "Seek medical help if fever persists or breathing becomes difficult."
    },
    {
      name: "COVID-19",
      symptoms: ["fever", "cough", "loss of taste", "loss of smell", "shortness of breath"],
      advice:
        "Your symptoms match possible COVID-19. Isolate from others and monitor symptoms closely. " +
        "Stay hydrated and rest; use antipyretics if you have a fever. " +
        "Get tested where testing is available to confirm. " +
        "Seek immediate care if you develop breathing difficulties."
    },
    {
      name: "Migraine",
      symptoms: ["headache", "light sensitivity", "sound sensitivity", "nausea"],
      advice:
        "These symptoms suggest a migraine. Rest in a quiet, dark room and avoid screens. " +
        "Use migraine-specific medication or OTC pain relief if recommended for you. " +
        "Stay hydrated and avoid known triggers. " +
        "See a doctor if headaches become frequent or severe."
    },
    {
      name: "Food Poisoning",
      symptoms: ["nausea", "vomiting", "diarrhea", "stomach ache"],
      advice:
        "This may be food poisoning. Sip clear fluids and consider oral rehydration solutions. " +
        "Avoid solid or fatty foods until vomiting subsides. " +
        "Rest and monitor for signs of dehydration. " +
        "Seek medical help if severe dehydration, blood in stool, or high fever occur."
    },
    {
      name: "Allergy",
      symptoms: ["sneezing", "runny nose", "itchy eyes"],
      advice:
        "These symptoms suggest an allergic reaction. Avoid the suspected allergen when possible. " +
        "Over-the-counter antihistamines can reduce symptoms. " +
        "Keep windows closed on high-pollen days and wash hands after being outdoors. " +
        "Seek urgent care if you experience difficulty breathing or throat swelling."
    },
    {
