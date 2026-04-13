import { useEffect, useState } from "react"
import styles from "./GoogleReviews.module.css"

type Review = {
    author_name: string
    text: string
    rating: number
    profile_photo_url?: string
    relative_time_description?: string
}

type ReviewsResponse = {
    negocio: string
    rating: number
    total_reviews: number
    reviews: Review[]
}

function renderStars(rating: number) {
    return "★".repeat(rating) + "☆".repeat(5 - rating)
}

export function GoogleReviews() {
    const [reviews, setReviews] = useState<Review[]>([])

    useEffect(() => {
        fetch("https://joli-dev-732206415367.northamerica-south1.run.app/api/maps/google-reviews")
            .then(res => res.json())
            .then((data: ReviewsResponse) => {
                console.log("REVIEWS API RESPONSE:", data)

                if (Array.isArray(data.reviews)) {
                    setReviews(data.reviews.slice(0, 4))
                } else {
                    console.error("reviews no es un arreglo:", data)
                    setReviews([])
                }
            })
            .catch(err => console.error("ERROR REVIEWS:", err))
    }, [])

    return (
        <div className={styles.reviewsList}>
            {reviews.length === 0 ? (
                <p className={styles.emptyState}>No hay comentarios disponibles.</p>
            ) : (
                reviews.map((review, i) => (
                    <article key={i} className={styles.reviewCard}>
                        <div className={styles.reviewHeader}>
                            <img
                                src={review.profile_photo_url || "https://via.placeholder.com/48"}
                                alt={review.author_name}
                                className={styles.avatar}
                            />

                            <div className={styles.reviewMeta}>
                                <h4 className={styles.authorName}>{review.author_name}</h4>

                                <div className={styles.reviewInfo}>
                                    <span className={styles.stars}>
                                        {renderStars(review.rating)}
                                    </span>

                                    {review.relative_time_description && (
                                        <span className={styles.time}>
                                            {review.relative_time_description}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <p className={styles.reviewText}>{review.text}</p>
                    </article>
                ))
            )}
        </div>
    )
}