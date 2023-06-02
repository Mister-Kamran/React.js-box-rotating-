function Test() {
  const box_rotate = useRef(null);


  const [rotate,setRotate] = useState(false);

  const handleClick = () => {

    if (rotate === false) {
      setRotate(true);
      box_rotate.current.style.transform = 'rotate(360deg)';
    }else{

      setRotate(false);
      box_rotate.current.style.transform = 'rotate(0deg)';
    }
    

     
  };

  return (
    <div>
      <div className='game_container'>
        <button onClick={handleClick}>Click Me</button>
 

        <div  ref={box_rotate} className='box'></div>

         
      </div>
    </div>
  );
}

export default Test;
