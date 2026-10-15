import { useState } from 'react'
import './App.css'

function EventHandling() {
  const [boxColor, setBoxColor] = useState('#dbeafe')
  const [message, setMessage] = useState('Double-click the box to see a message.')
  const [keyPressed, setKeyPressed] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    window.alert('Form submitted successfully!')
  }

  return (
    <main className="event-demo">
      <h1>React Event Handling</h1>

      <section aria-labelledby="mouse-events-heading">
        <h2 id="mouse-events-heading">Mouse events</h2>
        <div
          className="color-box"
          style={{ backgroundColor: boxColor }}
          onMouseOver={() => setBoxColor('#bbf7d0')}
          onMouseOut={() => setBoxColor('#dbeafe')}
          onDoubleClick={() => setMessage('The box was double-clicked!')}
        >
          Hover over me or double-click me
        </div>
        <p aria-live="polite">{message}</p>
      </section>

      <section aria-labelledby="keyboard-events-heading">
        <h2 id="keyboard-events-heading">Keyboard event</h2>
        <label htmlFor="key-input">Press a key while focused here:</label>
        <input
          id="key-input"
          type="text"
          onKeyDown={(event) => setKeyPressed(event.key)}
          placeholder="Type to capture a key"
        />
        <label htmlFor="pressed-key">Last key pressed:</label>
        <input id="pressed-key" type="text" value={keyPressed} readOnly />
      </section>

      <section aria-labelledby="form-heading">
        <h2 id="form-heading">Form submit event</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" required />
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  )
}

export default EventHandling
