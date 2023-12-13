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
import { QuoteDetailsService } from './quote-details.service';
import { TranslateService } from '@ngx-translate/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { TablesKitchenSinkEditComponent } from '../tables/kitchen-sink/edit/edit.component';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { PeriodicElement, vehicleGrid } from '../tables/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [QuoteDetailsService],
})
export class QuoteDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  isLoading = true;

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
    private dashboardSrv: QuoteDetailsService,
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
    this.ngZone.runOutsideAngular(() => this.initChart());
  }

  ngOnDestroy() {
  }

  initChart() {
    this.chart1 = new ApexCharts(document.querySelector('#chart1'), this.charts[0]);
    this.chart1?.render();
    this.chart2 = new ApexCharts(document.querySelector('#chart2'), this.charts[1]);
    this.chart2?.render();
  }
  edit(value: any) {
    this.router.navigate(['/vehicleDetails']);
  }

  delete(value: any) {
    this.list = [];
  }
  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }
  onProceed(){
   this.router.navigate(['/vehicleDetails']);
  }
}
