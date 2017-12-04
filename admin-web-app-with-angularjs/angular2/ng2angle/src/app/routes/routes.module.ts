import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TreeModule } from 'angular2-tree-component';
import { DndModule } from 'ng2-dnd';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { ColorPickerModule, ColorPickerService } from 'angular2-color-picker/lib';
import { SelectModule } from 'ng2-select';
import { TextMaskModule } from 'angular2-text-mask';
import { TagInputModule } from 'ng2-tag-input';
import { CustomFormsModule } from 'ng2-validation';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageCropperModule } from 'ng2-img-cropper';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DataTableModule } from 'angular2-datatable';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { AgGridModule } from 'ag-grid-ng2/main';
import { AgmCoreModule } from 'angular2-google-maps/core';

import * as HOME from './home';
import * as DASHBOARD from './dashboard';
import * as WIDGETS from './widgets';
import * as ELEMENTS from './elements';
import * as FORMS from './forms';
import * as CHARTS from './charts';
import * as TABLES from './tables';
import * as MAPS from './maps';
import * as PAGES from './pages';
import * as BLOG from './blog';
import * as ECOMMERCE from './ecommerce';
import * as EXTRAS from './extras';

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
        TreeModule,
        DndModule.forRoot(),
        InfiniteScrollModule,
        RouterModule.forRoot(appRoutes),
        ColorPickerModule,
        SelectModule,
        TextMaskModule,
        TagInputModule,
        CustomFormsModule,
        FileUploadModule,
        ImageCropperModule,
        ChartsModule,
        DataTableModule,
        Ng2TableModule,
        AgGridModule.withNg2ComponentSupport(), // AgGridModule.withAotSupport()
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
        })
    ],
    declarations: [
        ...arr(HOME),
        ...arr(DASHBOARD),
        ...arr(WIDGETS),
        ...arr(ELEMENTS),
        ...arr(FORMS),
        ...arr(CHARTS),
        ...arr(TABLES),
        ...arr(MAPS),
        ...arr(PAGES),
        ...arr(BLOG),
        ...arr(ECOMMERCE),
        ...arr(EXTRAS)
    ],
    providers: [ColorPickerService],
    exports: [
        RouterModule,
        TreeModule,
        DndModule,
        InfiniteScrollModule,
        ColorPickerModule,
        SelectModule,
        TextMaskModule,
        TagInputModule,
        CustomFormsModule,
        FileUploadModule,
        ImageCropperModule,
        ChartsModule,
        DataTableModule,
        Ng2TableModule,
        AgGridModule,
        AgmCoreModule,
        ...arr(HOME),
        ...arr(DASHBOARD),
        ...arr(WIDGETS),
        ...arr(ELEMENTS),
        ...arr(FORMS),
        ...arr(CHARTS),
        ...arr(TABLES),
        ...arr(MAPS),
        ...arr(PAGES),
        ...arr(BLOG),
        ...arr(ECOMMERCE),
        ...arr(EXTRAS)
    ]
})

export class RoutesModule {
    constructor(private menu: MenuService) {
        menu.addMenu(appMenu);
    }
}
