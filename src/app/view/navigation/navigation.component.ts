import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() 
  title: string;

  constructor (private router: Router) {}
  ngOnInit(): void {
    
  }

  // goTo() will take the location and use the Router class navigateByUrl() function to load the URL with the location
  // location will match the path of the Routes defined in app-routing.module.ts
  goTo(location: string) {
    console.log(location)
    this.router.navigateByUrl(location);
  }
}
