import {Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CarOwnerInterface} from "./car-owner.interface";
import {Observable} from "rxjs";
import {Owner} from "../shared/interfaces/owner.interface";


@Injectable({
  providedIn: 'root'
})
export class OwnersService implements CarOwnerInterface {


  private url: string = 'api/owners';


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
  }

  public getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(`${this.url}`)
  }

  public getOwnerById(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${this.url}/${id}`)
  }

  public createOwner(newOwner: Owner): Observable<Owner> {
    return this.http.post<Owner>(`${this.url}`, newOwner)
  }

  public updateOwner(owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(`${this.url}/${owner.id}`, owner, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  public deleteOwner(owner: Owner): Observable<void> {
    return this.http.delete<void>(`${this.url}/${owner.id}`)
  }
}
