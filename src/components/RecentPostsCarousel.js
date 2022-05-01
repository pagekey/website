import React from 'react'; 
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BlogPostItem from "@theme/BlogPostItem";
import "./RecentPostsCarousel.css";

export default function RecentPostsCarousel(props) {
    const posts = props.posts;
    return (
        <div className="RecentPostsCarousel">
            <div className="wrap-carousel">
                <Carousel showArrows={true} swipeable={true} autoPlay={true} infiniteLoop={true} interval={5000} stopOnHover={false}>
                    {posts.map(({ content: BlogPostContent }) => (
                        <BlogPostItem
                            key={BlogPostContent.metadata.permalink}
                            frontMatter={BlogPostContent.frontMatter}
                            assets={BlogPostContent.assets}
                            metadata={BlogPostContent.metadata}
                            truncated={BlogPostContent.metadata.truncated}
                        >
                            <BlogPostContent />
                        </BlogPostItem>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}