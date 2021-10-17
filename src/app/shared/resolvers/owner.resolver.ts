import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Owner} from "../interfaces/owner.interface";
import {OwnersService} from "../../owners/owners.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
providedIn: 'root'
})
export class OwnerResolver implements Resolve<Owner> {

  constructor(
    private ownerService: OwnersService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Owner> {
    return this.ownerService.getOwnerById(route.params.id)
  }
}
