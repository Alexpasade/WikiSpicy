import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AplicationComponent } from './aplication/aplication.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { CorporativoComponent } from './corporativo/corporativo.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { HttpModule } from '@angular/http';
import { LogInComponent } from './log-in/log-in.component';
import { FooterComponent } from './footer/footer.component';
import { MapaComponent } from './mapa/mapa.component';
import { CreadorComponent } from './creador/creador.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { SubirRecetaComponent } from './subir-receta/subir-receta.component';
import { ShowRecetaComponent } from './show-receta/show-receta.component';
import { ImageUploadModule } from "angular2-image-upload";
import { ShowRestauranteComponent } from './show-restaurante/show-restaurante.component';
import { OpinionesRestaurantesComponent } from './opiniones-restaurantes/opiniones-restaurantes.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { ShowTiendaComponent } from './show-tienda/show-tienda.component';
import { RestaurantesFavoritosComponent } from './restaurantes-favoritos/restaurantes-favoritos.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AplicationComponent,
    UsuariosComponent,
    HomeComponent,
    RecetasComponent,
    RestaurantesComponent,
    CorporativoComponent,
    RegistroUsuariosComponent,
    LogInComponent,
    FooterComponent,
    MapaComponent,
    CreadorComponent,
    BienvenidaComponent,
    SubirRecetaComponent,
    ShowRecetaComponent,
    ShowRestauranteComponent,
    OpinionesRestaurantesComponent,
    TiendasComponent,
    ShowTiendaComponent,
    RestaurantesFavoritosComponent,
    ChatbotComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ImageUploadModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWPztwqcUu4T6nJ78V3CTYEDEUMaIZCSI'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
