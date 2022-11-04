import ReloadBtn from './ReloadBtn.js';
import { MdErrorOutline, MdCheckCircleOutline} from "react-icons/md";
import './InfoDialog.css';

function InfoDialog({ noTime }) {
  return (
    <div className="infoModalBackdrop" style={{'display': noTime ? 'block' : 'none'}}> 
      <div className="infoModalDiv">
        <div open className="infoModal">
          <div className="infoModalIcons">
            <MdErrorOutline className='errorIcon' style={{'display': noTime ? 'block' : ''}}/>
            <MdCheckCircleOutline className='successIcon' style={{'display': noTime ? 'none' : ''}}/>
          </div>
          <div className="infoModalText">
            <strong>Error</strong> el tiempo de votación terminó ¡Gracias a todos por su participación!
          </div>
          <span className="load" style={{'display': noTime ? 'none' : ''}}></span>
          <ReloadBtn noTime={noTime}/>
        </div>
      </div>
    </div>
  )
}

export default InfoDialog;