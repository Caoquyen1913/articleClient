import { Component, OnInit, Inject } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormArray,
  Validators,
} from "@angular/forms";
import { ArticleModel } from "../article/article.model";
import  {ArticlesService } from "../services/articles/articles.service";

@Component({
  selector: "app-create-article",
  templateUrl: "./create-article.component.html",
  styleUrls: ["./create-article.component.css"],
})
export class CreateArticleComponent implements OnInit {
  public formData = this.fb.group({
    title: ["", Validators.required],
    published: [true, Validators.required],
    body_markdown: ["", Validators.required],
    tags: this.fb.array([this.fb.control("")]),
    series: ["", Validators.required],
  });

  public article: ArticleModel = {
    title: "",
    description: "",
    social_image: "",
    published_at: "",
    url: "",
    user: {
      name: "",
    },
    tag_list: [""],
  };
  
  formControl = new FormControl();

  constructor(
    @Inject(ArticlesService) private articleService: ArticlesService,
    @Inject(FormBuilder) private fb: FormBuilder
  ) {}
  skills = new FormArray([]);
  ngOnInit() {}
  get tags() {
    return this.formData.get("tags") as FormArray;
  }
  addTags() {
    this.tags.push(this.fb.control(""));
  }

  public submitData(): void {
    console.log({ article: this.formData.value });
    this.articleService
      .createArticle({ article: this.formData.value })
      .subscribe((data) => {
        this.article = data.data;
      });
  }

  get title() {
    return this.formData.get("title");
  }
  get body_markdown() {
    return this.formData.get("body_markdown");
  }

  get series() {
    return this.formData.get("series");
  }
}
