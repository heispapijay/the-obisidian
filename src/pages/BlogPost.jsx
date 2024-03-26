import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { graphcms, QUERY_POST } from '../services/data-api';

export const BlogPost = () => {
    const [post, setPost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        graphcms.request(QUERY_POST, { slug })
            .then(res => {
                console.log(res); // Log the response to check its structure
                setPost(res.post);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
            });
    }, [slug]);

    if (!post) {
        return <div>Loading...</div>;
    }

    const imageClassName = post.isArticle ? 'article-image' : 'default-image';

    return (
        <div>
            <h2>{post.title}</h2>
            <img src={post.coverImage.url} alt={post.title} className={imageClassName} />
            {post.content && post.content.html && (
                <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
            )}
        </div>
    );
};
