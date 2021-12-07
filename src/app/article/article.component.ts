import { Component, OnInit ,Inject} from '@angular/core';
import { ArticlesService } from '../services/articles/articles.service';
import { ArticleModel } from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

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
    this.getTop()
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

  public getTop(): void {
    this.articleService.getTopArticle().subscribe(data => {
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
