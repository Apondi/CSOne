var previousButton = document.getElementById('prev-question-button');
var nextButton = document.getElementById('next-question-button')

//the question number div
var questionNumber = document.getElementById('questionNumber');


//the results divs
var result1 = document.getElementById('result1');
var result2 = document.getElementById('result2');
var result3 = document.getElementById('result3');
var result4 = document.getElementById('result4');
var result5 = document.getElementById('result5');
var result6 = document.getElementById('result6');

//Get all elements with the class protocol-questions
var questions=document.getElementsByClassName('protocol-questions');

function hideElements(){
    //Loop through all elements
    for(var i=1; i<questions.length; i++){
        //Hide all elements except the first
        questions[i].style.display='none';        
    }
}

//execute the hideElements fnction on page load
hideElements();

var currentQuestion = 0;

//function to scroll to the next question
function displayNext(){
    if(currentQuestion < questions.length-1){ 
    questions[currentQuestion].style.display = 'none';
    questions[currentQuestion+1].style.display = 'block';
    currentQuestion++;
    questionNumber.innerHTML = currentQuestion+1 + ' out of ' + questions.length;
    }
}

//function to scroll to the previous question
function displayPrevious(){
    if(currentQuestion > 0){ 
    questions[currentQuestion].style.display = 'none';
    questions[currentQuestion-1].style.display = 'block';
    currentQuestion--;
    questionNumber.innerHTML = currentQuestion+1 + ' out of ' + questions.length;
    }
}

// get all the input elements in the document
var inputAnswers = document.getElementsByTagName('input');

