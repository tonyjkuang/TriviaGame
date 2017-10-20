var time = 50;
var intervalId;
var timeRunning = false;
var correctAnswer = 0;
var incorrectAnswer = 0;
var totalQuestions = 10;
var answerIn = false;
var questionOneAns;
var questionTwoAns;
var questionThreeAns;
var questionFourAns;
var questionFiveAns;
var questionSixAns;
var questionSevenAns;
var questionEightAns;
var questionNineAns;
var questionTenAns;

function run() {
	if ( !timeRunning ) {
		intervalId = setInterval(decrement, 1000);	
  		timeRunning = true;	
	}
}

function decrement() {
  if ( time > 0 ) {
  	time--;	   
  	$("#displayTime").html("<h2>Time Remaining: " + time + " Seconds</h2>"); 
  } else if ( time === 0 && answerIn === false ) {
  	alert("Time's Up!")
  	checkAnswers();
  }
}  

function checkAnswers() {
	if (questionOneAns === "correct") {
		correctAnswer++;
	} else if (questionOneAns === "incorrect") {
		incorrectAnswer++;
	}
	if ( questionTwoAns === "correct") {
		correctAnswer++;
	} else if (questionTwoAns === "incorrect") {
		incorrectAnswer++;
	}
	if ( questionThreeAns === "correct") {
		correctAnswer++;
	} else if (questionThreeAns === "incorrect") {
		incorrectAnswer++;
	}
	if ( questionFourAns === "correct") {
		correctAnswer++;
	} else if (questionFourAns === "incorrect") {
		incorrectAnswer++;
	}
	if ( questionFiveAns === "correct") {
		correctAnswer++;
	} else if (questionFiveAns === "incorrect") {
		incorrectAnswer++;
	}
	if ( questionSixAns === "correct") {
		correctAnswer++;
	} else if (questionSixAns === "incorrect") {
		incorrectAnswer++;
	}
	if ( questionSevenAns === "correct") {
		correctAnswer++;
	} else if (questionSevenAns === "incorrect") {
		incorrectAnswer++;
	}
	if ( questionEightAns === "correct") {
		correctAnswer++;
	} else if (questionEightAns === "incorrect") {
		incorrectAnswer++;
	}
	if ( questionNineAns === "correct") {
		correctAnswer++;
	} else if (questionNineAns === "incorrect") {
		incorrectAnswer++;
	}
	if ( questionTenAns === "correct") {
		correctAnswer++;
	} else if (questionTenAns === "incorrect") {
		incorrectAnswer++;
	}

	answerIn = true;
	$('#start').hide();
	$('#displayTime').hide();
	$('.container').hide();
	$('#submit').hide();
	$('.results').show();
	$('.results').append("<h2> Correct Answers: " + correctAnswer + " </h2>");
	$('.results').append("<h2> Wrong Answers: " + incorrectAnswer + " </h2>");
	$('.results').append("<h2> Unanswered Questions: " + (totalQuestions - (correctAnswer + incorrectAnswer)) + " </h2>" );
}

$(document).ready(function() {
	$('.container').hide();
	$('.results').hide();
	$("#start").on("click", function(){
		run();
		$("#submit").html('<button class="btn btn-primary btn-block">SUBMIT</button>');
		$('#start').hide();
		$(".container").show();
		$("input[name='question1']").on("click", function(){
			questionOneAns = this.value;
		});

		$("input[name='question2']").on("click", function(){
			questionTwoAns = this.value;
		});

		$("input[name='question3']").on("click", function(){
			questionThreeAns = this.value;
		});

		$("input[name='question4']").on("click", function(){
			questionFourAns = this.value;
		});

		$("input[name='question5']").on("click", function(){
			questionFiveAns = this.value;
		});

		$("input[name='question6']").on("click", function(){
			questionSixAns = this.value;
		});

		$("input[name='question7']").on("click", function(){
			questionSevenAns = this.value;
		});

		$("input[name='question8']").on("click", function(){
			questionEightAns = this.value;
		});

		$("input[name='question9']").on("click", function(){
			questionNineAns = this.value;
		});

		$("input[name='question10']").on("click", function(){
			questionTenAns = this.value;
		});
		$("#submit").on("click", function(){
		checkAnswers();
		answerIn = true;
		});	
	});
})
