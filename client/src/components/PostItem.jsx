import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const PostItem = ({ PostID, category, title, description, authorID, thumbnail,createdAt }) => {
    // Check if description and title are defined before accessing their length
    const shortDescription = description ? (description.length > 145 ? description.substr(0, 145) + '...' : description) : '';
    const postTitle = title ? (title.length > 145 ? title.substr(0, 145) + '...' : title) : '';

    return (
        <article className="post">
            <div className="post__thumbnail">
                <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={postTitle} />
            </div>
            <div className="post__content">
                <Link to={`/posts/${PostID}`}>
                    <h3>{postTitle}</h3>
                </Link>
                <p dangerouslySetInnerHTML={{__html: shortDescription}}/>
                <div className="post__footer">
                    <PostAuthor authorID={authorID} createdAt={createdAt}/>
                    <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
                </div>
            </div>
        </article>
    );
}

export default PostItem;
