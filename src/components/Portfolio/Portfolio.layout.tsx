import heart from 'bootstrap-icons/icons/heart.svg';
import hearts from 'bootstrap-icons/icons/hearts.svg';
import hypno from 'bootstrap-icons/icons/hypnotize.svg';
import stamp from 'bootstrap-icons/icons/postage-heart.svg';

export const Portfolio = () => {
  return (
    <div className="container-fluid">
      <h2 className="display-4 m-3">Portfolio</h2>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active p-3">
            <img
              src={heart}
              className="d-block w-100"
              alt="heart"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis fugit ipsa magni quasi vero voluptas!
              </p>
            </div>
          </div>
          <div className="carousel-item p-3">
            <img
              src={hypno}
              className="d-block w-100"
              alt="hypno"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                beatae illum necessitatibus quisquam soluta suscipit voluptatum?{' '}
              </p>
            </div>
          </div>
          <div className="carousel-item p-3">
            <img
              src={hearts}
              className="d-block w-100"
              alt="hearts"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                ipsam quidem rerum.
              </p>
            </div>
          </div>
          <div className="carousel-item p-3">
            <img
              src={stamp}
              className="d-block w-100"
              alt="stamp"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>4th slide label</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, placeat sed.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
