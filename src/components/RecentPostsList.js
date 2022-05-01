import React from 'react'; 
import BlogPostItem from "@theme/BlogPostItem";
import './RecentPostsList.css';

export default function RecentPostsList(props) {
    const posts = props.posts;
    return (
        <div className="RecentPostsList">
            {posts.map(({ content: BlogPostContent }) => (
                <BlogPostItem
                    key={BlogPostContent.metadata.permalink}
                    frontMatter={BlogPostContent.frontMatter}
                    assets={BlogPostContent.assets}
                    metadata={BlogPostContent.metadata}
                    truncated={BlogPostContent.metadata.truncated}
                >
                    {/* <BlogPostContent /> */}
                </BlogPostItem>
            ))}
        </div>
    );
}