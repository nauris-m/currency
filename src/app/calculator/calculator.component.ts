import {Component, OnInit} from '@angular/core';
import {RatesService} from "../services/rates.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less'],
  providers: [RatesService]
})

export class CalculatorComponent implements OnInit {
  fromAmount: number;
  toAmount: number;
  fromCurrency: string;
  toCurrency: string;

  rates: any;
  baseRate: string;
  currencyCodes: Array<string>;
  isLoading: boolean = true;

  constructor(private rs: RatesService) {
  }

  ngOnInit() {
    this.rs.getRates().subscribe(
      data => {
        this.baseRate = data.base;
        this.rates = data.rates;
        this.populateList();
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  populateList() {
    this.fromCurrency = this.baseRate;
    this.toCurrency = this.baseRate;
    this.currencyCodes = Object.keys(this.rates);
  }

  /*calculate() {
    this.toAmount = this.fromAmount * this.rates[this.toCurrency];
  }*/

  calcFromUSD() {
    //this.calculate();
    this.toAmount = this.fromAmount * this.rates[this.toCurrency];
  }
}
