import { Component, OnInit } from '@angular/core';
import { StyleManagerService } from 'src/app/service/style-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDark = this.styleManager.isDark;

  constructor(private styleManager: StyleManagerService) {
    // call main function
    this.pageTransition();
  }

  ngOnInit(): void {
  }

  // animate pages and controls
  pageTransition = () => {
    // button click to active class
    const controls = document.querySelectorAll('.control');

    controls.forEach((control: any) => {
      control.addEventListener('click', () => {
        const buttons = document.querySelectorAll('.active-btn'),
          active = document.querySelector('.active'),
          id = document.getElementById(control.dataset.id);
          console.log(id);
        // remove active-btn class from all controlls
        buttons.forEach(ctrl => {
          ctrl.classList.remove('active-btn');
        });
        // add active class to selected
        control.classList.add('active-btn');
        active?.classList.remove('active');
        id?.classList.add('active');
      });
    });

    // toggle theme
    document.querySelector('.theme-btn')?.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  };

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }

}
