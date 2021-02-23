function reveal() {
  decrypted = atob("b255eC1zdHVkaW9AcHJvdG9ubWFpbC5jb20=");
  document.getElementById("reveal-email").style.display = "none";
  // Btn
  document.getElementById("copy-email-btn").style.visibility = "visible";
  document.getElementById("copy-email-btn").style.width = "auto";
  document.getElementById("copy-email-btn").style.opacity = 1;
  // Input hidden
  document.getElementById("contact-email-input").value = decrypted;
  // Link mailto
  document.getElementById("contact-email").href = "mailto:" + decrypted;
  document.getElementById("contact-email").innerHTML = decrypted;
  document.getElementById("contact-email").style.visibility = "visible";
  document.getElementById("contact-email").style.width = "auto";
  document.getElementById("contact-email").style.opacity = 1;
}

function copyEmail() {
  const emailInput = document.getElementById("contact-email-input");
  emailInput.focus();
  emailInput.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
    if (successful) {
      // Change text to confirm then get back to previous text
      document.getElementById("copy-email-btn").innerHTML = "Email copié !";
      setTimeout(function () {
        document.getElementById("copy-email-btn").innerHTML = "Copier";
      }, 2500);
    }
  } catch (err) {
    console.log('Oops, unable to copy email...');
  }
}
