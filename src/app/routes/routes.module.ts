import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { BranchSelectionComponent } from './sessions/branchSelection/branch-selection.component';
import { ProductSelectionComponent } from './sessions/productSelection/product-selection.component';
import { QuoteDetailsComponent } from './quoteDetails/quote-details.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TablesModule } from './tables/tables.module';
import { CoverDetailsComponent } from './coverDetails/cover-details.component';
import { VehicleDetailsComponent } from './vehicleDetails/vehicle-details.component';

const COMPONENTS: any[] = [
  DashboardComponent,
  QuoteDetailsComponent,
  VehicleDetailsComponent,
  LoginComponent,
  RegisterComponent,
  CoverDetailsComponent,
  BranchSelectionComponent,
  ProductSelectionComponent,
  Error403Component,
  Error404Component,
  Error500Component,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule,TablesModule, RoutesRoutingModule,NgSelectModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class RoutesModule {}
