import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Clear previous status
  status.textContent = "";
  status.className = "form-status";

  // Disable button while sending
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  // Collect data
  const data = {
  name: form.name.value.trim(),
  email: form.email.value.trim(),
  phone: form.phone.value.trim(),
  country: form.country.value,
  level: form.level.value,
  intake: form.intake.value.trim(),
  message: form.message.value.trim(),
  createdAt: serverTimestamp()
};


  try {
    await addDoc(collection(db, "contacts"), data);
    status.textContent = "✅ Thank you! Your message has been sent. We'll contact you soon.";
    status.classList.add("success");
    form.reset();
  } catch (error) {
    console.error("Error saving message:", error);
    status.textContent = "❌ Something went wrong. Please try again or email us directly.";
    status.classList.add("error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }
});
