/************** Drag and Drop Test ************/

//record the number of correct answers
var correctAns = 0;
// A array to store div ids for appended divs
var ansMatched = [];

//allow divs to be dropped on this.div
function allowDrop(ev) {
    ev.preventDefault();
}

//on dragging, record the id of the this.div
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function storeMatch(data, ev) {
	//combine the ids of the appended divs and store it in a variable called index
	var index = data + "-"  + ev.target.id;  
	//push index to the array, ansMatched
    ansMatched.push(index);
}

// on drop
function drop(ev) {
	// allow drop
    ev.preventDefault();
	//get the data in the div being dropped (its id)
    var data = ev.dataTransfer.getData("text");
	//get the div using its id
    var child = document.getElementById(data);
	//append the div being dropped as a child of this
    ev.target.appendChild(child);  
	//call the storeMatch function to record the appended div ids
	storeMatch(data, ev);
	//change the textContent of this element to that of the appended div
    ev.target.textContent = child.innerHTML;
	//change the backgroundColor of this element
    ev.target.style.backgroundColor = '#fff';
	//change the font color of this element
    ev.target.style.color = "#000";
}

function checkAns(ev) {
	//check the indexes in the array ansMatched
	//if the length of the array is 4, the user answered all questions
	if (ansMatched.length === 4) {
		for (var i=1; i<=ansMatched.length; i++) {
			//if an index has a correct match id
			if(ansMatched.includes('step'+i + '-drop'+i)) {
				//change the backgroundColor of the div to lightgreen and increment the number of correct answers
			   document.getElementById('drop'+i).style.backgroundColor = 'lightgreen';
			correctAns++;
			} else {
				//else change the backgroundColor of the div to red
				document.getElementById('drop'+i).style.backgroundColor = 'red';
			}
		}
		//grade the test
		grading();
	} else {
		//else, the user didn't answered all questions
		alert('Complete all steps before checking');
	}
}


function grading(){
	//if the number of correct answers is equal to 4 congratulate the user else ask them to try again
	if(correctAns === 4){
		
		document.getElementById('res').innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> Excellent: You correctly identified the steps';
	} else {
		document.getElementById('res').innerHTML = '<i class="fa fa-times" aria-hidden="true"></i> Fail: Refresh the page to try again';
	}
}


