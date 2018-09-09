import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
import { HttpClient, HttpParams } from '@angular/common/http';

export class Earthquake {
  id: string;
  name: string;
  originTime: string;
  mw: number;
  usgsDepth: number;
  noaaTsunami: boolean;
}

@Component({
  selector: 'app-earthquakes-list',
  templateUrl: './earthquakes-list.component.html',
  styleUrls: ['./earthquakes-list.component.scss']
})
export class EarthquakesListComponent implements OnInit {

  earthquakes: Earthquake[] = [];
  // http://localhost:5000/
  apiUrl: string = 'https://aq0n090pg2.execute-api.us-east-1.amazonaws.com/dev';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.earthquakes = [
      {id: null, 'name': 'Loading...', originTime: null, mw: null, usgsDepth: null, noaaTsunami: null},
    ]

    console.info('Fetching GET', this.apiUrl + '/earthquakes', '...');
    this.httpClient.get(this.apiUrl + '/earthquakes')
      .subscribe((response: any) => {
        console.debug('Response:', response);
        this.earthquakes = response._embedded.earthquakes;
        this.earthquakes.forEach(x => {
          //x.originTime = moment(x.originTime);
        })
      });
  }

}
