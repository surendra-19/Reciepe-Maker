import './Main.css'

function GenerateReciepe(props) {
  return (
    <div className='get-reciepe-container'>
        <div>
            <h3>Ready for a reciepe?</h3>
            <p>Generate a reciepe from the list of ingredients.</p>
        </div>
        <button onClick={props.loadReciepe} >Get a reciepe</button>
    </div>
  )
}

export default GenerateReciepe