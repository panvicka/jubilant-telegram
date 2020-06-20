import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = "About";

  constructor(   
    private titleService: Title, //for meta tags for google search also on google chrome tab 
    private SharedService: SharedService,
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} - ${this.SharedService.blogTitle}`); //what you will see on the chrome tab 
  }

}
