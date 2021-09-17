import { useEffect, useState } from 'react';

function Memegenerator() {
  // create initial useState
  const [textTop, setTextTop] = useState(''); // for upper text

  const [textBottom, setTextBottom] = useState(''); // for bottom textconst [templateImage, setTemplateImage] = useState('aag'); // var to set type of character/id

  // template / target URL for customized meme
  const [customizedMeme, setCustomizedMeme] = useState(
    'https://api.memegen.link/images/morpheus/click_wisely/i_am_about_to_generate_your_meme',
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

  // we need to replace textTop & textBottom with something that changes it into adding "_" between the words
  const newTextTop = textTop.split(' ').join('_');
  const newTextBottom = textBottom.split(' ').join('_');

  // onChangeCustomize = function to generate new URL for custom meme
  const onChangeCustomize = () => {
    setCustomizedMeme(
      `https://api.memegen.link/images/${imageTemplate}/${newTextTop}/${newTextBottom}.png`,
    );
  };

  return (
    <div>
      <h1>React Meme Generator</h1>
      <div>
        <label htmlFor="imageTemplate">Template meme: </label>
        <select
          id="image"
          placeholder="template meme"
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

      <div>
        <button click={onChangeCustomize}>I want my new meme!</button>
      </div>

      <div>
        <img src={customizedMeme} alt="Meme" />
      </div>
    </div>
  );
}

export default Memegenerator;
