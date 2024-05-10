import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './unit/card/card.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'products',component:CardComponent},
    {path:'contact',component:ContactComponent},
    {path:'products/:id',component:SingleComponent},
];
