import React from 'react';
import YouTubePlayer from './YouTubePlayer';

export default function ProjectPost(props) {
    const children = props.children;
    const frontMatter = props.frontMatter;
    if (!('project_page' in frontMatter)) {
        throw new Error("You must specify project_page to use ProjectPost (offending page: " + frontMatter.title + ")");
    }
    return (
        <div>
            <YouTubePlayer youtubeLink={frontMatter.youtube} />
            <p>
                {children}
            </p>
            <p>
                Full notes are <a href={frontMatter.project_page}>here</a>.
            </p>
        </div>
    );
}