import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/blogcard.css';

export const BlogCard = ({ title, slug, isArticle, coverImage }) => {
    const imageClassName = isArticle ? 'article-image' : 'default-image';

    return (
        <div className='card'>
            <Link to={`/posts/${slug}`}>
                <img className={imageClassName} src={coverImage.url} alt={title} />
                <p>{title}</p>
            </Link>
            
        </div>
    );
};
