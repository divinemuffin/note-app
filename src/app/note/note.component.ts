import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  x = 'STRING FOR EXAMPLE';
  
  notes: [
    { id: 1, title: "", text: "", time: "", img: "" }
  ]
}
