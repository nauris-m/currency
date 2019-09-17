import {Component, OnInit} from '@angular/core';
import {RatesService} from "../services/rates.service";
import {SelectItem} from "primeng/api";

interface Currency {
  id: any;
  name: string;
  code: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less'],
  providers: [RatesService]
})

export class CalculatorComponent implements OnInit {
  fromAmount: number = 0;
  toAmount: number = 0;

  rates: any;
  baseRate: string;
  currencyCodes: Array<string>;
  isLoading: boolean = true;

  currenciesFrom: SelectItem[] = [];
  selectedFrom: Currency;
  currenciesTo: SelectItem[] = [];
  selectedTo: Currency;

  constructor(private rs: RatesService) {
  }

  ngOnInit() {
    this.rs.getRates().subscribe(
      data => {
        this.baseRate = data.base;
        this.rates = data.rates;
        this.populateDropdowns();
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  populateDropdowns() {
    this.currencyCodes = Object.keys(this.rates);

    for (let cCode in this.rates) {
      this.currenciesTo.push({label: cCode, value: {id: cCode, name: cCode, code: cCode}});
      this.currenciesFrom.push({label: cCode, value: {id: cCode, name: cCode, code: cCode}});
    }
    this.selectDefaultValues();
  }

  selectDefaultValues() {
    this.selectedFrom = {id: this.baseRate, name: this.baseRate, code: this.baseRate};
    this.selectedTo = {id: 'EUR', name: 'EUR', code: 'EUR'};
  }

  calcFromUSD() {
    this.toAmount = this.fromAmount * this.rates[this.selectedTo.code];
  }

  calcToUSD() {
    this.fromAmount = this.toAmount / this.rates[this.selectedTo.code];
  }
}
