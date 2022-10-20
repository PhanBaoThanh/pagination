import './App.scss';
import {useState} from 'react'
import img1 from './img/1/user1.jpg'
import img2 from './img/1/user2.png'
import img3 from './img/1/user3.png'
import img4 from './img/1/user4.jpg'
import img5 from './img/1/user5.jpg'
import img6 from './img/1/user6.jpg'
import img7 from './img/1/user7.jpg'
import img8 from './img/1/user8.jpg'
import img9 from './img/1/user9.png'
import img10 from './img/1/user10.jpg'

function App() {
  const data = [
    [
      {
        name: "Tarasis",
        img: img1
      },
      {
        name: "Benackles",
        img: img2
      },
      {
        name: "Jagdpenta",
        img: img3
      },
      {
        name: "Elvan",
        img: img4
      },
      {
        name: "Taosapp",
        img: img5
      },
      {
        name: "Cksachdev",
        img: img6
      },
      {
        name: "Undencem",
        img: img7
      },
      {
        name: "Pauloesantos",
        img: img8
      },
      {
        name: "Eemor",
        img: img9
      },
      {
        name: "Arthu",
        img: img10
      },
    ],
    [
      {
        name: "Tarasis",
        img: img3
      },
      {
        name: "Benackles",
        img: img2
      },
      {
        name: "Jagdpenta",
        img: img3
      },
      {
        name: "Elvan",
        img: img4
      },
      {
        name: "Taosapp",
        img: img5
      },
      {
        name: "Cksachdev",
        img: img6
      },
      {
        name: "Undencem",
        img: img7
      },
      {
        name: "Pauloesantos",
        img: img8
      },
      {
        name: "Eemor",
        img: img9
      },
      {
        name: "Arthu",
        img: img10
      },
    ],
    [
      {
        name: "Tarasis",
        img: img2
      },
      {
        name: "Benackles",
        img: img2
      },
      {
        name: "Jagdpenta",
        img: img3
      },
      {
        name: "Elvan",
        img: img4
      },
      {
        name: "Taosapp",
        img: img5
      },
      {
        name: "Cksachdev",
        img: img6
      },
      {
        name: "Undencem",
        img: img7
      },
      {
        name: "Pauloesantos",
        img: img8
      },
      {
        name: "Eemor",
        img: img9
      },
      {
        name: "Arthu",
        img: img10
      },
    ],
    [
      {
        name: "Tarasis",
        img: img5
      },
      {
        name: "Benackles",
        img: img2
      },
      {
        name: "Jagdpenta",
        img: img3
      },
      {
        name: "Elvan",
        img: img4
      },
      {
        name: "Taosapp",
        img: img5
      },
      {
        name: "Cksachdev",
        img: img6
      },
      {
        name: "Undencem",
        img: img7
      },
      {
        name: "Pauloesantos",
        img: img8
      },
      {
        name: "Eemor",
        img: img9
      },
      {
        name: "Arthu",
        img: img10
      },
    ],
    [
      {
        name: "Tarasis",
        img: img10
      },
      {
        name: "Benackles",
        img: img2
      },
      {
        name: "Jagdpenta",
        img: img3
      },
      {
        name: "Elvan",
        img: img4
      },
      {
        name: "Taosapp",
        img: img5
      },
      {
        name: "Cksachdev",
        img: img6
      },
      {
        name: "Undencem",
        img: img7
      },
      {
        name: "Pauloesantos",
        img: img8
      },
      {
        name: "Eemor",
        img: img9
      },
      {
        name: "Arthu",
        img: img10
      },
    ],
    [
      {
        name: "Tarasis",
        img: img9
      },
      {
        name: "Benackles",
        img: img2
      },
      {
        name: "Jagdpenta",
        img: img3
      },
      {
        name: "Elvan",
        img: img4
      },
      {
        name: "Taosapp",
        img: img5
      },
      {
        name: "Cksachdev",
        img: img6
      },
      {
        name: "Undencem",
        img: img7
      },
      {
        name: "Pauloesantos",
        img: img8
      },
      {
        name: "Eemor",
        img: img9
      },
      {
        name: "Arthu",
        img: img10
      },
    ],
    [
      {
        name: "Tarasis",
        img: img8
      },
      {
        name: "Benackles",
        img: img2
      },
      {
        name: "Jagdpenta",
        img: img3
      },
      {
        name: "Elvan",
        img: img4
      },
      {
        name: "Taosapp",
        img: img5
      },
      {
        name: "Cksachdev",
        img: img6
      },
      {
        name: "Undencem",
        img: img7
      },
      {
        name: "Pauloesantos",
        img: img8
      },
      {
        name: "Eemor",
        img: img9
      },
      {
        name: "Arthu",
        img: img10
      },
    ],
    [
      {
        name: "Tarasis",
        img: img7
      },
      {
        name: "Benackles",
        img: img2
      },
      {
        name: "Jagdpenta",
        img: img3
      },
      {
        name: "Elvan",
        img: img4
      },
      {
        name: "Taosapp",
        img: img5
      },
      {
        name: "Cksachdev",
        img: img6
      },
      {
        name: "Undencem",
        img: img7
      },
      {
        name: "Pauloesantos",
        img: img8
      },
      {
        name: "Eemor",
        img: img9
      },
      {
        name: "Arthu",
        img: img10
      },
    ],
    [
      {
        name: "Tarasis",
        img: img6
      },
      {
        name: "Benackles",
        img: img2
      },
      {
        name: "Jagdpenta",
        img: img3
      },
      {
        name: "Elvan",
        img: img4
      },
      {
        name: "Taosapp",
        img: img5
      },
      {
        name: "Cksachdev",
        img: img6
      },
      {
        name: "Undencem",
        img: img7
      },
      {
        name: "Pauloesantos",
        img: img8
      },
      {
        name: "Eemor",
        img: img9
      },
      {
        name: "Arthu",
        img: img10
      },
    ],
    [
      {
        name: "Tarasis",
        img: img3
      },
      {
        name: "Benackles",
        img: img4
      },
      {
        name: "Jagdpenta",
        img: img3
      },
      {
        name: "Elvan",
        img: img4
      },
      {
        name: "Taosapp",
        img: img6
      },
      {
        name: "Cksachdev",
        img: img6
      },
      {
        name: "Undencem",
        img: img7
      },
      {
        name: "Pauloesantos",
        img: img8
      },
      {
        name: "Eemor",
        img: img9
      },
      {
        name: "Arthu",
        img: img10
      },
    ],

  ]

  const [pageNumber,setPageNumber] = useState(0)
  const [dataUser,setDataUser] = useState(data[0])

  const handleClickPageNumberBtn = index => {
    setPageNumber(index)
    setDataUser(data[index])
  }

  const handleClickNextBtn = () => {
    if(pageNumber === data.length - 1){
      setPageNumber(0)
      setDataUser(data[0])
    }
    else{
      setPageNumber(prev => prev + 1)
      setDataUser(data[pageNumber + 1])
    }
  }

  const handleClickPrevBtn = () => {
    if(pageNumber === 0){
      setPageNumber(data.length - 1)
      setDataUser(data[data.length - 1])
    }
    else{
      setPageNumber(prev => prev - 1)
      setDataUser(data[pageNumber - 1])
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h2>
          Pagination
          <div className='line'></div>
        </h2>
      </div>

      <div className='users'>

      {
        dataUser.map((item,index) => (
          <div className='user' key={index}>
            <div className="userItem">
              <div className='img'>
                <img src={item.img} alt='ptc' />
              </div>

              <p className='userName'>{item.name}</p>
              <a href="" className='userBtn'>VIEW PROFILE</a>
            </div>
          </div>
        ))
      }
        
      </div>

      <div className='pageNumber'>
        <div className='pageBtn' onClick={handleClickPrevBtn}>Prev</div>
        {
          data.map((item,index) => (
            <div onClick={() => handleClickPageNumberBtn(index)} className={`pageItem ${index === pageNumber ? 'active' : ''}`} key={index}>{index + 1}</div>
          ))
        }
        <div className='pageBtn' onClick={handleClickNextBtn}>Next</div>
      </div>
    </div>
  );
}

export default App;
