import React, { useEffect, useState } from 'react';
import './ImgCarousel.css';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

const ImgCarousel = ({ imgList }) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const imageTmp = imgList.map((img) => ({
      src: 'http://khangndit.github.io/kauction-app/' + img,
    }));
    setImageList(imageTmp);
  }, []);

  return (
    <div className="imgcarousel__wrapper">
      <Carousel
        images={imageList}
        hasMediaButton={false}
        hasSizeButton={false}
        hasIndexBoard={false}
        thumbnailWidth="130px"
        leftIcon={<CaretLeftOutlined style={{ fontSize: 25, color: '#fff' }} />}
        rightIcon={
          <CaretRightOutlined style={{ fontSize: 25, color: '#fff' }} />
        }
      />
    </div>
  );
};

export default ImgCarousel;
