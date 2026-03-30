document.getElementById("feedbackForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const nameValue = document.getElementById("name").value;
  const messageValue = document.getElementById("message").value;

  try {
    const response = await fetch("https://cath-backend.onrender.com/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: nameValue,
        message: messageValue
      })
    });

    const data = await response.text();
    alert(data);

    document.getElementById("feedbackForm").reset();

  } catch (error) {
    console.log("Error:", error);
    alert("Error connecting to server");
  }
});
