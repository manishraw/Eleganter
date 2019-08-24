import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentdetailsService {
  getStudentDetails() {
    return [
      {
        "ID": "1",
        "Name": "Manish Rawat",
        "Gender": "Male",
        "Class": "Angular JS",
        "Seat": "15",
        "Strength": "30",
        "Hairstyle": "Stylish",
        "Color": "Black",
        "Eyes": "Black",
        "EyeType": "Default",
        "ScheduleTime": "09 To 11 AM",
        "Info": "An average student. \n \n Average grades, average looks, average life... \n \n I'm not sure what you see in him."
      },
      {
        "ID": "1",
        "Name": "Aman Sagar",
        "Gender": "Male",
        "Class": "Angular JS",
        "Seat": "15",
        "Strength": "32",
        "Hairstyle": "Stylish",
        "Color": "Black",
        "Eyes": "Black",
        "EyeType": "Default",
        "ScheduleTime": "09 To 11 AM",
        "Info": "An average student. \n \n Average grades, average looks, average life... \n \n I'm not sure what you see in him."
      },
      {
        "ID": "1",
        "Name": "Jitendra Singh",
        "Gender": "Male",
        "Class": "Angular JS",
        "Seat": "15",
        "Strength": "32",
        "Hairstyle": "Stylish",
        "Color": "Black",
        "Eyes": "Black",
        "EyeType": "Default",
        "ScheduleTime": "09 To 11 AM",
        "Info": "An average student. \n \n Average grades, average looks, average life... \n \n I'm not sure what you see in him."
      },
      {
        "ID": "1",
        "Name": "Himanshu Saxena",
        "Gender": "Male",
        "Class": "Angular JS",
        "Seat": "15",
        "Strength": "32",
        "Hairstyle": "Stylish",
        "Color": "Black",
        "Eyes": "Black",
        "EyeType": "Default",
        "ScheduleTime": "09 To 11 AM",
        "Info": "An average student. \n \n Average grades, average looks, average life... \n \n I'm not sure what you see in him."
      },
      {
        "ID": "1",
        "Name": "Sunny Kashyap",
        "Gender": "Male",
        "Class": "Angular JS",
        "Seat": "15",
        "Strength": "32",
        "Hairstyle": "Stylish",
        "Color": "Black",
        "Eyes": "Black",
        "EyeType": "Default",
        "ScheduleTime": "09 To 11 AM",
        "Info": "An average student. \n \n Average grades, average looks, average life... \n \n I'm not sure what you see in him."
      }
    ]
  }
  constructor() { }
}
