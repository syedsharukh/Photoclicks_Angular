import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { AlbumsComponent } from './components/albums/albums.component';

export const routes: Routes = [
    { path: "", component: OverviewComponent},
    { path: "albums", component: AlbumsComponent }
];
