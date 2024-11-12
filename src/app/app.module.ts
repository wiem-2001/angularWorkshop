import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { HomeComponent } from './home/home.component';
import { HighlighterDirective } from './highlighter.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormProductComponentComponent } from './form-product-component/form-product-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListCategoriesComponent,
    HomeComponent,
    HighlighterDirective,
    SearchFilterPipe,
    NotfoundComponent,
    FormProductComponentComponent,
    UserComponentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
