document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Resume Download Functionality
    const resumeButton = document.querySelector(".resume-btn");
    if (resumeButton) {
        resumeButton.addEventListener("click", function () {
            const link = document.createElement("a");
            link.href = "assets/Resume.pdf"; // Path to resume file
            link.download = "Kishore_Resume.pdf"; // Download file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // EmailJS Integration for Contact Form
    emailjs.init("6fuksLbAs8CibxALy"); // Replace with your EmailJS User ID

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Send email via EmailJS
            emailjs.send("service_solzmhw", "template_ggn2sit", {
                from_name: name,
                from_email: email,
                message: message
            }).then(
                function (response) {
                    alert("Message sent successfully!");
                    contactForm.reset(); // Clear form fields
                },
                function (error) {
                    alert("Failed to send message. Please try again.");
                }
            );
        });
    }
});
