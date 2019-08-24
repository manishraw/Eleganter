import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  welcomeMessage = "Congratulation You have won the 50% Discount On any Product. Please use this Coupon Code DIC50";
  userName = "Manish Rawat";
  public EmployeeDetsils = [
    {"Name":"Manish Rawat","Address":"Sector-62 Noida","Sallery":35000,"Designation":"UI Developer"},
    {"Name":"Himanshu Joshi","Address":"Sector-62 Noida","Sallery":45000,"Designation":"UI Developer"}
  ]

  ngOnInit() {
  }

}
