import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "app-question",
    templateUrl: 'question.component.html',
    styleUrls: ['./question.component.css']
})

export class QuestionComponent {
    @Input() question: any;
    @Input() answer: any;
    @Output() optionEvent = new EventEmitter<string>();
    selectedOption = '';
    handleOptionChange(e: any) {
        this.selectedOption = e.target.value;
        this.optionEvent.emit(this.selectedOption);
    }


}