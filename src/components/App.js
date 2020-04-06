import React from 'react'

import img from '@assets/react-logo.svg'

const App = () => {
  const a = {
    b: 0,
    c: 1,
  }

  return (
    <div>
      <img src={img} />
      <p css={{ color: 'red' }}>Hello from react.</p>
      <p>{a.d?.e || 'Too bad there is no data here'}</p>
    </div>
  )
}

export default App
