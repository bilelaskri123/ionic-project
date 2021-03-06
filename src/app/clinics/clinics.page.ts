import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.page.html',
  styleUrls: ['./clinics.page.scss'],
})
export class ClinicsPage implements OnInit {
  pagename: any;
  imgArray: any;
  Types: any;
  myRating: number;

  public myInput;
  public shouldShowCancel;
  constructor( private route: ActivatedRoute, private router: Router ) {
    this.imgArray = ['assets/imgs/camion2.jpeg']
    this.Types = 1
   }

  ngOnInit() {
    this.myRating=4
    this.route.params.subscribe(params => {
      console.log(params)
      this.pagename = params.name
    })
  }

  rating(data){}

  booking(name){
    var params = {
      name : name
    }
    this.router.navigate(['book', params]);
  }
  
  myFunction(id) {
    console.log(id)
    var x = document.getElementById(id);
      $(document).ready(function () {
        $(x).slideToggle('slow');
      });
  }

  onInput(event) {

  }

  onCancel(event) {
    
  }

}
