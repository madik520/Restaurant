import React from 'react';
import PropTypes from 'prop-types';

const BlogItem = ({ items }) => {
    return(
        <>
          {items.map(({ id, month, img, title, text, iconText, views, reviews }) => {
              return <li className="blog-item" key={id}>
                    <div className="blog-hover-block">
                        <div style={{'backgroundImage': `url(${img})`}} className="blog-hover-title">
                            <div className="blog-hover">
                               <h2>{id}<span>{month}</span></h2>
                            </div>
                        </div>
                    </div>
                    <article>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </article>
                    <div className="blog-footer">
                        <span><i className="fas fa-user"></i>{iconText}</span>
                        <div className="footer-second-colomn">
                           <span><i className="fas fa-eye"></i>{views}</span>
                           <span><i className="fas fa-comments"></i>{reviews}</span>
                        </div>
                    </div>
              </li>
          })}
        </>
    )
};

BlogItem.propTypes = {
    items: PropTypes.array,
}
BlogItem.defaultProps = {
    items: []
}

export default BlogItem;