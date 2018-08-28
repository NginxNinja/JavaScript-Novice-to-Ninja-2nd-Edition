const quiz = [
	{name: "Superman", realName: "Clark Kent"},
	{name: "Wonderwoman", realName: "Diana Prince"},
	{name: "Batman", realName: "Bruce Wayne"},
	
];

const game = {
		start(quiz){
			this.questions = [...quiz];
			this.score = 0;
			for(const question of this.questions){
				this.question = question;
				this.ask();
			}
			this.gameOver();
		},
		
		ask(){
			const question = `What is ${this.question.name}'s real name?`;
			const response = prompt(question);
			this.check(response);
		},
		
		check(response){
			const answer = this.question.realName;
			if(response === answer){
				alert("Correct!");
				this.score++;
			}
			else{
				alert(`Wrong! The correct answer was ${answer}.`);
			}
		},
		gameOver(){
			alert(`Game Over! You scored ${this.score} point${this.score != 1 ? "s" : ""}.`);
		}
}

game.start(quiz);

/*const quiz = [
	["What is Superman's real name?", "Clark Kent"],
	["What is Wonderwoman's real name?", "Diana Prince"],
	["What is Batman's real name?", "Bruce Wayne"]
];

function start(quiz){
	let score = 0;
	
	//main game loop
	for(const [question, answer] of quiz){
		const response = ask(question);
		check(response, answer);
	}
	
	gameOver();
	
	//function declaration
	function ask(question){
		return prompt(question);
	}
	
	function check(response, answer){
		if(response === answer){
			alert("Correct!");
			score++;
		}
		else{
			alert(`Wrong! The correct answer was ${answer}.`);
		}
	}
	
	function gameOver(){
		alert(`Game Over! You scored ${score} point${score != 1 ? "s" : ""}.`);
	}
}

//start question
start(quiz);*/