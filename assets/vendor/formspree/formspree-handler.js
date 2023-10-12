document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".php-email-form");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      // Capture form data
      const formData = new FormData(form);
      
      // Fetch API to send the form data
      fetch("https://formspree.io/f/mpzgkdbw", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          // Handle success: you can redirect or display a success message
          console.log("Form successfully submitted");
          document.querySelector(".sent-message").textContent = "Your message has been sent. Thank you!";
          document.querySelector(".sent-message").style.display = "block";
        } else {
          // Handle errors
          console.log("Error submitting form");
          document.querySelector(".error-message").textContent = "An error occurred. Please try again.";
          document.querySelector(".error-message").style.display = "block";
        }
      })
      .catch(error => {
        // Network or other fetch-related errors
        console.log("Fetch error: ", error);
        document.querySelector(".error-message").textContent = "An error occurred. Please try again.";
        document.querySelector(".error-message").style.display = "block";
      });
    });
  });