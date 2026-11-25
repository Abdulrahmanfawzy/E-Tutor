export interface Review {
    id: string;
    authorName: string;
    authorAvatarUrl: string;
    postedAt: string;
    rating: number;
    comment: string;
  }
  
  export interface RatingFilterOption {
    value: string;
    label: string;
  }