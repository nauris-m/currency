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

  selectedItem: any;
  currencyCodesList: any;
  result: number;

  rates: any;
  isLoading: boolean = true;

  constructor(private rs: RatesService) {
  }

  ngOnInit() {
    this.rs.getRates().subscribe(
      data => {
        this.rates = data.rates;
        this.populateDropdown();
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  populateDropdown() {
    this.currencyCodesList = Object.keys(this.rates);
    this.fromCurrency = 'USD';
  }

  exchange() {
    this.toAmount = this.fromAmount * this.rates[this.toCurrency];
  }

  setSelected() {
    this.selectedItem = this.toCurrency;
  }
}
