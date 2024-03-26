import React, { useState, useEffect } from 'react';
import { graphcms, QUERY_POSTS } from '../services/data-api';
import { BlogCard } from '../components/BlogCard';
import styles from '../styles/Home.module.css';

export const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        graphcms.request(QUERY_POSTS)
            .then(res => {
                setPosts(res.posts);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <div className={styles.blogsection}>
            {posts.map(post => (
                <BlogCard
                    key={post.slug}
                    title={post.title}
                    slug={post.slug}
                    isArticle={post.isArticle}
                    coverImage={post.coverImage}
                />
            ))}
            </div>
        </div>
    );
};
