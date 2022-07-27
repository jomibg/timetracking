export class Stopwatch{
  sec:number;
  stoptime:boolean;

  constructor(seconds:number = 0) {
    this.sec = seconds;
    this.stoptime = true;
  }

  stopTimer():void{
    if (this.stoptime == false)
      this.stoptime = true;
  }

  startTimer():void{
    if (this.stoptime == true){
      this.stoptime = false;
      this.timerCycle();
    }
  }

  timerCycle():void{
    if (this.stoptime == false){
      this.sec = this.sec + 1;
      setTimeout(() => this.timerCycle(),1000);
    }
    else {
      return
    }
  }

  resetTimer():void{
    this.stoptime = true;
    this.sec = 0;
  }

   }


