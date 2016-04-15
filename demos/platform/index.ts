import {App, Platform} from 'ionic-angular';

@App({
  templateUrl: 'main.html'
})
class ApiDemoApp {
  isIos: boolean;
  isAndroid: boolean;
  isWindows: boolean;
  userAgent: string;

  constructor(platform: Platform) {
    this.isIos = platform.is('ios');
    this.isAndroid = platform.is('android');
    this.isWindows = platform.is('windows');
    this.userAgent = platform.userAgent();
  }
}
