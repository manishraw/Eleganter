import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from '../studentdetails.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  public sDetails = [];
  constructor(private studentdet:StudentdetailsService) { }

  ngOnInit() {
    this.sDetails = this.studentdet.getStudentDetails();
  }

}
