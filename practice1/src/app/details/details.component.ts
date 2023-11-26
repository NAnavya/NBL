import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { Admin } from '../model/admin';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
public adminid: any;
public  adminData:Admin={
  name: '',
  mail: '',
  pass: ''
};
public errmsg="";
// public previousId:any;
// public nextId:any;
  constructor(private route:ActivatedRoute,private router:Router,private _adminService:AdminserviceService) { }

  ngOnInit() {
    // let id=(this.route.snapshot.paramMap.get('id'));
    // this.adminid=id;
    this.route.paramMap.subscribe ((params :ParamMap )=>{
      let id=params.get('id');
      this.adminid=id;
    });

    this._adminService.getAdminById(this.adminid).subscribe(data=>{this.adminData=data,console.log(data)},(error)=>this.errmsg="Something went wrong")
  }
  goPrevious(){
     let previousId=this.adminid-1;
     this.router.navigate(['admin',previousId]);
  }
goNext(){
  let nextId=this.adminid-1+2;
  this.router.navigate(['admin',nextId])
}
goToAdmin(){
  let selectedId=this.adminid? this.adminid:null;
  // this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})  here ../ this is used for the current route remove/back for one id like in cmd and then append
  this.router.navigate(["/admin",{ids:selectedId}])
}

showchild1(){
  this.router.navigate(['child1'],{relativeTo:this.route})
}
showchild2(){  
  this.router.navigate(['child2'],{relativeTo:this.route})
}
}
