import { CreadorComponent } from './creador/creador.component';
import { MapaComponent } from './mapa/mapa.component';
import { LogInComponent } from './log-in/log-in.component';
import { CorporativoComponent } from './corporativo/corporativo.component';
import { RecetasComponent } from './recetas/recetas.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {Routes, RouterModule} from '@angular/router';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';




export const appRoutes: Routes =[ 
    {path: "", component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'recetas', component: RecetasComponent},
    {path: 'login', component: LogInComponent},
    {path: 'perfil', component: UsuariosComponent },
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'info', component: CorporativoComponent},
    {path: 'registro', component: RegistroUsuariosComponent},
    {path: 'mapa', component: MapaComponent},
    {path: 'listado', component: RestaurantesComponent},
    {path: 'creador', component: CreadorComponent},
    {path: 'info/creador',component: CreadorComponent},
    {path: '**', component: HomeComponent}
    
]