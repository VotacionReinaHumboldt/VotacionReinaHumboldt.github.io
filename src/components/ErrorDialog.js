import ReloadBtn from './ReloadBtn.js'
import './ErrorDialog.css'

function ErrorDialog() {
  return (
    <div className="errorModalBackdrop" style={{'display': 'none'}}> 
      <div className="errorModalDiv">
        <div open className="errorModal">
          <div className="errorModalText"></div>
          <div className="load">
            <div className="spin"></div>
          </div>
          <ReloadBtn />
        </div>
      </div>
    </div>
  )
}

export default ErrorDialog