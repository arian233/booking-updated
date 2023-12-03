import React, { useState } from "react";

import CurveyLayout from "../../layout/curvey";

import reviewsData from "../../data/reviews.json";

import "./index.sass"

export default function Reviews(props: any) {
    const reviewsLength = reviewsData.length;
    const [activeReviewIndex, setActiveReviewIndex] = useState<number>(0);

    const handleCarousel = (delta: number) => {
        let newIndex: number = activeReviewIndex + delta;

        if (newIndex >= reviewsLength) {
            newIndex = 0
        }
        if (newIndex < 0) {
            newIndex = reviewsLength - 1;
        }

        setActiveReviewIndex(newIndex);
    }

    return (
        <CurveyLayout
            id="reviews"
            color="midnight"
            top bottom
        >
            <div className="columns">
                <div className="container">
                    <h3>We are loved.</h3>
                    <h2 className="heading-width">Take a look at some of the reviews provided by our customers</h2>

                    <div className="reviews-container flex row between align-center">
                        <button id="review-left" onClick={() => handleCarousel(-1)} >
                            <img src="/images/icons/chevron-left.svg" alt="left button chevron" />
                        </button>

                        <div className="reviews">
                            {
                                reviewsData.map(
                                    (review, i: number) => {
                                        const isActive = i === activeReviewIndex ? "active" : "";
                                        const ratingArrayDummy = new Array(review.rating).fill(0);
                                        
                                        return (
                                            <div className={`review flex row small-column small-align-center ${isActive}`} key={`review-${i}`}>
                                                <div className="review-image">
                                                    <img src={review.avatar} alt={review.name} />
                                                </div>
                                                <h2 className="hidden-medium-up">{review.name}</h2>
                                                <div className="rating hidden-medium-up">
                                                    {
                                                        ratingArrayDummy.map(
                                                            (_, j: number) => <img src="/images/icons/star.svg" alt="Star rating" key={`star-icon-${i}-${j}`} />
                                                        )
                                                    }
                                                </div>
                                                <div className="review-details">
                                                    <div className="review-details-header flex row between align-center wrap">
                                                        <h2 className="hidden-small-only">{review.name}</h2>
                                                        <div className="rating hidden-small-only">
                                                            {
                                                                ratingArrayDummy.map(
                                                                    (_, j: number) => <img src="/images/icons/star.svg" alt="Star rating" key={`star-icon-${i}-${j}`} />
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                    <p>{review.text}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>

                        <button id="review-right" onClick={() => handleCarousel(1)}>
                            <img src="/images/icons/chevron-right.svg" alt="right button chevron" />
                        </button>
                    </div>

                </div>
            </div>
        </CurveyLayout>
    )
}