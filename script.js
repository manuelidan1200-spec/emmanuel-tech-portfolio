const currentYear = new Date().getFullYear();

document
    .querySelectorAll(".site-footer span:last-child, .contact-bottom span:last-child")
    .forEach((copyright) => {
        if (copyright.textContent.trim().startsWith("©")) {
            copyright.textContent = `© ${currentYear}`;
        }
    });

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        const recipient = contactForm.getAttribute("action");

        if (!recipient || !recipient.startsWith("mailto:")) {
            return;
        }

        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = String(formData.get("Name") ?? "").trim();
        const email = String(formData.get("Email") ?? "").trim();
        const message = String(formData.get("Message") ?? "").trim();
        const subject = `Portfolio message from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

        window.location.href = `${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}
