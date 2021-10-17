import {Observable} from "rxjs";
import {Owner} from "../shared/interfaces/owner.interface";

export interface CarOwnerInterface {
  getOwners(): Observable<Owner[]>;
  getOwnerById(id: number): Observable<Owner>
  createOwner(newOwner: Owner): Observable<Owner>;
  updateOwner(owner: Owner): Observable<Owner>;
  deleteOwner(owner: Owner): Observable<void>;
}
