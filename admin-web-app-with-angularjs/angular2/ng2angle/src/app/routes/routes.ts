
import { LayoutComponent } from '../layout/layout.component';

import * as home from './home';
import * as dashboard from './dashboard';
import * as widgets from './widgets';
import * as elements from './elements';
import * as forms from './forms';
import * as charts from './charts';
import * as tables from './tables';
import * as maps from './maps';
import * as pages from './pages';
import * as blog from './blog';
import * as ecommerce from './ecommerce';
import * as extras from './extras';

const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [

            { path: '', redirectTo: 'home' },
            { path: 'home', component: home.HomeComponent },

            {
                path: 'dashboard',
                children: [
                    { path: 'v1', component: dashboard.Dashboardv1Component },
                    { path: 'v2', component: dashboard.Dashboardv2Component },
                    { path: 'v3', component: dashboard.Dashboardv3Component }
                ]
            },

            { path: 'widgets', component: widgets.WidgetsComponent },

            {
                path: 'elements',
                children: [
                    { path: 'buttons', component: elements.ButtonsComponent },
                    { path: 'interaction', component: elements.InteractionComponent },
                    { path: 'notification', component: elements.NotificationComponent },
                    { path: 'spinners', component: elements.SpinnersComponent },
                    { path: 'dropdown', component: elements.DropdownComponent },
                    { path: 'navtree', component: elements.NavtreeComponent },
                    { path: 'sortable', component: elements.SortableComponent },
                    { path: 'grid', component: elements.GridComponent },
                    { path: 'gridmasonry', component: elements.GridmasonryComponent },
                    { path: 'typography', component: elements.TypographyComponent },
                    { path: 'iconsfont', component: elements.IconsfontComponent },
                    { path: 'iconsweather', component: elements.IconsweatherComponent },
                    { path: 'colors', component: elements.ColorsComponent },
                    { path: 'infinitescroll', component: elements.InfinitescrollComponent }
                ]
            },

            {
                path: 'forms',
                children: [
                    { path: 'standard', component: forms.StandardComponent },
                    { path: 'extended', component: forms.ExtendedComponent },
                    { path: 'validation', component: forms.ValidationComponent },
                    { path: 'upload', component: forms.UploadComponent },
                    { path: 'cropper', component: forms.CropperComponent }
                ]
            },

            {
                path: 'charts',
                children: [
                    { path: 'flot', component: charts.FlotComponent },
                    { path: 'radial', component: charts.RadialComponent },
                    { path: 'chartjs', component: charts.ChartjsComponent }
                ]
            },

            {
                path: 'tables',
                children: [
                    { path: 'standard', component: tables.StandardComponent },
                    { path: 'extended', component: tables.ExtendedComponent },
                    { path: 'datatable', component: tables.DatatableComponent },
                    { path: 'aggrid', component: tables.AngulargridComponent }
                ]
            },

            {
                path: 'maps',
                children: [
                    { path: 'google', component: maps.GoogleComponent },
                    { path: 'vector', component: maps.VectorComponent }
                ]
            },

            {
                path: 'blog',
                children: [
                    { path: 'list', component: blog.ListComponent },
                    { path: 'post', component: blog.PostComponent },
                    { path: 'articles', component: blog.ArticlesComponent },
                    { path: 'articleview', component: blog.ArticleviewComponent }
                ]
            },

            {
                path: 'ecommerce',
                children: [
                    { path: 'orders', component: ecommerce.OrdersComponent },
                    { path: 'orderview', component: ecommerce.OrderviewComponent },
                    { path: 'products', component: ecommerce.ProductsComponent },
                    { path: 'productview', component: ecommerce.ProductviewComponent },
                    { path: 'checkout', component: ecommerce.CheckoutComponent }
                ]
            },

            {
                path: 'extras',
                children: [
                    { path: 'contacts', component: extras.ContactsComponent },
                    { path: 'contactdetails', component: extras.ContactdetailsComponent },
                    { path: 'projects', component: extras.ProjectsComponent },
                    { path: 'projectsdetails', component: extras.ProjectsdetailsComponent },
                    { path: 'teamviewer', component: extras.TeamviewerComponent },
                    { path: 'socialboard', component: extras.SocialboardComponent },
                    { path: 'votelinks', component: extras.VotelinksComponent },
                    { path: 'bugtracker', component: extras.BugtrackerComponent },
                    { path: 'faq', component: extras.FaqComponent },
                    { path: 'helpcenter', component: extras.HelpcenterComponent },
                    { path: 'followers', component: extras.FollowersComponent },
                    { path: 'settings', component: extras.SettingsComponent },
                    { path: 'plans', component: extras.PlansComponent },
                    { path: 'filemanager', component: extras.FilemanagerComponent },

                    {
                        path: 'forum',
                        children: [
                            { path: '', component: extras.ForumComponent },
                            { path: 'topics/:catid', component: extras.ForumtopicsComponent, outlet: 'primary' },
                            { path: 'discussion/:topid', component: extras.ForumdiscussionComponent, outlet: 'primary' }
                        ]
                    },

                    {
                        path: 'mailbox',
                        component: extras.MailboxComponent,
                        children: [
                            { path: '', redirectTo: 'folder/inbox' },
                            { path: 'folder/:folder', component: extras.FolderComponent },
                            { path: 'view/:mid', component: extras.ViewComponent },
                            { path: 'compose', component: extras.ComposeComponent }
                        ]
                    },

                    { path: 'timeline', component: extras.TimelineComponent },
                    { path: 'calendar', component: extras.CalendarComponent },
                    { path: 'invoice', component: extras.InvoiceComponent },
                    { path: 'search', component: extras.SearchComponent },
                    { path: 'todolist', component: extras.TodolistComponent },
                    { path: 'profile', component: extras.ProfileComponent },
                    { path: 'codeeditor', component: extras.CodeeditorComponent }
                ]
            }
        ]
    },

    { path: 'login', component: pages.LoginComponent },
    { path: 'register', component: pages.RegisterComponent },
    { path: 'recover', component: pages.RecoverComponent },
    { path: 'lock', component: pages.LockComponent },
    { path: 'maintenance', component: pages.MaintenanceComponent },
    { path: '404', component: pages.Error404Component },
    { path: '500', component: pages.Error500Component },

    // Not found
    { path: '**', redirectTo: 'home' }

];

export default routes;
