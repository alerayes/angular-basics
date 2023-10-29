import { 
  Component, 
  Input, 
  EventEmitter, 
  Output, 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('img') postImg = ''
  @Output() imgSelected = new EventEmitter<string>()

  constructor() {
    console.log('constructor() called', this.postImg)
  }

  ngOnInit() {
    console.log('ngonInit() called', this.postImg)
  }

  ngOnChanges() {
    console.log('ngOnChanges() called')
    // Will run whenever changes are made to the component.
  }

  ngDoCheck(){
    console.log('ngDoCheck() called')
    // Will run after change detection cycle has occured.
    // It performs updates that Angular might miss.
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked() called')
    // Can run multiple times
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called')
    // Runs once
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked() called')
    // Can run multiple times
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit() called')
    // Runs once
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() called')
  }
}


