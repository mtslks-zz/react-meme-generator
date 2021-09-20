/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import Header from './components/Header.js';
import Memegenerator from './components/Memegenerator.js';

// import backgroundImage from './img/cool-background.png';

/* const appStyles = css`
  background-color: white;
  background-image: '${backgroundImage}';
  background-attachment: fixed;
  background-size: cover;
`; */

export default function App() {
  return (
    <div>
      <div
        css={{
          padding: '20px',
          size: '50%',
          align: 'left',
          flexDirection: 'row',
          justifyContent: 'center',
          justifyItems: 'center',
        }}
      >
        <Header />
        <Memegenerator />
      </div>
    </div>
  );
}
