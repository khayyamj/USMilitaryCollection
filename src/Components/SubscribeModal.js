import React from 'react'
import './SubscribeModal.scss'

let firstNameValidation = true
let lastNameValidation = true
let emailValidation = true

const validateEmail = function (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

class SubscribeModal extends React.Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event, type) {
    this.setState({ [type]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('Submit: ', this.state)
    this.state.firstName ? firstNameValidation = true : firstNameValidation = false
    this.state.lastName ? lastNameValidation = true : lastNameValidation = false
    validateEmail(this.state.email) ? emailValidation = true : emailValidation = false
    if (this.state.firstName && this.state.lastName && this.state.email) {
      this.setState({
        firstName: '',
        lastName: '',
        email: ''
      })
    } else {
      this.forceUpdate()
    }
  }

  render () {
    return (
      <div className='ancestry-subscribe-modal'>
        <div className='ancestry-subscribe-form'>
          <div className='ancestry-subscribe-form-header'>Subscribe Today</div>
          <form onSubmit={this.handleSubmit}>
            <div className='ancestry-subscribe-form-name-fields'>
              <span className='ancestry-subscribe-form-name-input'>
                {firstNameValidation ? <p>Your first name</p> : <p className='validation-warning'>Your first name
                  <span className='validation-warning'>
                    <img src='../images/warning.png' className='validation-warning' /> Required
                  </span>
                </p>
                }
                <input
                  type='text'
                  value={this.state.firstName}
                  onChange={(event) => this.handleChange(event, 'firstName')}
                />
              </span>
              <span className='ancestry-subscribe-form-name-input'>
                {lastNameValidation ? <p>Your last name</p> : <p className='validation-warning'>Your last name
                  <span className='validation-warning'>
                    <img src='../images/warning.png' className='validation-warning' /> Required
                  </span>
                </p>
                }
                <input
                  type='text'
                  value={this.state.lastName}
                  onChange={(event) => this.handleChange(event, 'lastName')}

                />
              </span>
            </div>
            <div className='ancestry-subscribe-form-email-field'>
              {emailValidation ? <p>Your email</p> : <p className='validation-warning'>Your email
                <span className='validation-warning'>
                  <img src='../images/warning.png' className='validation-warning' /> Required
                </span>
              </p>
              }
              <input
                type='text'
                value={this.state.email}
                onChange={(event) => this.handleChange(event, 'email')}
              />
              <button type='submit' className='subscribe-button'>GET STARTED</button>
            </div>
          </form>
          <p className='modal-fine-print'>By creating an account, you agree to <a href=''>Ancestry Terms and Conditions</a> and understand that your information will be used in accordance with our <a href=''>Privacy Statement</a>, including that we will send you emails about our service and special offers.</p>
          <div className='close-subscribe-modal'>x</div>
        </div>
      </div>
    )
  }
}

export default SubscribeModal
