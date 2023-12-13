import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  NgZone,
} from '@angular/core';
import { SettingsService } from '@core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { TablesKitchenSinkEditComponent } from '../tables/kitchen-sink/edit/edit.component';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { PeriodicElement, vehicleGrid } from '../tables/data.service';
import { Router } from '@angular/router';
import { VehicleDetailsService } from './vehicle-details.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [VehicleDetailsService],
})
export class VehicleDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  isLoading = true;
  selectedTab: any = 0;
  multiSelectable = true;
  rowSelectable = true;
  hideRowSelectionCheckbox = true;
  showToolbar = true;
  columnHideable = true;
  columnSortable = true;
  columnPinnable = true;
  rowHover = true;
  rowStriped = false;
  showPaginator = true;
  expandable = false;
  columnResizable = false;
  columns: MtxGridColumn[] = [
    {
      header: this.translate.stream('vehicle_grids.registrationno'),
      field: 'registrationno',
      sortable: true,
      minWidth: 100,
      width: '100px',
    },
    {
      header: this.translate.stream('vehicle_grids.policyType'),
      field: 'policyType',
      sortable: true,
      disabled: true,
      minWidth: 100,
      width: '100px',
    },
    //{
    //   header: this.translate.stream('vehicle_grids.startDate'),
    //   field: 'startDate',
    //   sortable: true,
    //   disabled: true,
    //   minWidth: 100,
    //   width: '100px',
    // },
    // {
    //   header: this.translate.stream('vehicle_grids.endDate'),
    //   field: 'endDate',
    //   sortable: true,
    //   disabled: true,
    //   minWidth: 100,
    //   width: '100px',
    // },
    {
      header: this.translate.stream('vehicle_grids.premium'),
      field: 'premium',
      sortable: true,
      disabled: true,
      minWidth: 100,
      width: '100px',
    },
    {
      header: this.translate.stream('vehicle_grids.status'),
      field: 'status',
      sortable: true,
      disabled: true,
      minWidth: 100,
      width: '100px',
    },
    {
      header: this.translate.stream('table_kitchen_sink.operation'),
      field: 'operation',
      minWidth: 140,
      width: '140px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'edit',
          tooltip: this.translate.stream('table_kitchen_sink.edit'),
          click: (record: any) => this.edit(record),
        },
        {
          type: 'icon',
          color: 'warn',
          icon: 'delete',
          tooltip: this.translate.stream('table_kitchen_sink.delete'),
          pop: {
            title: this.translate.stream('table_kitchen_sink.confirm_delete'),
            closeText: this.translate.stream('table_kitchen_sink.close'),
            okText: this.translate.stream('table_kitchen_sink.ok'),
          },
          click: (record: any) => this.delete(record),
        },
      ],
    },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.dashboardSrv.getData();

  messages = this.dashboardSrv.getMessages();

  charts = this.dashboardSrv.getCharts();
  chart1: any;
  chart2: any;

  stats = this.dashboardSrv.getStats();
   ELEMENT_DATA: vehicleGrid[] = [
    {
      registrationno:"T352DAY",
      policyType:"Comprehensive",
      startDate:"10/12/2023",
      endDate:"09/12/2024",
      premium: "1500",
      status: "Active"
    }
  ];
  notifySubscription!: Subscription;
  sourceList:any[]=[];sourceValue:any='';
  list: any[] = [];
  constructor(
    private ngZone: NgZone,
    private dashboardSrv: VehicleDetailsService,
    private settings: SettingsService,
    private translate: TranslateService,
    private dialog: MtxDialog,
    private router:Router
  ) {}

  ngOnInit() {
    this.isLoading=false;
    this.list = this.ELEMENT_DATA;
    this.notifySubscription = this.settings.notify.subscribe(res => {
      console.log(res);
    });
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
  onNext(){
      this.selectedTab+=1;
  }
  onPrevious(){this.selectedTab-=1;}
  delete(value: any) {
    this.dialog.alert(`You have deleted ${value.position}!`);
  }
  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }
  onProceed(){
   this.router.navigate(['/coverDetails']);
  }
  getBack(){
    this.router.navigate(['/quote']);
  }
}
