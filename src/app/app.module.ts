import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/nav/nav.component';
import { CardComponent } from './shared/card/card.component';
import { ProdutosComponent } from './shared/card/produtos/produtos.component';
import { ContatoComponent } from './shared/card/contato/contato.component';
import { CarrinhoComponent } from './shared/card/carrinho/carrinho.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { CadastroComponent } from './autenticacao/cadastro/cadastro.component';
import { FooterComponent } from './shared/card/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    ProdutosComponent,
    ContatoComponent,
    CarrinhoComponent,
    LoginComponent,
    CadastroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
