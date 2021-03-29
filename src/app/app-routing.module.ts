import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './autenticacao/cadastro/cadastro.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { CardComponent } from './shared/card/card.component';
import { CarrinhoComponent } from './shared/card/carrinho/carrinho.component';
import { ContatoComponent } from './shared/card/contato/contato.component';
import { ProdutosComponent } from './shared/card/produtos/produtos.component';
import { NavComponent } from './shared/nav/nav.component';

const routes: Routes = [

  { path: 'inicio', component: CardComponent  },
  { path: 'produtos', component: ProdutosComponent  },
  { path: 'carrinho', component: CarrinhoComponent  },
  { path: 'contato', component: ContatoComponent  },
  { path: 'login', component:   LoginComponent},
  { path: 'cadastro', component: CadastroComponent  },
  { path: 'nav', component: NavComponent  },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
