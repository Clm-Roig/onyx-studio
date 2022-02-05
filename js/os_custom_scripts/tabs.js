/* Custom Onyx Studio tabs inspired by https://www.w3schools.com/howto/howto_js_tabs.asp */

const openTab = (evt, tabName) => {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        document.getElementById(tabName).style.opacity = 0;
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    setTimeout(() => {
        document.getElementById(tabName).style.opacity = 1;
    }, 10);
    evt.currentTarget.className += " active";
}

document.getElementById("defaultTabOpen").click();
