import React from 'react';
import balloon from 'bootstrap-icons/icons/balloon-heart.svg';
import postcard from 'bootstrap-icons/icons/postcard-heart.svg';

export const Main = () => {
  return (
    <main className="container-fluid">
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={balloon}
          alt="balloon"
          width="72"
          height="57"
        />
        <h1 className="display-1 fw-bold">Balloon hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
            architecto dicta dolor dolores dolorum est eveniet excepturi in iste
            modi non numquam optio quaerat repudiandae rerum totam, voluptatibus
            voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloremque, eveniet ullam!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
            >
              Learn more
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2>Other content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem
          eaque harum ipsum iste omnis praesentium ratione rem. Distinctio
          dolorum error eum explicabo facere fugit iure, minus mollitia odio
          perferendis, provident quam temporibus vitae?
        </p>
        <div
          className="accordion"
          id="accordion"
        >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam aliquid aperiam illum modi saepe veritatis? Ab
                  commodi, cumque dolores explicabo hic labore neque obcaecati
                  porro, possimus quis saepe veniam voluptas.
                </p>
                <h5 className="h5">Lorem ipsum dolor sit amet.</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  aperiam dolore eaque enim, incidunt, ipsum necessitatibus nemo
                  nisi numquam, porro reiciendis saepe veritatis vitae.
                </p>
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg img-fluid"
                  width="100%"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Responsive image"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Title</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="#6dd3ceff"
                  ></rect>
                  <text
                    x="40%"
                    y="45%"
                    fill="#FFFFFF"
                    dy=".3em"
                  >
                    Placeholder for responsive image
                  </text>
                </svg>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam aliquid aperiam illum modi saepe veritatis? Ab
                  commodi, cumque dolores explicabo hic labore neque obcaecati
                  porro, possimus quis saepe veniam voluptas.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda delectus hic ipsum nam, nemo neque sit. Accusantium
                  ad at consectetur consequuntur delectus deserunt, fugiat nihil
                  nulla odio reiciendis repellat repellendus ut voluptatum.
                  Accusantium atque dicta facilis fugit praesentium quaerat quia
                  quibusdam sunt.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo necessitatibus ratione saepe?
                </strong>{' '}
                It is Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab, aliquam debitis libero modi saepe vel. Consequatur delectus
                doloremque, earum est eveniet facilis fugit incidunt laborum
                maxime neque nesciunt nisi odit, officia perspiciatis
                temporibus? Eligendi, in!
                <table className="table table-striped table-hover">
                  <caption className="caption-top">
                    Bootstrap table example
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Col one</th>
                      <th scope="col">Col two</th>
                      <th scope="col">Col three</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Lorem.</td>
                      <td>Lorem ipsum dolor.</td>
                      <td>Lorem ipsum.</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Lorem.</td>
                      <td>Lorem ipsum dolor.</td>
                      <td>Lorem ipsum.</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Lorem.</td>
                      <td>Lorem ipsum dolor.</td>
                      <td>Lorem ipsum.</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Lorem.</td>
                      <td>Lorem ipsum dolor.</td>
                      <td>Lorem ipsum.</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Lorem.</td>
                      <td>Lorem ipsum dolor.</td>
                      <td>Lorem ipsum.</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Lorem.</td>
                      <td>Lorem ipsum dolor.</td>
                      <td>Lorem ipsum.</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Lorem.</td>
                      <td>Lorem ipsum dolor.</td>
                      <td>Lorem ipsum.</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Lorem.</td>
                      <td>Lorem ipsum dolor.</td>
                      <td>Lorem ipsum.</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Lorem.</td>
                      <td>Lorem ipsum dolor.</td>
                      <td>Lorem ipsum.</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Lorem.</td>
                      <td>Lorem ipsum dolor.</td>
                      <td>Lorem ipsum.</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Lorem.</td>
                      <td>Lorem ipsum dolor.</td>
                      <td>Lorem ipsum.</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>Lorem.</td>
                      <td>Lorem ipsum dolor.</td>
                      <td>Lorem ipsum.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                aperiam architecto asperiores atque cupiditate eaque eligendi
                eum in ipsam magnam maiores minus odit pariatur perferendis
                quisquam rem repellendus reprehenderit tenetur ut?
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <h5 className="h5">Cards in the accordion</h5>
                <div className="card-group">
                  <div className="card text-bg-primary">
                    <div className="card-header">The header</div>
                    <img
                      src={postcard}
                      className="card-img-top p-3"
                      alt="postcard"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        Card subtitle
                      </h6>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus eos nobis optio pariatur porro quas rem
                        vitae!
                      </p>
                    </div>
                  </div>

                  <div className="card text-bg-warning">
                    <div className="card-header">The header and...</div>
                    <img
                      src={postcard}
                      className="card-img-top p-3"
                      alt="postcard"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        Card subtitle
                      </h6>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus eos nobis optio pariatur porro quas rem
                        vitae!
                      </p>
                    </div>
                    <div className="card-footer">...the footer</div>
                  </div>
                  <div className="card text-bg-light">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        Card subtitle
                      </h6>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus eos nobis optio pariatur porro quas rem
                        vitae!
                      </p>
                    </div>
                    <img
                      src={postcard}
                      className="card-img-bottom p-3"
                      alt="postcard"
                    />
                  </div>
                  <div className="card text-bg-success">
                    <img
                      src={postcard}
                      className="card-img-top p-3"
                      alt="postcard"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        Card subtitle
                      </h6>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus eos nobis optio pariatur porro quas rem
                        vitae!
                      </p>
                    </div>
                    <div className="card-footer">The footer only</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
          voluptates?
        </strong>{' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        ipsum quos similique! Accusamus architecto consectetur consequatur dolor
        earum fugit possimus ullam unde vero! Aspernatur, doloribus enim natus
        optio perspiciatis quis?
      </p>
    </main>
  );
};
