export interface ISearchResponse {
  code: number;
  currentPage: number;
  indexSize: number;
  pages: {};
  pageSize: number;
  q: string;
  query: string;
  results: Array<ISearchResults>;
  searchDuration: number;
  status: string;
  timestamp: number;
  totalHits: number;
}

interface ISearchResults {
  caption: string;
  description: string;
  id: string;
  publishedAt: string;
  score: number;
  thumbnail: string;
  time: number;
  title: string;
  wp_post_id: string;
}
