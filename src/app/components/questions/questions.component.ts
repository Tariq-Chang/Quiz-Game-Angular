import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-questions',
    templateUrl: 'questions.component.html',
    styleUrls: ['questions.component.css'],
})
export class QuestionsComponent {
    title = 'Quiz-Game-Angular';
    currentIndex: number = 0;

    constructor(private _router: Router) { }
    data = [
        {
            question: "javascript is ______ language?",
            option1: "multithreaded",
            option2: "single threaded",
            option3: "Both A and B",
            option4: "None",
            answer: "single threaded",
        },
        {
            question: "React is javascript ______ ?",
            option1: "library",
            option2: "framework",
            option3: "Both A and B",
            option4: "None",
            answer: "library"
        },
        {
            question: "If you type the following code in the console window, what result will you get? 3 > 2 > 1 === false;",
            option1: "true",
            option2: "false",
            option3: "undefined",
            option4: "error",
            answer: "true",
        },
        {
            question: "JavaScript is a ___ -side programming language.",
            option1: "client",
            option2: "server",
            option3: "both",
            option4: "none",
            answer: "both",
        },
        {
            question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
            option1: "alertBox(“Hello DataFlair!”);",
            option2: "alert(Hello DataFlair!);",
            option3: "msgAlert(“Hello DataFlair!”);",
            option4: "alert(“Hello DataFlair!”);",
            answer: "alert(“Hello DataFlair!”);",
        },
        {
            question: "How do you find the minimum of x and y using JavaScript?",
            option1: "min(x,y);",
            option2: "Math.min(x,y)",
            option3: "Math.min(xy)",
            option4: "min(xy);",
            answer: "Math.min(x,y)",
        },
        {
            question: "Which JavaScript label catches all the values, except for the ones specified?",
            option1: "catch",
            option2: "label",
            option3: "try",
            option4: "default",
            answer: "default",
        },
        {
            question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
            option1: "if(x 2)",
            option2: "if(x = 2)",
            option3: "if(x == 2)",
            option4: "if(x != 2 )",
            answer: "if(x == 2)",
        },
        {
            question: "Which of the following function of String object returns the calling string value converted to lower case?",
            option1: "toLocaleLowerCase()",
            option2: "toLowerCase()",
            option3: "toString()",
            option4: "substring()",
            answer: "toLowerCase()",
        },
        {
            question: "Which of the following function of Array object calls a function for each element in the array?",
            option1: "concat()",
            option2: "every()",
            option3: "filter()",
            option4: "forEach()",
            answer: "forEach()",
        },
    ]
    currentQuestion: any = this.data[this.currentIndex];
    selectedOption = '';
    correct: number = 0;
    handleNextButton() {
        if (this.selectedOption === this.currentQuestion.answer) {
            this.correct++;
            this.selectedOption = ''
            console.log(this.correct);
        }
        if (this.currentIndex + 2 <= this.data.length) {
            this.currentIndex++;
            this.currentQuestion = this.data[this.currentIndex]
        } else {
            this._router.navigateByUrl('/result')
        }
    }

    handleSelectedOption(selectedOption: any) {
        this.selectedOption = selectedOption;
    }
}
