import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react'
import axios from 'axios';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {

  const [imgUrl, setImgUrl] = useState()
  
  const getData = async () => {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search")
    const url = response.data[0].url
    setImgUrl(url)
  }

  return (
    <div className="App">
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>Kitty</Card.Title>
        <Card.Text>
          If you are a cat lover, enjoy cat images by clicking the button below!
        </Card.Text>
        <Button variant="primary" onClick={getData}>Cat please!</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
