var readlineSync = require("readline-sync");
var chalk = require("chalk");

console.log(chalk.bgRed("Cricket Quiz!! \n\n"));

var userName = readlineSync.question("What's your name ?\n");

console.log(
	"Hey " +
		chalk.yellowBright(userName.toUpperCase()) +
		" Welcome to Cricket Quiz."
);

console.log(chalk.green("\n\nRules of the Game"));
console.log(chalk.green("1. Quiz comprising of three Levels."));
console.log(chalk.green("2. Each Level have five questions."));
console.log(
	chalk.green(
		"3. You should have three right answers out of five to qualify for next Level. "
	)
);
console.log(chalk.green("4. Correct answer will give you two points."));
console.log(
	chalk.green("5. For each worng answer one point will be deducted.")
);

var userYesno = readlineSync.question(
	"\n\nWe are going to start the Quiz :\n(press y to play & n to exit)\n\n"
);

if (userYesno === "y") {
	console.log(
		chalk.bgMagenta("\n\nLet's begin with Level One(India specific) :\n")
	);
	console.log(chalk.bgRed("Level One :"));

	var score = 0;

	function play(question, answer) {
		var userAnswer = readlineSync.question(question);

		if (userAnswer === answer) {
			console.log(chalk.green("\n\nYES!! That's the right answer"));
			score = score + 2;
			console.log("Your current score is : " + chalk.yellow(score));
		} else if (userAnswer === "") {
			console.log(chalk.red("\n\nInvalid Input!!"));
		} else if (userAnswer != "a" && "b" && "c") {
			console.log(chalk.red("\n\nNot from the given options!!"));
		} else {
			console.log(chalk.red("\n\nNO!! That's wrong"));
			score = score - 1;
			console.log("Your current score is : " + chalk.yellow(score));
		}
	}

	var questions = [
		{
			question:
				"\n\nQ.1) In which year India played its First Test Match?\n\na. 1928\nb. 1932 \nc. 1933\nAnswer : ",
			answer: "b",
		},
		{
			question:
				"\n\nQ.2) Who is the present Coach of the Indian Cricket Team?\n\na. Anil Kumble\nb. Sunil Gavaskar \nc. Ravi Shastri\nAnswer : ",
			answer: "c",
		},
		{
			question:
				"\n\nQ.3) Who is known as Run Machine in Cricket?\n\na. Sachin Tendulkar\nb. Virat Kohli \nc. Brian Lara\nAnswer : ",
			answer: "b",
		},
		{
			question:
				"\n\nQ.4)  Name of the First Women’s Captain of the Indian T20 International Team?\n\na. Harmanpreet Kaur\nb. Mithali Raj \nc. Jhulan Goswami\nAnswer : ",
			answer: "b",
		},
		{
			question:
				"\n\nQ.5) Which Cricketer got India’s Highest Civilian Award The Bharat Ratna? \n\na. Virendar Sehwag\nb. VVS Laxman \nc. Sachin Tendulkar\nAnswer : ",
			answer: "c",
		},
		{
			question:
				"\n\nQ.6) Who won the first ever Cricket World Cup in 1975? \n\na. West Indies\nb. Australia \nc. England\nAnswer : ",
			answer: "a",
		},
		{
			question:
				"\n\nQ.7) How many ways are there of getting out? \n\na. 6\nb. 10 \nc. 9\nAnswer : ",
			answer: "b",
		},
		{
			question:
				"\n\nQ.8) Which fast bowler has taken the most test wickets? \n\na. Stuart Broad\nb. Glenn McGrath \nc. James Anderson\nAnswer : ",
			answer: "c",
		},
		{
			question:
				"\n\nQ.9) Who is the only batsman to record 400 runs in an international Test match? \n\na. Steve Smith\nb. Brian Lara \nc. Don Bradman\nAnswer : ",
			answer: "b",
		},
		{
			question:
				"\n\nQ.10) Who bowled the fastest delivery ever of 100.2mph? \n\na. Shoaib Akhtar\nb. Brett Lee \nc. Shaun Tait\nAnswer : ",
			answer: "a",
		},
		{
			question:
				"\n\nQ.11) When did the First IPL take place? \n\na. 2008\nb. 2009 \nc. 2007\nAnswer : ",
			answer: "a",
		},
		{
			question:
				"\n\nQ.12) Who won the First IPL in 2008? \n\na. Rajasthan Royals\nb. Deccan Chargers \nc. Mumbai Indians\nAnswer : ",
			answer: "a",
		},
		{
			question:
				"\n\nQ.13) Who won the most IPLs? \n\na. Chennai SuperKings\nb. Kolkata Knightriders \nc. Mumbai Indians\nAnswer : ",
			answer: "c",
		},
		{
			question:
				"\n\nQ.14) Who has the most number of Runs in IPL History? \n\na. Suresh Raina\nb. Virat Kohli \nc. Rohit Sharma\nAnswer : ",
			answer: "b",
		},
		{
			question:
				"\n\nQ.15) Who hit the longest six in IPL History?\n\na. Albie Morkel\nb. Chris Gayle \nc. Andre Russell\nAnswer : ",
			answer: "a",
		},
	];

	for (var i = 0; i < questions.length - 10; i++) {
		var currentQuestion = questions[i];
		play(currentQuestion.question, currentQuestion.answer);
	}

	if (score >= 4) {
		console.log(
			chalk.bgMagenta(
				"\n\nHurray!! you have completed Level One..\nWelcome to Level Two (International Cricket)\n\n"
			)
		);
		console.log(chalk.bgRed("Level Two :"));

		for (var i = 5; i < questions.length - 5; i++) {
			var currentQuestion = questions[i];
			play(currentQuestion.question, currentQuestion.answer);
		}

		if (score >= 8) {
			console.log(
				chalk.bgMagenta(
					"\n\nHurray!! you have completed Level Two..\nWelcome to Level Three (IPL)\n\n"
				)
			);
			console.log(chalk.bgRed("Level Three :"));

			for (var i = 10; i < questions.length; i++) {
				var currentQuestion = questions[i];
				play(currentQuestion.question, currentQuestion.answer);
			}

			if (score >= 12) {
				console.log(
					chalk.bgRed(
						"\n\nCongratulations! You have scored " +
							score +
							" Well Played " +
							userName.toUpperCase() +
							"\nYou are one of the top scorers of this Cricket Quiz.\n\n"
					)
				);
				console.log(
					"Thank you for Playing. Have a Good Day " + userName.toUpperCase()
				);
			} else {
				console.log("Well done, you played well but could not make it in top ");
			}
		} else {
			console.log(
				"\n\nOOPS! You scored less than six questions. You are not eligible for Level Three.\n Better Luck Next Time"
			);
		}
	} else {
		console.log(
			"\n\nOOPS! You scored less than 3 questions, You are not eligible for Level Two. \nBetter Luck Next Time"
		);
	}
} else if (userYesno === "n") {
	console.log("\n\nHave a Good Day!!");
} else {
	console.log("\n\nInvalid Input...Restart the Quiz and play again.");
}
