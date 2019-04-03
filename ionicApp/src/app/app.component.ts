import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
   public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'list'
    },
    {
      title: 'Customers',
      url: '/customer',
      icon: 'person'
    },
    {
      title: 'Students',
      url: '/student',
      icon: 'person'
    },
    {
      title: 'Movies',
      url: '/movies',
      icon: 'aperture'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'information-circle-outline'
    },
      {
      title: 'Logout',
      url: '/login',
      icon: 'exit'
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
