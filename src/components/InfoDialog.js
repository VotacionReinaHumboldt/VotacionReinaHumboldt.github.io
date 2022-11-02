import ReloadBtn from './ReloadBtn.js';
import { MdErrorOutline, MdCheckCircleOutline} from "react-icons/md";
import './InfoDialog.css';

function InfoDialog() {
  return (
    <div className="infoModalBackdrop" style={{'display': 'none'}}> 
      <div className="infoModalDiv">
        <div open className="infoModal">
          <div className="infoModalIcons">
            <MdErrorOutline className='errorIcon'/>
            <MdCheckCircleOutline className='successIcon'/>
          </div>
          <div className="infoModalText"></div>
          <span className="load"></span>
          <ReloadBtn />
        </div>
      </div>
    </div>
  )
}

export default InfoDialog;