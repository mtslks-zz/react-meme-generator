import { useEffect, useState } from 'react';

function Memegenerator() {
  // create initial useState
  const [textTop, setTextTop] = useState(''); // for upper text

  const [textBottom, setTextBottom] = useState(''); // for bottom textconst [templateImage, setTemplateImage] = useState('aag'); // var to set type of character/id

  // template / target URL for customized meme
  const [customizedMeme, setCustomizedMeme] = useState(
    'https://api.memegen.link/images/morpheus/click_wisely/i´m_about_to_generate_your_meme',
  );
  const [memeArray, setMemeArray] = useState([]); // empty array to save objects from templates
  const [imageTemplate, setImageTemplate] = useState('morpheus');

  // useEffect hook, very similar to componentDidMount/DidUpdate/WillUnmount as combination
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

  // Rendering of the app
  return (
    <div>
      <h1>Very basic looking React Meme Generator</h1>
      <div>
        <label htmlFor="imageTemplate">Template meme: </label>
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

      <input htmlFor="Top Text" value={textTop} onChange={onChangeTextTop} />
      <input
        htmlFor="Bottom Text"
        value={textBottom}
        onChange={onChangeTextBottom}
      />
      <p />
      <div>
        <button onClick={() => onChangeCustomize()}>I want my meme!</button>
      </div>
      <div>
        <p />
        <img src={customizedMeme} alt="Meme" />
      </div>
    </div>
  );
}

export default Memegenerator;
