import { useState } from 'react';

const Content = () => {
  const [color, setColor] = useState('');

  return (

    <div className='d-flex flex-column align-items-center h-75'>
      <form className="">
        <div className='d-flex align-items-center border border-dark mt-5' style={{backgroundColor: color, height: 200}}>
          {color === "" ? "Empty color" : ""}
        </div>
        <input
          className='mt-3'
          autoFocus
          required
          id="search"
          type="text"
          placeholder="Search Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Content;