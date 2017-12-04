
import { LayoutComponent } from '../layout/layout.component';

import * as home from './home';

const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [

            { path: '', redirectTo: 'home' },
            { path: 'home', component: home.HomeComponent },

        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];

export default routes;
