
export interface CourseReview {
    id: string;
    studentName: string;
    studentImage: string;
    rating: number;
    createdAt: string;
    comment: string;
}

export interface RatingDistribution {
    stars: number;
    percentage: number;
}

export interface CourseRatingSummary {
    averageRating: number;
    totalReviews: number;
    distribution: RatingDistribution[];
}
