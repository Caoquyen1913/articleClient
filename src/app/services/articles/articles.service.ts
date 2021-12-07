import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

let httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "Application/json" }),
};
const url = "http://localhost:5000/api/v1";

@Injectable({
  providedIn: "root",
})
export class ArticlesService {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) {}

  public getTopArticle(): Observable<any> {
    return this.httpClient.get(url + "/article", httpOptions);
  }

  public getArticles(query: any): Observable<any> {
    let params = new HttpParams();
    if (query.tag) {
      params = params.append("tag", query.tag);
    }
    return this.httpClient.get(url + "/article", { params: params });
  }

  public createArticle(data: any): Observable<any> {
    return this.httpClient.post(url + "/article", data);
  }

  public getArticleOfMe(): Observable<any> {
    return this.httpClient.get(url + "/article/me");
  }
}
