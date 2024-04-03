import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./ProjectDescriptionCarousel.css";
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon


function ProjectDescriptionCarousel() {
  return (
    <Carousel fade controls={false} indicators={false} >
      <Carousel.Item className="carousel">
        <div className="description">
          <p style={{fontSize: "2vh"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis eget justo non posuere. Nullam at venenatis tortor. Proin rhoncus lectus sit amet aliquam mollis. Ut aliquam, mi nec tempor consequat, leo tellus egestas massa, in laoreet ex ipsum sed sem. Nullam pellentesque lorem in velit aliquam commodo. Etiam rhoncus pharetra tortor eget iaculis. Sed quam dolor, efficitur sit amet neque non, feugiat mattis libero.
          </p>

          <div className='buttonsWrapper'>
            <div><button className='projectButton'>Visit Project</button></div>
            <div className="round-button"><a href=""><FontAwesomeIcon icon={faGithub} className="icon"/></a></div>
          </div>

        </div>
      </Carousel.Item>

      <Carousel.Item className="carousel">
        <div className="description">
          <p style={{fontSize: "2vh"}}>
            Donec nibh enim, egestas eget porta ac, tristique sed purus. Morbi viverra euismod tincidunt. Praesent libero enim, aliquet vehicula aliquam ut, ornare sit amet ipsum. Cras congue mollis risus, vel sagittis felis pellentesque quis. Nullam molestie pulvinar nisi, vitae tristique velit rhoncus id. Fusce mollis tincidunt risus, ac molestie elit sodales at. Cras congue eget nisi vitae hendrerit. Nunc eget enim orci. Mauris aliquam magna in convallis euismod. Cras vitae eros ipsum. Etiam ultricies diam eget ullamcorper fermentum. Mauris mollis lacus sit amet malesuada viverra.
          </p>
         
          <div className='buttonsWrapper'>
            <div><button className='projectButton'>Visit Project</button></div>
            <div className="round-button"><a href=""><FontAwesomeIcon icon={faGithub} className="icon"/></a></div>
          </div>
          
        </div>
      </Carousel.Item>

      <Carousel.Item className="carousel">
        <div className="description">
          <p style={{fontSize: "2vh"}}>
            Phasellus tellus nisl, condimentum sed urna sit amet, porttitor consequat neque. Cras vitae facilisis sapien, vitae sagittis lacus. Pellentesque in ullamcorper ex, sed fermentum urna. Nullam eget pulvinar mi. Nunc rutrum tincidunt justo, eu convallis sem aliquam in. Vivamus sapien sapien, laoreet eget gravida id, suscipit vitae tortor. Nullam vitae tortor sagittis erat congue sagittis sed at eros. Donec a eros at augue tristique commodo mattis eu diam.
          </p>
          
          <div className='buttonsWrapper'>
            <div><button className='projectButton'>Visit Project</button></div>
            <div className="round-button"><a href=""><FontAwesomeIcon icon={faGithub} className="icon"/></a></div>
          </div>
          
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectDescriptionCarousel;
