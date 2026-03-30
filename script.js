document.getElementById("feedbackForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  const messageValue = document.getElementById("message").value;

  try {
    const response = await fetch("https://cath-backend.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: nameValue,
        message: messageValue
      })
    });

    if (response.ok) {
      alert("Feedback sent successfully!");
      document.getElementById("feedbackForm").reset();
    } else {
      alert("Failed to send feedback");
    }

  } catch (error) {
    console.log("Error:", error);
    alert("Error connecting to server");
  }
});
