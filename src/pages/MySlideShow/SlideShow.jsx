import React from 'react';
import './SlideShow.css';
import { Carousel, Col, Row } from 'antd';

const SlideShow = () => {
  return (
    <div className="slideshow__wrapper">
      <div className="container slideshow">
        <Row gutter={12}>
          <Col span={16}>
            <Carousel autoplay>
              <div>
                <img
                  className="slideshow__img pointer"
                  src="/images/slideshow/slideshow1.png"
                  alt="error"
                />
              </div>
              <div>
                <img
                  className="slideshow__img pointer"
                  src="/images/slideshow/slideshow2.png"
                  alt="error"
                />
              </div>
              <div>
                <img
                  className="slideshow__img pointer"
                  src="/images/slideshow/slideshow3.png"
                  alt="error"
                />
              </div>
              <div>
                <img
                  className="slideshow__img pointer"
                  src="/images/slideshow/slideshow4.png"
                  alt="error"
                />
              </div>
            </Carousel>
          </Col>
          <Col span={8}>
            <div className="slideshow__left">
              <img
                className="slideshow__left-img pointer"
                src="/images/slideshow/slideshow1.png"
                alt="error"
              />
              <img
                className="slideshow__left-img pointer"
                src="/images/slideshow/slideshow2.png"
                alt="error"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SlideShow;
