import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Loader from '../components/Loader/Loader';
import './style/Blog.css';

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Latest Jewelry Trends 2024",
      category: "Fashion",
      date: "March 15, 2024",
      image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*yBt65HhmARbqZDDJ1McFDg.png",
      excerpt: "Discover the hottest jewelry trends that are making waves this season...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Sarah Johnson",
      readTime: "5 min read",
      tags: ["Trends", "Fashion", "Jewelry"]
    },
    {
      id: 2,
      title: "How to Care for Your Fine Jewelry",
      category: "Guide",
      date: "March 12, 2024",
      image: "https://reputationtoday.in/wp-content/uploads/2020/04/bigstock-Blog-Blogging-Homepage-Social-134171063-777x437.jpg",
      excerpt: "Essential tips and tricks to keep your precious jewelry sparkling...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Michael Smith",
      readTime: "7 min read",
      tags: ["Care", "Maintenance", "Tips"]
    }
  ];

  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleCloseDetail = () => {
    setSelectedPost(null);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="blog-page">
          <div className="blog-hero">
            <Container>
              <h1>Our Blog</h1>
              <p>Discover the latest trends, tips, and stories in jewelry</p>
            </Container>
          </div>

          {selectedPost ? (
            <Container className="blog-detail-section">
              <button className="back-button" onClick={handleCloseDetail}>
                ← Back to Articles
              </button>
              <div className="blog-detail">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="detail-image"
                  onError={(e) => { e.target.src = '/fallback-image.jpg'; }}
                />
                <div className="detail-meta">
                  <span className="detail-category">{selectedPost.category}</span>
                  <span className="detail-date">{selectedPost.date}</span>
                  <span className="detail-read-time">{selectedPost.readTime}</span>
                </div>
                <h2 className="detail-title">{selectedPost.title}</h2>
                <div className="detail-author">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${selectedPost.author}`} 
                    alt={selectedPost.author}
                    className="author-avatar"
                  />
                  <span className="author-name">{selectedPost.author}</span>
                </div>
                <div className="detail-content">
                  <p>{selectedPost.content}</p>
                </div>
                <div className="detail-tags">
                  {selectedPost.tags.map((tag, index) => (
                    <span key={index} className="tag">#{tag}</span>
                  ))}
                </div>
              </div>
            </Container>
          ) : (
            <Container className="blog-content">
              <Row className="g-4">
                {blogPosts.map((post) => (
                  <Col key={post.id} xs={12} md={6} lg={4}>
                    <Card 
                      className="blog-card h-100" 
                      onClick={() => handlePostClick(post)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="blog-image-wrapper">
                        <Card.Img 
                          variant="top" 
                          src={post.image} 
                          className="blog-image"
                          onError={(e) => { e.target.src = '/fallback-image.jpg'; }}
                        />
                        <span className="blog-category">{post.category}</span>
                      </div>
                      <Card.Body>
                        <div className="blog-meta">
                          <span className="blog-date">{post.date}</span>
                          <span className="blog-read-time">{post.readTime}</span>
                        </div>
                        <Card.Title className="blog-title">{post.title}</Card.Title>
                        <Card.Text className="blog-excerpt">{post.excerpt}</Card.Text>
                        <div className="blog-author">
                          <img 
                            src={`https://ui-avatars.com/api/?name=${post.author}`} 
                            alt={post.author}
                            className="author-avatar"
                          />
                          <span className="author-name">{post.author}</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          )}
        </div>
      )}
    </>
  );
};

export default Blog;
