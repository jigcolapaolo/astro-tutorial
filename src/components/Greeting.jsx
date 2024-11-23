import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button 
        onClick={() => setGreeting(randomMessage())}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          border: 'none',
          background: 'rgb(138, 12, 145)',
          color: 'white',
          cursor: 'pointer'
        }}>
        New Greeting
      </button>
    </div>
  );
}