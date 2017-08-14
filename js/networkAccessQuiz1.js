var submitButton = document.getElementById('submit');
var i;
var scoreOutput = document.getElementById('part1Score');
var checkedInputs = [];
var correctAnswers = 0;


/***************** Question 1 Checker ************/
//check the selected answers in the question and add into array
function qnCheck(qnNo) {
    var qnAnswers = document.getElementsByName('question' + qnNo);

    if(qnNo === 1) {
        for (i=0; i<qnAnswers.length; i++) {
         // insert the checked answers in question 1 into an array
         if (qnAnswers[i].checked) {
            checkedInputs.push(qnAnswers[i].value);
            }
        }
    }
    qn1Feedback();
}

function qn1Feedback(){
    //Question One Feedback
    if(checkedInputs.includes("a")){
        correctAnsRestyle(0);
        correctAnswers++;
        } 
    if(checkedInputs.includes("c")){
        correctAnsRestyle(2);
        correctAnswers++;
        }
    if(checkedInputs.includes("b")){
        document.getElementById("explanation1").style.display = 'block';
         document.getElementById("explanation1").innerHTML = "This function is undertaken by the router";
        wrongAnsRestyle(1);
        }
    if(checkedInputs.includes("d")){
        document.getElementById("explanation2").style.display = 'block';
         document.getElementById("explanation2").innerHTML = "This function is undertaken by the transport layer in the Open Systems Interconnection model";
        wrongAnsRestyle(3);
        }  
}

/****************** Question 2 Checker **************/
function qn2Feedback(){
    if(document.getElementById('qn2a').value == 8){
        correctAnsRestyle('2a');
        correctAnswers++;
    } else {
        wrongAnsRestyle('2a');
    }
    if(document.getElementById('qn2b').value == 24){
        correctAnsRestyle('2b');
        correctAnswers++;
    } else {
        wrongAnsRestyle('2b');
    }
    if(document.getElementById('qn2c').value == 0){
        correctAnsRestyle('2c');
        correctAnswers++;
    } else {
        wrongAnsRestyle('2c');
    } 
    if(document.getElementById('qn2d').value == 3){
        correctAnsRestyle('2d');
        correctAnswers++;
    } else {
        wrongAnsRestyle('2d');
    } 
}

/***************** Question 3 Checker ***************/
function qn3Check() {
    var option1 = document.getElementById('option1');
    if(option1.options[option1.selectedIndex].value === 'packets') {
        option1.style.backgroundColor = 'green';
        correctAnswers++;
    } else {
        option1.style.backgroundColor = 'red';
    }
    
    var option2 = document.getElementById('option2');
    if(option2.options[option2.selectedIndex].value === 'segments') {
        option2.style.backgroundColor = 'green';
        correctAnswers++;
    } else {
        option2.style.backgroundColor = 'red';
    }
    
    var option3 = document.getElementById('option3');
    if(option3.options[option3.selectedIndex].value === 'DHCP') {
        option3.style.backgroundColor = 'green';
        correctAnswers++;
    } else {
        option3.style.backgroundColor = 'red';
    }
    
    var option4 = document.getElementById('option4');
    if(option4.options[option4.selectedIndex].value === 'BOOTP') {
        option4.style.backgroundColor = 'green';
        correctAnswers++;
    } else {
        option4.style.backgroundColor = 'red';
    }
}

/***************** Question 4 *************/
var rangeText = document.getElementById('rangeText');
var slider = document.getElementById('rangeInput');
var output = document.getElementById('output');

function outputUpdate(vol) {
    rangeText.innerHTML = vol;
}

function qn4Check() {
    if (slider.value == 7){
        output.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> correct';
        output.style.color = 'green';
        correctAnswers++;
    } else {
        output.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i> wrong';
        output.style.color = 'red';
    }
}

/****** Format the correct answers *****/
function correctAnsRestyle(ansNo) {
    document.getElementById('answer' + ansNo).style.color = "green";
    document.getElementById('answer' + ansNo).style.fontSize = "larger";
}

/****** Format the wrong answers *****/
function wrongAnsRestyle(ansNo) {
    document.getElementById('answer' + ansNo).style.fontSize = "larger";
    document.getElementById('answer' + ansNo).style.color = "red";
}

/****** Button press trigger ******/
submitButton.onclick = function(){
    qnCheck(1);
    qn2Feedback();
    qn3Check();
    qn4Check();

    alert('You have scored: ' + correctAnswers + ' out of 11. Click OK to dismiss this alert and view your performance on each question');
    
    submitButton.disabled = true; // disable the button after click
}