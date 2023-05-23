import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ig1 from '../../../assets/img/ig/ig1.png'
import ig2 from '../../../assets/img/ig/ig2.png';
import ig3 from '../../../assets/img/ig/ig3.png';



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  }
};

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { translateX: 0 };
  }

  handleMouseEnter = () => {
    this.setState({ translateX: -30 });
  };

  handleMouseLeave = () => {
    this.setState({ translateX: 0 });
  };

  render() {
    const imageStyle = {
      transform: `translateX(${this.state.translateX}px)`,
      transition: 'transform 0.5s',
    };

    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}
      >
        <img src={this.props.src} alt={this.props.caption} style={{ ...imageStyle, width: '100%', height: 'auto' }} />
        <div className="title">{this.props.caption}</div>
      </div>
    );
  }
}

class InstagramCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentDidMount() {
    // Local images
    const localImages = [
      { media_url: ig1, caption: 'Image 1' },
      { media_url: ig2, caption: 'Image 2' },
      { media_url: ig3, caption: 'Image 3' },
      // Add more local images as needed
    ];
    this.setState({ images: localImages });
  }

  render() {
    return (

        <Carousel responsive={responsive} partialVisible={true} className="ig-carousel"
        >
          {this.state.images.map((image, index) => (
            <CarouselItem key={index} src={image.media_url} caption={image.caption} />
          ))}
        </Carousel>

    );
  }
}

export default InstagramCarousel;
