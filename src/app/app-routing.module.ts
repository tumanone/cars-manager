import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OwnerViewComponent} from "./owner-view/owner-view.component";
import {OwnersComponent} from "./owners/owners.component";
import {OwnerResolver} from "./shared/resolvers/owner.resolver";
import {OwnersResolver} from "./shared/resolvers/owners.resolver";

const routes: Routes = [
  {
    path: '',
    component: OwnersComponent,
    resolve: {
      owners: OwnersResolver
    }
  },
  {
    path: ':id/view',
    component: OwnerViewComponent,
    resolve: {
      owner: OwnerResolver
    }
  },
  {
    path: 'new',
    component: OwnerViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
