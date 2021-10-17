import {Component, OnInit} from '@angular/core';
import {OwnersService} from "./owners.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Owner} from "../shared/interfaces/owner.interface";

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  public displayedColumns: string[] = ['last_name', 'first_name', 'middle_name', 'cars']
  public owners!: Owner[]


  constructor(
    private ownersService: OwnersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.owners = this.route.snapshot.data.owners
    console.log(this.owners)

    this.getOwners()
  }

  public addOwner(): void {
    this.router.navigate(['/new']).then();
  }

  public getOwners() {
    return this.ownersService.getOwners().subscribe()
  }

  public deleteOwner(owner: Owner): void {
    this.ownersService.deleteOwner(owner).subscribe()
  }

}
