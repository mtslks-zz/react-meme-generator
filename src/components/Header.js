/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import logo from '../img/logo.png';

export default function Header() {
  return (
    <body>
      <div
        css={css({
          margin: 20,
          padding: 50,
          borderRadius: '10px',
          borderStyle: 'solid',
          display: 'flex-between',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'navy',
        })}
      >
        <img src={logo} width="300" height="300" alt="Logo" />
        <h1>Customize Your Own Meme</h1>
      </div>
    </body>
  );
}
