function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page).classList.add('active');
}

// Typing Effect
const text = "Aspiring Tech Enthusiast | Cloud & Web Developer";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Modal
function openModal(src) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Feedback
document.getElementById("feedbackForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  try {
    await fetch("https://your-backend-url.onrender.com/feedback", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    });

    alert("Feedback sent!");
  } catch {
    alert("Error connecting to server");
  }
});
