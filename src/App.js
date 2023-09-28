import './App.css';
import { useState } from "react" ;
import { marked } from 'marked';


function App() {

  const [text, setText] = useState(`
  # This is a heading element H1

  ## This is a subheading element H2

  [title](https://www.example.com)

  \`code\` This is a code block

  \`\`\`
  {
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
  }
  \`\`\`

  1. First item
  2. Second item
  3. Third item

  > This is a blockquote

  ![alt text](image.jpg)
  **bold text**
  `);

  marked.setOptions({
    breaks: true
  });


  return (
    <div className="main">
      <div className="editorDiv">
      <div className='header'>Editor</div>
      <textarea id="editor" onChange={(e) => {setText(e.target.value);}} value={text}></textarea>
      </div>
      <div id="wrapper">
        <div className='header'>Previewer</div>
        <div id='preview' dangerouslySetInnerHTML={{__html: marked(text)}}>
      </div>
      </div>
    </div>
  );
}

export default App;
