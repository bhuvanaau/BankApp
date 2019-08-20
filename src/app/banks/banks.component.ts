import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Banks } from '../bank';
import { BankService } from '../bank.service';


@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  
  city: any;
  filter: any;
  p: any;
 
  private _allbanks :Observable<Banks[]>;
  public get allbanks(): Observable<Banks[]>{
    return this._allbanks
  }
  public set allbanks(value:Observable<Banks[]>){
    this._allbanks = value;
  }
  constructor(public bankService : BankService) { }

  loadDisplay(){
    debugger;
    this.allbanks = this.bankService.getBanks();
  }

  ngOnInit() {
    this.loadDisplay();
  }

  onSelectCity() {
      console.log(this.city);
      this.allbanks = this.bankService.getBankList(this.city);
      console.log(this.allbanks);
  }

}
