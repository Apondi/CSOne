//create variables to store html containers
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//an array to hold the questions and answers
var questions = [
    {
        question: "What is a network?",
        answers: {
            a: "One computer",
            b: "Two or more indipendent computers",
            c: "Two or more connected computers",
            d: "Series of telephone lines"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the key benefit of working in a network?",
        answers: {
            a: "Sharing information and resources",
            b: "It's cheap",
            c: "Security",
            d: "All of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the main problem with large networks?",
        answers: {
            a: "Logging on",
            b: "Sharing information",
            c: "Viruses and Mailware Attacks",
            d: "Complexity"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the three main types of network topologies?",
        answers: {
            a: "LAN, WAN and MAN",
            b: "Bus, Ring and Star",
            c: "LAN, Ring and Star",
            d: "Bus, WAN and LAN"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the main reason why ring networks are fast?",
        answers: {
            a: "High speed cables",
            b: "Top of the range computer nodes",
            c: "Data travels in only one direction",
            d: "All of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "What is LAN?",
        answers: {
            a: "Local Area Network",
            b: "A collection of computers and peripherals connected to a server within a distinct geographic location e.g an office",
            c: "A collection of computers and network resources connected via a network over a wide geographic area",
            d: "Local Access Network"
        },
        correctAnswer: "b"
    }
];

//function to display questions
function showQuestions(questions, quizContainer) {
    //array to store the questions and answer choices
    var output = [];
    var answers;

    //for each question..
    for (var i=0; i<questions.length;i++){
        //reset the list of answers
        answers = [];

        //for each available answer to this question...
        for(letter in questions[i].answers) {
            // add a html radion button
            answers.push(
                '<label>' + '<input type="radio" name="question'+i+'" value="'+letter+'">' + questions[i].answers[letter] + 
                '</label>'
            );
        }

        //add the question and its answers to the output
        output.push(
            '<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('')+ '</div>'
        );
    }

    //combine the ouput list into one string of HTML and display on the page
    quizContainer.innerHTML = output.join('');
}

showQuestions(questions, quizContainer);

function showResults(questions, quizContainer,resultsContainer){
    //gather answer from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    //keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    //for each question
    for(var i = 0; i<questions.length; i++){
        //find the selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked')||{}).value;

        //if answer is correct
        if(userAnswer == questions[i].correctAnswer){
            //increment the number of correct answers
            numCorrect++;
            //color the answer green
            answerContainers[i].style.color = 'lightgreen';
        } else { // if the answer is wrong
            //color the answers red
            answerContainers[i].style.color = 'red';
        }
    }
    
    if(numCorrect > questions.length/2) {
        resultsContainer.innerHTML = 'Pass: You have scored ' + numCorrect + ' out of ' + questions.length;
        resultsContainer.style.color = 'lightgreen'
    } else {
        resultsContainer.innerHTML = 'Fail: You have scored ' + numCorrect + ' out of ' + questions.length + '. Try Again';
        resultsContainer.style.color = 'red'
    }
    
}

submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}