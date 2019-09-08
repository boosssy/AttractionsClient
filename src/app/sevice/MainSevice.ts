import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Attraction} from '../model/Attraction';
import {Place} from '../model/Place';

@Injectable({
  providedIn: 'root'
})

export class MainSevice {
  private attractionsUrl: string;
  private placesUrl: string;
  private transactionsUrl: string;

  constructor(private http: HttpClient) {
    this.attractionsUrl = 'http://localhost:8080/attractions';
    this.placesUrl = 'http://localhost:8080/places';
    this.transactionsUrl = 'http://localhost:8080/transactions';
  }

  public findAllAttractions(): Observable<Attraction[]> {
    return this.http.get<Attraction[]>(this.attractionsUrl);
  }

  public findAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.placesUrl);
  }

  public saveAttraction(attraction: Attraction) {
    return this.http.post<Attraction>(this.attractionsUrl, attraction);
  }

  public deleteAttraction(id: number) {
    return this.http.delete(this.attractionsUrl + '/del/' + id);
  }
}
