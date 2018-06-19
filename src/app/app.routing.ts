import { OpinionesRestaurantesComponent } from './opiniones-restaurantes/opiniones-restaurantes.component';
import { ShowRestauranteComponent } from './show-restaurante/show-restaurante.component';
import { ShowRecetaComponent } from './show-receta/show-receta.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
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
import { SubirRecetaComponent } from './subir-receta/subir-receta.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { ShowTiendaComponent } from './show-tienda/show-tienda.component';




export const appRoutes: Routes =[ 
    {path: "", component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'recetas', component: RecetasComponent},
    {path: 'login', component: LogInComponent},
    {path: 'perfil', component: UsuariosComponent},
    {path: 'perfil/:nombre', component: UsuariosComponent },
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'tiendas',component: TiendasComponent},
    {path: 'tiendas/:id', component: ShowTiendaComponent},
    {path: 'recetas/:id',component: ShowRecetaComponent},
    {path: 'restaurantes/:id', component: ShowRestauranteComponent},
    {path: 'info', component: CorporativoComponent},
    {path: 'registro', component: RegistroUsuariosComponent},
    {path: 'bienvenida', component: BienvenidaComponent},
    {path: 'mapa', component: MapaComponent},
    {path: 'listado', component: RestaurantesComponent},
    {path: 'creador', component: CreadorComponent},
    {path: 'info/creador',component: CreadorComponent},
    {path: 'registro/login', component: LogInComponent},
    {path: 'opiniones/:id', component: OpinionesRestaurantesComponent},
    {path: 'subirRecetas', component: SubirRecetaComponent},
    {path: '**', component: HomeComponent}
    
]