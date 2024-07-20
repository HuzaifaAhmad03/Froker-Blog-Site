import React, { useState } from 'react';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import './App.css';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';

const FBlog = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (imageName) => {
        setSelectedImage(imageName);
    };

    return (
        <div className='first-main-div'>
            <h1>
                <span className='fhead'>FROKER</span> BLOG
            </h1>
            <p>Articles covering the most recent updates and advancements</p>
            {selectedImage ? (
                <div>
                    {selectedImage === 'image1' && <Content1 />}
                    {selectedImage === 'image2' && <Content2 />}
                    {selectedImage === 'image3' && <Content3 />}
                </div>
            ) : (
                <div className="container">
                    <div className="first-div">
                        <img className="img1" src={image1} alt="Blog Img" onClick={() => handleClick('image1')} />
                        <div>
                            <p className='orange-text'>by Varshita - 9 Feb 2024<br /></p>

                            Title: Mastering the Art of Co... <br />

                            Introduction: Welcome to the dynamic world of content creation, where creativity...

                            <p className='orange-text read-more'>Read More...</p>
                        </div>
                    </div>
                    <div className="second-column">
                        <div className="second-div">
                            <img className="img23" src={image2} alt="Blog Img" onClick={() => handleClick('image2')} />
                            <div className='side-blog'>
                                <p className='orange-text'>by Varshita - 9 Feb 2024<br /></p>

                                Title: Mastering the Art of Co... <br />

                                Introduction: Welcome to the dynamic world of content creation, where creativity...

                                <p className='orange-text read-more'>Read More...</p>
                            </div>
                        </div>
                        <div className="third-div">
                            <img className="img23" src={image3} alt="Blog Img" onClick={() => handleClick('image3')} />
                            <div className='side-blog'>
                                <p className='orange-text'>by Varshita - 9 Feb 2024<br /></p>

                                Title: Mastering the Art of Co... <br />

                                Introduction: Welcome to the dynamic world of content creation, where creativity...

                                <p className='orange-text read-more'>Read More...</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FBlog;