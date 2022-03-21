import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ApiSerivce } from '../api.service';
import { Send } from '../send.model';


import { Sources } from './source.model';



@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  model: Send = {
    tableId: 10,
    recordId: 0,
    userId: 26,
    languageId: 16001
  };
  last: any = {
    records: [],
    auditColumn: {
      approvalStatusId: 1100001,
      companyId: 10001,
      branchId: 201,
      financialYearId: 1,
      userId: 1,
      mACAddress: "unidentified",
      hostName: "unidentified",
      iPAddress: "unidentified",
      deviceType: "Win32"
    }
     
  }
  myFormGroup: FormGroup;
  
  breakpoint: number;
  checked= false;
  checkedR = false;
  disabled = false;
  sources: Sources[] = [];
  res: any;
  spacepoint: any;
  spacezone: boolean;
  data: any;
  ver: Sources;
  maxSize: number

  constructor( private apiService: ApiSerivce) {}

  ngOnInit(): void {
    
    
    this.apiService.controllers(this.model).subscribe(res => {
      this.data = res;
      this.sources = this.data;
      this.breakpoint =
      window.innerWidth <= 740
        ? 1
        : this.sources[0].maxRowSize;
      

      console.log(this.sources);
    })
    
    
  }
  
  onSubmit() {
    
    for(let i=0;i<=this.sources.length;i++){
     this.ver = this.sources[i];
      
      if(this.ver?.inTransaction == true){
        this.last.records.push(this.ver);
        this.last.records.forEach(function(obj){
          if (obj.inTransaction) {
            if(obj.type=="Checkbox"){
              if(obj.value==""){
                obj.value = 0;
              }
            }

            obj.value = obj.value.toString()
            delete obj.maxRowSize;

          }
        })
        
      }
    }
    
    console.log(this.last);
    if(this.last.records[0].entryMode == "A"){
      this.apiService.entryA(this.last).subscribe(nexto => {
        this.res = nexto;
        
      }, error => {
        console.log("Api Error")
      });
    }else if(this.last.records[0].entryMode == "E"){
      this.apiService.entryE(this.last).subscribe(nexto => {
        this.res = nexto;
        
      }, error => {
        console.log("Api error")
      });
    }

    
  
    
  }
  onResize(event) {
    this.spacepoint =
      event.target.innerWidth <= 740
        ? (this.spacezone = false)
        : (this.spacezone = true);
    this.breakpoint =
      event.target.innerWidth <= 740
        ? 1
        : this.sources[0].maxRowSize;
  }
  
 
}
