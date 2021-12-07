import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleOfMeComponent } from "./article-of-me/article-of-me.component";
import { ArticleComponent } from "./article/article.component";
import { CreateArticleComponent } from "./create-article/create-article.component";

const routes: Routes = [
  {
    path: "article",
    component: ArticleComponent,
  },
  {
    path: "create-article",
    component: CreateArticleComponent,
  },
  {
    path: "article-of-me",
    component: ArticleOfMeComponent,
  },
  {
    path: "",
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
