import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() paginationInfo: any;
  @Output() newPageEmitter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  nextPage(page: any){
    this.newPageEmitter.emit(page)
  }

}
