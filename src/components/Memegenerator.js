// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import { saveAs } from 'file-saver';
import { useEffect, useState } from 'react';

export default function Memegenerator() {
  // create initial useState
  const [textTop, setTextTop] = useState(''); // for upper text

  const [textBottom, setTextBottom] = useState(''); // for bottom textconst [templateImage, setTemplateImage] = useState('aag'); // var to set type of character/id

  // template / target URL for customized meme
  const [customizedMeme, setCustomizedMeme] = useState(
    'https://api.memegen.link/images/morpheus/click_wisely/i´m_about_to_generate_your_meme',
  );
  const [memeArray, setMemeArray] = useState([]); // empty array to save objects from templates
  const [imageTemplate, setImageTemplate] = useState('morpheus');

  // useEffect hook to fetch array and pass it into template Array
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.memegen.link/templates'); // returns promise
        const json = await response.json(); // setTemplate for response
        setMemeArray(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); // calling function
  }, []);

  // Event handlers
  // onChangeTextTop = function that will change update state of textTop
  const onChangeTextTop = (event) => {
    setTextTop(event.currentTarget.value);
  };

  // onChangeTextBottom = function that will change update state of textTop
  const onChangeTextBottom = (event) => {
    setTextBottom(event.currentTarget.value);
  };

  // onChangeTextTop = function that will change update state of textTop
  const onChangeImageTemplate = (event) => {
    setImageTemplate(event.currentTarget.value);
  };

  // onChangeCustomize = function to generate new URL for custom meme
  const onChangeCustomize = () => {
    setCustomizedMeme(
      `https://api.memegen.link/images/${imageTemplate}/${textTop}/${textBottom}.png`,
    );
  };

  const onClickDownload = () => {
    saveAs(customizedMeme, `${imageTemplate}-${textTop}-${textBottom}.png`);
  };

  // Rendering of the app
  return (
    <div>
      <div>
        <label htmlFor="imageTemplate">1. Pick template: </label>
        <p />
        <select
          id="image"
          placeholder="template image"
          // displays image, will show new image on change
          value={imageTemplate}
          onChange={onChangeImageTemplate}
        >
          {memeArray.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <p />
      2. Enter top & bottom text:
      <p />
      <input
        htmlFor="Top Text"
        value={textTop}
        onChange={onChangeTextTop}
        placeholder="Enter top text..."
      />
      <p />
      <input
        htmlFor="Bottom Text"
        value={textBottom}
        onChange={onChangeTextBottom}
        placeholder="Enter bottom text..."
      />
      <p />
      3. Generate your custom meme: <p />
      <div>
        <button onClick={() => onChangeCustomize()}>I want my meme!</button>
        <button onClick={() => onClickDownload()}>Download meme!</button>
      </div>
      <div>
        <p />
        <img src={customizedMeme} alt="Meme" />
      </div>
    </div>
  );
}
