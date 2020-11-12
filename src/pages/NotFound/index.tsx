import React from 'react';
import homeIcon from '../../assets/scarecrow.png';
import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container data-testid="notfound-container">
      <header>
        <h2>404 NOT FOUND</h2>
      </header>
      <section>
        <div>
          <img src={homeIcon} alt="straw man" />
        </div>
        <div>
          <h1>I have bad news for you</h1>
          <p>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <a title="Go to home page" href="/">
            Back to homepage
          </a>
        </div>
      </section>
      <footer>
        <strong>Vinicius Dias @ DevChallengis.io</strong>
      </footer>
    </Container>
  );
};

export default NotFound;
