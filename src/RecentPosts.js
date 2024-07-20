import React, { useState } from 'react';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image8.png';
import './App.css';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';

const RecentPosts = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (imageName) => {
        setSelectedImage(imageName);
    };

    return (
        <div className='first-main-div'>
            <p className='recent-head'>Recent Posts</p>
            {selectedImage ? (
                <div>
                    {selectedImage === 'image1' && <Content1 />}
                    {selectedImage === 'image2' && <Content2 />}
                    {selectedImage === 'image3' && <Content3 />}
                </div>
            ) : (
                <div className="container">
                    <div className="recent-div">
                        <img className="recent-img" src={image4} alt="Blog Img" onClick={() => handleClick('image1')} />
                        <div>
                            <p className='orange-text'>by Varshita - 9 Feb 2024<br /></p>

                            Title: Mastering the Art of Co... <br />

                            Introduction: Welcome to the dynamic world of content creation, where creativity...

                            <p className='orange-text read-more'>Read More...</p>
                        </div>
                    </div>
                    <div className="recent-div">
                        <img className="recent-img" src={image5} alt="Blog Img" onClick={() => handleClick('image1')} />
                        <div>
                            <p className='orange-text'>by Varshita - 9 Feb 2024<br /></p>

                            Title: Mastering the Art of Co... <br />

                            Introduction: Welcome to the dynamic world of content creation, where creativity...

                            <p className='orange-text read-more'>Read More...</p>
                        </div>
                    </div>
                    <div className="recent-div">
                        <img className="recent-img" src={image6} alt="Blog Img" onClick={() => handleClick('image1')} />
                        <div>
                            <p className='orange-text'>by Varshita - 9 Feb 2024<br /></p>

                            Title: Mastering the Art of Co... <br />

                            Introduction: Welcome to the dynamic world of content creation, where creativity...

                            <p className='orange-text read-more'>Read More...</p>
                        </div>
                    </div>
                    <div className="recent-div">
                        <img className="recent-img" src={image7} alt="Blog Img" onClick={() => handleClick('image1')} />
                        <div>
                            <p className='orange-text'>by Varshita - 9 Feb 2024<br /></p>

                            Title: Mastering the Art of Co... <br />

                            Introduction: Welcome to the dynamic world of content creation, where creativity...

                            <p className='orange-text read-more'>Read More...</p>
                        </div>
                    </div>
                    <div className="recent-div">
                        <img className="recent-img" src={image8} alt="Blog Img" onClick={() => handleClick('image1')} />
                        <div>
                            <p className='orange-text'>by Varshita - 9 Feb 2024<br /></p>

                            Title: Mastering the Art of Co... <br />

                            Introduction: Welcome to the dynamic world of content creation, where creativity...

                            <p className='orange-text read-more'>Read More...</p>
                        </div>
                    </div>
                    <div className="recent-div">
                        <img className="recent-img" src={image4} alt="Blog Img" onClick={() => handleClick('image1')} />
                        <div>
                            <p className='orange-text'>by Varshita - 9 Feb 2024<br /></p>

                            Title: Mastering the Art of Co... <br />

                            Introduction: Welcome to the dynamic world of content creation, where creativity...

                            <p className='orange-text read-more'>Read More...</p>
                        </div>
                    </div>
                    <div className="recent-div">
                        <img className="recent-img" src={image5} alt="Blog Img" onClick={() => handleClick('image1')} />
                        <div>
                            <p className='orange-text'>by Varshita - 9 Feb 2024<br /></p>

                            Title: Mastering the Art of Co... <br />

                            Introduction: Welcome to the dynamic world of content creation, where creativity...

                            <p className='orange-text read-more'>Read More...</p>
                        </div>
                    </div>
                    <div className="recent-div">
                        <img className="recent-img" src={image7} alt="Blog Img" onClick={() => handleClick('image1')} />
                        <div>
                            <p className='orange-text'>by Varshita - 9 Feb 2024<br /></p>

                            Title: Mastering the Art of Co... <br />

                            Introduction: Welcome to the dynamic world of content creation, where creativity...

                            <p className='orange-text read-more'>Read More...</p>
                        </div>
                    </div>
                    <div className="recent-div">
                        <img className="recent-img" src={image6} alt="Blog Img" onClick={() => handleClick('image1')} />
                        <div>
                            <p className='orange-text'>by Varshita - 9 Feb 2024<br /></p>

                            Title: Mastering the Art of Co... <br />

                            Introduction: Welcome to the dynamic world of content creation, where creativity...

                            <p className='orange-text read-more'>Read More...</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecentPosts;