import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  tags: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.tags.push('Testing');
  }

  noCreateTag(tagName: string) {
    if(tagName.trim().length <= 0) return;
    this.tags.push(tagName);
  }

  onDeleteTag(tagIndex: number) {
    this.tags.splice(tagIndex, 1);
  }

}
