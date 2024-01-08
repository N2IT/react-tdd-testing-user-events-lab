import { useState } from 'react'

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [formSubmitted, setFormAsSubmitted] = useState(false)
  const [htmlIsChecked, setHtmlAsChecked] = useState(false)
  const [cssIsChecked, setCssAsChecked] = useState(false)
  const [javascriptIsChecked, setJavascriptAsChecked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormAsSubmitted(true)
  }

  const toggleHtml = (e) => setHtmlAsChecked(e.target.checked)
  const toggleCss = (e) => setCssAsChecked(e.target.checked)
  const toggleJavascript = (e) => setJavascriptAsChecked(e.target.checked)

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Sign up for my Newsletter!</h3>
        <label htmlFor="name">Enter your Name: </label>
        <input
          type="text"
          value={name}
          placeholder="Name"
          id="name"
          data-testid="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Enter your email address: </label>
        <input
          type="text"
          value={email}
          id="email"
          data-testid="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email address'
        />
        <p>Select your interests</p>
        <input
          name="html"
          type="checkbox"
          id="html"
          data-testid="html"
          checked={htmlIsChecked}
          aria-checked={htmlIsChecked}
          onChange={toggleHtml}
        />
        <label htmlFor="html">HTML</label>
        <br />
        <input
          type="checkbox"
          id="css"
          data-testid="css"
          checked={cssIsChecked}
          aria-checked={cssIsChecked}
          onChange={toggleCss}
        />
        <label htmlFor="css">CSS</label>
        <br />
        <input
          type="checkbox"
          id="javascript"
          data-testid="javascript"
          checked={javascriptIsChecked}
          aria-checked={javascriptIsChecked}
          onChange={toggleJavascript}
        />
        <label htmlFor="javascript">JavaScript</label>
      </form>
      <button type="submit">Submit</button>
    </main>
  );
}

export default App;
