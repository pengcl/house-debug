import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TabsService} from '../tabs/tabs.service';

@Component({
    selector: 'app-index',
    templateUrl: 'index.page.html',
    styleUrls: ['index.page.scss'],
    providers: []
})
export class IndexPage {

    constructor(private router: Router,
                private tabsSvc: TabsService) {
    }

    ionViewDidEnter() {
        this.tabsSvc.set(true);
    }

}
