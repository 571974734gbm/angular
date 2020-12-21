import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-com',
  templateUrl: './first-com.component.html',
  styleUrls: ['./first-com.component.css']
})
export class FirstComComponent implements OnInit {

  constructor() { }
  @Input() data: any
  @Output('checked') checkedBack = new EventEmitter<any>();
  public text: string = '111'
  public show: boolean = true
  public changeText: string = "修改值"
  public testList: Array<object> = [
    {
      name: '1'
    },
    {
      name: '2'
    },
    {
      name: '3'
    },
    {
      name: '4'
    }
  ]
  public inputClick(){
    this.changeText = '回去'
    console.log(this.changeText)
  }
  public clickFun() {
    console.log('ss')
    this.show = !this.show
  }
  public checkedCallback() {
    this.checkedBack.emit('传给你的值')
  }
  ngOnChanges(): void{
    console.log('ngOnChanges')
  }
  ngOnInit(): void {
    console.log('ngOnInit')
    console.log(this.data)
  }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck')
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit')
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked')
  // }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked')
  // }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

}
