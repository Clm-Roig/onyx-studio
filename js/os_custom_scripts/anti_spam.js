function reveal() {
  decrypted = atob("b255eC1zdHVkaW9AcHJvdG9ubWFpbC5jb20=");
  document.getElementById("reveal-email").style.display = "none";
  // Btn
  document.getElementById("copy-email-btn").style.visibility = "visible";
  document.getElementById("copy-email-btn").style.width = "auto";
  document.getElementById("copy-email-btn").style.opacity = 1;
  // Input hidden
  document.getElementById("contact-email-span").value = decrypted;
  // Link mailto
  document.getElementById("contact-email").href = "mailto:" + decrypted;
  document.getElementById("contact-email").innerHTML = decrypted;
  document.getElementById("contact-email").style.visibility = "visible";
  document.getElementById("contact-email").style.width = "auto";
  document.getElementById("contact-email").style.opacity = 1;
}

const copyEmail = async () => {
  const emailValue = document.getElementById("contact-email-span").value;
  try {
    console.log(emailValue);
    await navigator.clipboard.writeText(emailValue);
    console.log("Content copied to clipboard");
    // Change text to confirm then get back to previous text
    document.getElementById("copy-email-btn").innerHTML = "Email copié !";
    setTimeout(function () {
      document.getElementById("copy-email-btn").innerHTML = "Copier";
    }, 2500);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
