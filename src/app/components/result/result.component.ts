import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-result',
    template: `<div style=" display:flex; flex-direction:column; align-items:center; justify-content:center; height:80vh">
        <h1 style="color:seagreen; font-size:48px;">Game Over</h1>
    <button (click)="handleRestartButton()" style="width:22%; padding:10px; background:#010101; color:white; border:none; border-radius:5px; cursor:pointer">Restart</button>
    
    </div>`,
    styles: []
})
export class ResultComponent {

    constructor(private _router: Router) { }
    handleRestartButton() {
        this._router.navigateByUrl('/');
    }
}