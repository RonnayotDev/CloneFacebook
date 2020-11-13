import React,{useState} from 'react'
import { Style } from './MessengerStyle'

const Messenger = () => {
    const [open , setOpen] = useState(false);

    return (
          <Style>
            <button 
              className='messsager-tab'
              onClick={() => setOpen(!open)}
            >
               Ronnayot
            </button>
            {open && (
              <div className='messsager-box'>
                this is messager box
              </div>
            )}

           </Style>
           
       
    )
}

export default Messenger
