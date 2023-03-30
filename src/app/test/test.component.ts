import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  filteredCountries!: any[];
  selectedCountries!: any[];

  countries = [
    { name: 'colombia', id: '1' },
    { name: 'colombia', id: '1' },
    { name: 'colombia', id: '1' },
    { name: 'colombia', id: '1' },
    { name: 'colombia', id: '1' },
    { name: 'colombia', id: '1' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  filterCountry(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }


  select(event: any) {
    this.router.navigate([`/products`], { queryParams: { id: event.id } });
  }
}
