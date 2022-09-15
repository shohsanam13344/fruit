import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Foto from './Foto';
import fruit1 from './img/apple1.jpg';
import fruit2 from './img/apple2.jpg';
import fruit3 from './img/apple3.jpg';
import fruit4 from './img/apple4.jpg';
import fruit5 from './img/apple5.jpg';
import fruit6 from './img/apple6.jpg';
import fruit7 from './img/apple7.jpg';
import fruit8 from './img/apple8.jpg';
import fruit9 from './img/apple9.jpg';
import fruit10 from './img/apple10.jpg';
import fruit11 from './img/apple11.jpg';
import fruit12 from './img/apple12.jpg';
import fruit13 from './img/apple13.jpg';
import fruit14 from './img/apple14.jpg';
import fruit15 from './img/apple15.jpg';
import fruit16 from './img/apple16.jpg';

const data = [
  { name: 'apple', image: fruit1},
  { name: 'banana', image: fruit2},
  { name: 'peach', image: fruit3},
  { name: 'grape', image: fruit4},
  { name: 'pear', image: fruit5},
  { name: 'pomegranate', image: fruit6},
  { name: 'orange', image: fruit7},
  { name: 'pineapple', image: fruit8},
  { name: 'tangerine', image: fruit9},
  { name: 'strawberry', image: fruit10},
  { name: 'cherry', image: fruit11},
  { name: 'cherry', image: fruit12},
  { name: 'apricot', image: fruit13},
  { name: 'raspberry', image: fruit14},
  { name: 'plum', image: fruit15},
  { name: 'watermelon', image: fruit16}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>My love fruits</h1>
                <hr />
    <div className='container'>
        {

          data.map((value) => {
            return(
              <Foto title={value} />
            )
          })

        }
    </div>
  </React.StrictMode>
);
