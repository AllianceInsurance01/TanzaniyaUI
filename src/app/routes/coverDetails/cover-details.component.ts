import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  NgZone,
} from '@angular/core';
import { SettingsService } from '@core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { TablesKitchenSinkEditComponent } from '../tables/kitchen-sink/edit/edit.component';
import { CoverDetailsService } from './cover-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover-details',
  templateUrl: './cover-details.component.html',
  styleUrls: ['./cover-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CoverDetailsService],
})
export class CoverDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  isLoading = true;selectedTab:any=0;
  constructor(
    private ngZone: NgZone,
    private settings: SettingsService,
    private dialog: MtxDialog,
    private router:Router
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }
  edit(value: any) {
    const dialogRef = this.dialog.originalOpen(TablesKitchenSinkEditComponent, {
      width: '600px',
      data: { record: value },
    });

    dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
  }

  delete(value: any) {
    this.dialog.alert(`You have deleted ${value.position}!`);
  }
  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }
  onNext(){
    this.selectedTab+=1;
  }
  onPrevious(){this.selectedTab-=1;}
  onProceed(){
    this.router.navigate(['/vehicleDetails']);
  }
  getBack(){
      this.router.navigate(['/vehicleDetails']);
  }
}
