import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { TranslateService, TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

import { FlotDirective } from './directives/flot/flot.directive';
import { SparklineDirective } from './directives/sparkline/sparkline.directive';
import { EasypiechartDirective } from './directives/easypiechart/easypiechart.directive';
import { ColorsService } from './colors/colors.service';
import { CheckallDirective } from './directives/checkall/checkall.directive';
import { VectormapDirective } from './directives/vectormap/vectormap.directive';
import { NowDirective } from './directives/now/now.directive';
import { ScrollableDirective } from './directives/scrollable/scrollable.directive';
import { JqcloudDirective } from './directives/jqcloud/jqcloud.directive';

// https://github.com/ocombe/ng2-translate/issues/218
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

// https://angular.io/styleguide#!#04-10
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        Ng2BootstrapModule,
        ToasterModule
    ],
    providers: [
        TranslateService,
        ColorsService
    ],
    declarations: [
        FlotDirective,
        SparklineDirective,
        EasypiechartDirective,
        CheckallDirective,
        VectormapDirective,
        NowDirective,
        ScrollableDirective,
        JqcloudDirective
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        TranslateModule,
        RouterModule,
        Ng2BootstrapModule,
        ToasterModule,
        FlotDirective,
        SparklineDirective,
        EasypiechartDirective,
        CheckallDirective,
        VectormapDirective,
        NowDirective,
        ScrollableDirective,
        JqcloudDirective
    ]
})
export class SharedModule { }
