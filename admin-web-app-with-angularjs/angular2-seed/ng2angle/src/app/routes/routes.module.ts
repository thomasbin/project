import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import * as HOME from './home';

import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import appMenu from './menu';
import appRoutes from './routes';

// used to map object of imports into array so we can use
// the spread operator in the ngModule definition
const arr = obj => Object.keys(obj).map(name => obj[name]);

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        ...arr(HOME)
    ],
    providers: [],
    exports: [
        RouterModule,
        ...arr(HOME)
    ]
})

export class RoutesModule {
    constructor(private menu: MenuService) {
        menu.addMenu(appMenu);
    }
}
