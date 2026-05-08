/* =========================================================
   EMAILJS INIT
========================================================= */

(function () {
  emailjs.init(
    "Jw3bSMUMAWp_0ZP_6"
  );
})();

/* =========================================================
   FORM ELEMENTS
========================================================= */

const form =
  document.getElementById("contactForm");

const formSuccess =
  document.getElementById("formSuccess");

/* =========================================================
   FORM SUBMIT
========================================================= */

form.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    const name =
      document
        .getElementById("nameIn")
        .value
        .trim();
    const email =
      document
        .getElementById("emailIn")
        .value
        .trim();
    const subject =
      document
        .getElementById("subjectIn")
        .value
        .trim();
    const message =
      document
        .getElementById("msgIn")
        .value
        .trim();

    /* VALIDATION */

    if (!name) {
      alert("Please enter your name");
      return;
    }
    if (!email) {
      alert("Please enter your email");
      return;
    }
    const pattern =
      /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(pattern)) {
      alert("Enter valid email");
      return;
    }
    if (!subject) {
      alert("Please enter subject");
      return;
    }
    if (!message) {
      alert("Please enter message");
      return;
    }

    /* BUTTON */

    const btn =
      form.querySelector(".btn-primary");
    const original =
      btn.innerHTML;
    btn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    /* SEND EMAIL */

    emailjs.send(
      "service_jemit",
      "template_d6a10ze",
      {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      }
    )

    .then(() => {
      btn.innerHTML = original;
      btn.disabled = false;
      form.reset();
      formSuccess.classList.add(
        "show"
      );

      setTimeout(() => {
        formSuccess.classList.remove(
          "show"
        );
      }, 4000);
    })

    .catch((error) => {
      console.log(error);
      alert("Failed to send");
      btn.innerHTML = original;
      btn.disabled = false;
    });
  }
);