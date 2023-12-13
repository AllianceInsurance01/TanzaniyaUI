import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { AuthService } from '@core/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './branch-selection.component.html',
  styleUrls: ['./branch-selection.component.scss'],
})
export class BranchSelectionComponent {
  isSubmitting = false;

  loginForm = this.fb.nonNullable.group({
    branchValue: ['', [Validators.required]]
  });
  branchSection: boolean = false;
  branchList:any[]=[];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.branchList = [
      {
          "BranchCode": "01",
          "BrokerBranchCode": "None",
          "BrokerBranchName": null,
          "BranchName": "Arusha",
          "RegionCode": "10000",
          "RegionName": null,
          "InsuranceId": "100002",
          "CompanyName": "Alliance Insurance Corporation Limited",
          "CompanyLogo": null,
          "AttachedBranchCode": null,
          "AttachedBranchName": null,
          "AttachedRegionCode": null,
          "AttachedRegionName": null,
          "AttachedCompanyId": null,
          "AttachedCompanyName": null,
          "AttachedCompanyLogo": null,
          "CurrencyId": "TZS",
          "SourceType": null,
          "DepartmentCode": null
      },
      {
          "BranchCode": "02",
          "BrokerBranchCode": "None",
          "BrokerBranchName": null,
          "BranchName": "Dar Es Salaam",
          "RegionCode": "10000",
          "RegionName": null,
          "InsuranceId": "100002",
          "CompanyName": "Alliance Insurance Corporation Limited",
          "CompanyLogo": null,
          "AttachedBranchCode": null,
          "AttachedBranchName": null,
          "AttachedRegionCode": null,
          "AttachedRegionName": null,
          "AttachedCompanyId": null,
          "AttachedCompanyName": null,
          "AttachedCompanyLogo": null,
          "CurrencyId": "TZS",
          "SourceType": null,
          "DepartmentCode": null
      },
      {
          "BranchCode": "03",
          "BrokerBranchCode": "None",
          "BrokerBranchName": null,
          "BranchName": "Moshi",
          "RegionCode": "10000",
          "RegionName": null,
          "InsuranceId": "100002",
          "CompanyName": "Alliance Insurance Corporation Limited",
          "CompanyLogo": null,
          "AttachedBranchCode": null,
          "AttachedBranchName": null,
          "AttachedRegionCode": null,
          "AttachedRegionName": null,
          "AttachedCompanyId": null,
          "AttachedCompanyName": null,
          "AttachedCompanyLogo": null,
          "CurrencyId": "TZS",
          "SourceType": null,
          "DepartmentCode": null
      }
  ]
  }

  get branchValue() {
    return this.loginForm.get('branchValue')!;
  }
  onBranchSelect(){
    this.router.navigate(['/home/products']);
  }
  login() {
    this.isSubmitting = true;

    // this.auth
    //   .login(this.branchValue.value, this.password.value, this.rememberMe.value)
    //   .pipe(filter(authenticated => authenticated))
    //   .subscribe({
    //     next: () => {
    //       this.branchSection = true;
    //     },
    //     error: (errorRes: HttpErrorResponse) => {
    //       if (errorRes.status === 422) {
    //         const form = this.loginForm;
    //         const errors = errorRes.error.errors;
    //         Object.keys(errors).forEach(key => {
    //           form.get(key === 'email' ? 'username' : key)?.setErrors({
    //             remote: errors[key][0],
    //           });
    //         });
    //       }
    //       this.isSubmitting = false;
    //     },
    //   });
  }
}
