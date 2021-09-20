/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      css={css({
        padding: 10,
        border: 'none',
        backgroundColor: '#9F84BD',
        color: '#fff',
        fontWeight: 600,
        borderRadius: '5px',
      })}
    >
      {props.text}
    </button>
  );
};

export default Button;
