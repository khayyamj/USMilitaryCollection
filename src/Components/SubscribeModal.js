import React from 'react'
import './SubscribeModal.scss'

class SubscribeModal extends React.Component {
  render () {
    return (
      <div className='ancestry-subscribe-modal'>
        <div className='ancestry-subscribe-form'>
          <div className='ancestry-subscribe-form-header'>Subscribe Today</div>
          <form>
            <div className='ancestry-subscribe-form-name-fields'>
              <span className='ancestry-subscribe-form-name-input'>
                <p>Your first name</p>
                <input type='text' />
              </span>
              <span className='ancestry-subscribe-form-name-input'>
                <p>Your last name</p>
                <input type='text' />
              </span>
            </div>
            <div className='ancestry-subscribe-form-email-field'>
              <p>Your email</p>
              <input type='email' />
            </div>
            <button type='submit' className='subscribe-button'>GET STARTED</button>
          </form>
          <p className='modal-fine-print'>By creating an account, you agree to <a href=''>Ancestry Terms and Conditions</a> and understand that your information will be used in accordance with our <a href=''>Privacy Statement</a>, including that we will send you emails about our service and special offers.</p>
          <div className='close-subscribe-modal'>x</div>
        </div>
      </div>
    )
  }
}

export default SubscribeModal
