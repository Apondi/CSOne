//click on the default topic, introduction, when the page loads
document.getElementById("introduction").click();

function openTab(evt, tabName) {
    // Declare variables
    var i, tabcontent, tablinks;
    
    // Hide tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function quizTab(evt, tabName){
    /********  Network Access Quiz Tabs  **********/
    // Hide tab content
    var i, quizContent, tlinks;
    quizContent = document.getElementsByClassName("nAccessContent");
    for (i = 0; i < quizContent.length; i++) {
        quizContent[i].style.display = "none";
    }
    
    // Remove active class from tlinks
    tlinks = document.getElementsByClassName("tlinks");
    for (i = 0; i < tlinks.length; i++) {
        tlinks[i].className = tlinks[i].className.replace(" active", "");
    }
    
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
