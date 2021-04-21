import { Component, OnInit } from '@angular/core';
import { SevicingService } from '../sevicing.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  public Reg: boolean[] = [false, false, false]
  constructor(private Ser: SevicingService) { }

  ngOnInit(): void {

  }
  Sign(n: number) {
    for (let i = 0; i < this.Reg.length; i++)
      this.Reg[i] = false;
    this.Reg[n] = true;
  }
}
