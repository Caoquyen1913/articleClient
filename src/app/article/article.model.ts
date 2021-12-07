export interface ArticleModel {
  title: String,
  description: String,
  social_image: String,
  published_at: String|Date,
  url: String,
  user: {
    name: String,
  },
  tag_list: String[]
}