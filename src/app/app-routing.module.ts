import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './autenticacao/cadastro/cadastro.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { CardComponent } from './shared/card/card.component';
import { CarrinhoComponent } from './shared/card/carrinho/carrinho.component';
import { ContatoComponent } from './shared/card/contato/contato.component';
import { ProdutosComponent } from './shared/card/produtos/produtos.component';
import { FooterComponent } from './shared/card/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';

const routes: Routes = [

  { path: 'nav', component: NavComponent  },
  { path: 'inicio', component: CardComponent  },
  { path: 'produtos', component: ProdutosComponent  },
  { path: 'carrinho', component: CarrinhoComponent  },
  { path: 'contato', component: ContatoComponent  },
  { path: 'login', component:   LoginComponent},
  { path: 'cadastro', component: CadastroComponent  },
  { path: 'rodape', component: FooterComponent  }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