//for every inputAnswer clicked check which input is clicked
for(var i = 0; i < inputAnswers.length; i++){
    inputAnswers[i].onclick = function() { 
        //get the id of the clicked input
        var theAnswer = event.target.getAttribute('id');
        
        /********** Question 1: **********/
        // if the input clicked has the correct answer...
        if(theAnswer == 'rad1a'){
            // output the feedback in the result div
            result1.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>Correct Answer</h3>'
            // change the result div color to lightgreen
            result1.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad1b'){
            // output the feedback in the result div
            result1.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>Domain Name Servers (DNS) are the equivalent of a phone book. They maintain a directory of domain names and translate them to Internet Protocol addresses.</p>'
            // change the result div color to red
            result1.style.backgroundColor = 'red';
        } else if(theAnswer == 'rad1c'){
            // output the feedback in the result div
            result1.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>ARP is a protocol used by the Internet Protocol (IP), specifically IPv4, to map IP network addresses to the hardware addresses used by a data link protocol.</p>'
            // change the result div color to red
            result1.style.backgroundColor = 'red';
        } else if(theAnswer == 'rad1d'){
            // output the feedback in the result div
            result1.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>The Internet Group Management Protocol (IGMP) is a communications protocol used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships</p>'
            // change the result div color to red
            result1.style.backgroundColor = 'red';
        }
        
        /********** Question 2: **********/
        if(theAnswer == 'rad2c'){
            // output the feedback in the result div
            result2.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>Correct Answer</h3>'
            // change the result div color to lightgreen
            result2.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad2a'){
            // output the feedback in the result div
            result2.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>Domain Name Servers (DNS) are the equivalent of a phone book. They maintain a directory of domain names and translate them to Internet Protocol addresses.</p>'
            // change the result div color to red
            result2.style.backgroundColor = 'red';
        } else if(theAnswer == 'rad2b'){
            // output the feedback in the result div
            result2.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>This is an application protocol for distributed, collaborative, and hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web.</p>'
            // change the result div color to red
            result2.style.backgroundColor = 'red';
        } else if(theAnswer == 'rad2d'){
            // output the feedback in the result div
            result2.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>Port Address Translation (PAT), is an extension to network address translation (NAT) that permits multiple devices on a local area network (LAN) to be mapped to a single public IP address. The goal of PAT is to conserve IP addresses.</p>'
            // change the result div color to red
            result2.style.backgroundColor = 'red';
        }
        
        
        /********** Question 3: **********/
        if(theAnswer == 'rad3b'){
            // output the feedback in the result div
            result3.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>Correct Answer</h3>'
            // change the result div color to lightgreen
            result3.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad3a'){
            // output the feedback in the result div
            result3.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>The Transmission Control Protocol (TCP) is one of the main protocols of the Internet protocol suite. It originated in the initial network implementation in which it complemented the Internet Protocol (IP).</p>'
            // change the result div color to red
            result3.style.backgroundColor = 'red';
        } else if(theAnswer == 'rad3c'){
            // output the feedback in the result div
            result3.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>Dynamic Host Configuration Protocol (DHCP) is a client/server protocol that automatically provides an Internet Protocol (IP) host with its IP address and other related configuration information such as the subnet mask and default gateway.</p>'
            // change the result div color to red
            result3.style.backgroundColor = 'red';
        } else if(theAnswer == 'rad3d'){
            // output the feedback in the result div
            result3.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>ARP is a protocol used by the Internet Protocol (IP), specifically IPv4, to map IP network addresses to the hardware addresses used by a data link protocol.</p>'
            // change the result div color to red
            result3.style.backgroundColor = 'red';
        }
        
        
        /********** Question 4: **********/
        if(theAnswer == 'rad4b'){
            // output the feedback in the result div
            result4.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>Correct Answer</h3>'
            // change the result div color to lightgreen
            result4.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad4a'){
            // output the feedback in the result div
            result4.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3>'
            // change the result div color to red
            result4.style.backgroundColor = 'red';
        } else if(theAnswer == 'rad4c'){
            // output the feedback in the result div
            result4.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3>'
            // change the result div color to red
            result4.style.backgroundColor = 'red';
        } else if(theAnswer == 'rad4d'){
            // output the feedback in the result div
            result4.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3>'
            // change the result div color to red
            result4.style.backgroundColor = 'red';
        }
        
        /********** Question 5: **********/
        if(theAnswer == 'rad5b'){
            // output the feedback in the result div
            result5.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>Correct Answer</h3>'
            // change the result div color to lightgreen
            result5.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad5a'){
            // output the feedback in the result div
            result5.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>The File Transfer Protocol (FTP) is a standard network protocol used for the transfer of computer files between a client and server on a computer network.</p>'
            // change the result div color to red
            result5.style.backgroundColor = 'red';
        } else if(theAnswer == 'rad5c'){
            // output the feedback in the result div
            result5.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage.</p>'
            // change the result div color to red
            result5.style.backgroundColor = 'red';
        } else if(theAnswer == 'rad5d'){
            // output the feedback in the result div
            result5.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>Telnet is a protocol used on the Internet or local area networks to provide a bidirectional interactive text-oriented communication facility using a virtual terminal connection.</p>'
            // change the result div color to red
            result5.style.backgroundColor = 'red';
        }
        
        /********** Question 6: **********/
        if(theAnswer == 'rad6a'){
            // output the feedback in the result div
            result6.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>Correct Answer</h3>'
            // change the result div color to lightgreen
            result6.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad6b'){
            // output the feedback in the result div
            result6.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>The address resolution protocol (arp) is a protocol used by the Internet Protocol (IP) [RFC826], specifically IPv4, to map IP network addresses to the hardware addresses used by a data link protocol.</p>'
            // change the result div color to red
            result6.style.backgroundColor = 'red';
        } else if(theAnswer == 'rad6c'){
            // output the feedback in the result div
            result6.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>UDP (User Datagram Protocol) is an alternative communications protocol to Transmission Control Protocol (TCP) used primarily for establishing low-latency and loss tolerating connections between applications on the Internet.</p>'
            // change the result div color to red
            result6.style.backgroundColor = 'red';
        } else if(theAnswer == 'rad6d'){
            // output the feedback in the result div
            result6.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>The Transmission Control Protocol (TCP) is one of the main protocols of the Internet protocol suite. It originated in the initial network implementation in which it complemented the Internet Protocol (IP). Therefore, the entire suite is commonly referred to as TCP/IP.</p>'
            // change the result div color to red
            result6.style.backgroundColor = 'red';
        }
    };
    }



