import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {OwnersService} from "../owners/owners.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Owner} from "../shared/interfaces/owner.interface";
import {Car} from "../shared/interfaces/car.interface";

@Component({
  selector: 'app-owner-view',
  templateUrl: './owner-view.component.html',
  styleUrls: ['./owner-view.component.scss']
})
export class OwnerViewComponent implements OnInit {

  ownerForm!: FormGroup;
  cars!: FormArray;
  public ownerData?: Owner
  public currentYear: number = new Date().getFullYear()

  constructor(
    private formBuilder: FormBuilder,
    private ownerService: OwnersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.ownerForm = new FormGroup({
      last_name: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      middle_name: new FormControl('', Validators.required),
      cars: this.formBuilder.array([])
    });
    this.cars = this.ownerForm.controls.cars as FormArray;
    this.getOwnerData()

    if (this.ownerData) {
      this.patchForm()
    }
  }

  public submit(): void {
    if (this.ownerForm.invalid) {
      this.ownerForm.markAllAsTouched();
      return;
    }

    const owner = {...this.ownerForm.value};

    if (this.ownerData) {
      this.ownerService.updateOwner(owner).subscribe(
        () => this.postSubmit()
      )
    } else {
      this.ownerService.createOwner(owner).subscribe(
        () => this.postSubmit()
      )
    }
  }

  private postSubmit(): void {
    this.router.navigate(['']).then(() => this.ownerForm.reset());
  }

  private getOwnerData(): void {
    console.log(this.route.snapshot.data)
    this.ownerData = this.route.snapshot.data.owner
  }

  private patchForm(): void {
    if (!this.ownerData) return
    console.log(this.ownerData)

    this.ownerForm.addControl('id', new FormControl());

    this.ownerForm.patchValue({
      id: this.ownerData.id,
      last_name: this.ownerData.last_name,
      first_name: this.ownerData.first_name,
      middle_name: this.ownerData.middle_name
    }, {onlySelf: true})

    this.ownerData.cars?.forEach(car => this.addCar(car, true));
  }

  public addCar(car?: Car, isInitialValues: boolean = false): void {
    this.cars.push(this.formBuilder.group({
      num_plate: [isInitialValues ? car?.num_plate : '', [Validators.required, Validators.pattern(/^[A-Z]{2}[0-9]{4}[A-Z]{2}$/)]],
      manufacturer: [isInitialValues ? car?.manufacturer : '', Validators.required],
      model: [isInitialValues ? car?.model : '', Validators.required],
      production_year: [isInitialValues ? car?.production_year : '', Validators.required]
    }))
  }

  public removeCar(index: number): void {
    this.cars.removeAt(index)
  }
}
