import {Owner} from "../interfaces/owner.interface";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {OwnersService} from "../../owners/owners.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class OwnersResolver implements Resolve<Owner[]> {

  constructor(
    private ownersService: OwnersService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Owner[]> {
    return this.ownersService.getOwners();
  }

}
