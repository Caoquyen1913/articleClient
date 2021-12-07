import { Component, OnInit, Inject } from '@angular/core';
import { ArticleModel } from '../article/article.model';
import { ArticlesService } from '../services/articles/articles.service';

@Component({
  selector: 'app-article-of-me',
  templateUrl: './article-of-me.component.html',
  styleUrls: ['./article-of-me.component.css']
})
export class ArticleOfMeComponent implements OnInit {

  constructor(
    @Inject(ArticlesService) private articleService: ArticlesService
    ) { }

  public articles: ArticleModel[] = [{
    title: "",
    description: "",
    social_image: "",
    published_at: "",
    url: "",
    user: {
      name: ""
    },
    tag_list: [""]
  }]
  public page: number = 1;
  public tagSelected:String = ""

  ngOnInit() {
    this.getMyArticle()
  }

  public getArticle(tag: String): void {
    // console.log(event.target.value )
    this.tagSelected = tag
    this.articleService.getArticles({ tag: tag }).subscribe(data => {
      console.log(data)

      this.articles = data.data.map((e: ArticleModel) => {
        const date = new Date(e.published_at.toString())
        e.published_at = `${date.getDate()} - ${(date.getMonth() + 1)} - ${date.getFullYear()}`
        return e
      }
      )
    })
  }

  public getMyArticle(): void {
    this.articleService.getArticleOfMe().subscribe(data => {
      console.log(data)
      this.articles = data.data.map((e: ArticleModel) => {
        const date = new Date(e.published_at.toString())
        e.published_at = `${date.getDate()} - ${(date.getMonth() + 1)} - ${date.getFullYear()}`
        return e
      }
      )
    })
  }

}
