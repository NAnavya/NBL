import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Admin } from '../model/admin';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public adminData :Admin[]=[];
  public errmsg="";
 public selectid:any;
  constructor(private _adminservice:AdminserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this._adminservice.getAdmin().subscribe(data=>this.adminData=data,(error)=>this.errmsg=error);
    this.route.paramMap.subscribe((param:ParamMap)=>{
      let selectedId=param.get('ids');
      this.selectid=selectedId;
    });
  }
  select(admin:Admin){
  this.router.navigate(['/admin',admin.id]);
  //this.router.navigate([admin.id],{relativeTo:this.route})
  }

  isSelected(admin:Admin){
    console.log(this.selectid,admin.id);
     return admin.id===this.selectid;
  }
}
