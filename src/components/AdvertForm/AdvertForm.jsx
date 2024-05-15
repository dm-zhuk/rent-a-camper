import React from 'react';
import {
  Wrapper,
  Description,
  Button,
  Container,
  Heart,
  Favorite,
} from './index';

const AdvertForm = () => {
  return (
    <Wrapper>
      <Description>Embark..</Description>
      <Container>
        <Favorite>
          <Heart src="../../img/heartDefault.svg" alt="Favorite" />
        </Favorite>
      </Container>
      <Button>Show more</Button>

      {/* <section class="InputForm">
        <div class="Card">
          <h2 class="">${name}</h2>
          <h2 class="">€${price}.00</h2>
          <p class="">the form</p>
          <div class="">
            <div class="">
              <picture>
                <img
                  class=""
                  src="/"
                  alt="campervan"
                  width="300"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>{' '}
        </div>
      </section> */}
    </Wrapper>
  );
};

export default AdvertForm;

/*  <Card>
      <Favorite>
        <Heart src="path/to/heart-image.png" alt="Favorite" />
      </Favorite>
    </Card> */
