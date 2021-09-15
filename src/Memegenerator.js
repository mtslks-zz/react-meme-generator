/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

// defining variables for the Memegenerator
export default function Memegenerator() {
  const [memeData, setMemeData] = useState([]);
  const [memeOutput, setMemeOutput] = useState(
    'https://api.memegen.link/images/morpheus/click_wisely/because_i_am_the_meme_generator.png',
  );
  const [textTop, setTextTop] = useState([]);
  const [textBottom, setTextBottom] = useState([]);

  // fetch template data from link (output comes back as an array of objects with the meme database)

  useEffect(() => {
    axios.get('https://api.memegen.link/templates').then((result) => {
      setMemeData(result.memeData);
    });
  }, []);

  // map over the array to extract required data
  // generateButton

  const generateButton = () => {};
}
