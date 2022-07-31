export class User{
  username:string;
  time_1st:number;
  time_2nd:number;
  time_3rd:number;

  constructor(username:string,fst:number,snd:number,thrd:number) {
    this.username = username;
    this.time_1st = fst;
    this.time_2nd = snd;
    this.time_3rd = thrd;
  }
}

