import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

export class Earthquake {
  id: string;
  name: string;
  originTime: string;
  mw: float;
  depth: float;
  noaaTsunami: boolean;
}

@Component({
  selector: 'app-earthquakes-list',
  templateUrl: './earthquakes-list.component.html',
  styleUrls: ['./earthquakes-list.component.scss']
})
export class EarthquakesListComponent implements OnInit {

  earthquakes: Earthquake[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.earthquakes = [
      {id: 'abc', 'name': 'Yudhu', originTime: '123', mw: 7.5, usgsDepth: 25, noaaTsunami: false},
      {id: 'ab2', 'name': 'Yudhu', originTime: '123', mw: 8.1, usgsDepth: 75.5, noaaTsunami: true},
    ]

    this.earthquakesObservable = this.httpClient.get('http://localhost:5000/earthquakes')
      .subscribe((response) => {
        console.debug('Response:', response);
        this.earthquakes = response._embedded.earthquakes;
        this.earthquakes.forEach(x => {
          x.originTime = moment(x.originTime);
        })
      });
  }

}
