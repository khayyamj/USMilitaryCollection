import React from 'react'
import PropTypes from 'prop-types'
import './SubscribeModal.scss'

let firstNameValidation = true
let lastNameValidation = true
let emailValidation = true
let firstNameInputStyle = 'subscription-name-input-valid'
let lastNameInputStyle = 'subscription-name-input-valid'
let emailSubscriptionInputStyle = 'subscription-input-valid'

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
    this.state.firstName ? firstNameValidation = true : firstNameValidation = false
    this.state.lastName ? lastNameValidation = true : lastNameValidation = false
    validateEmail(this.state.email) ? emailValidation = true : emailValidation = false
    if (firstNameValidation && lastNameValidation && emailValidation) {
      console.log('Form information: ', this.state)
      this.setState({
        firstName: '',
        lastName: '',
        email: ''
      })
      this.props.closeModal()
    } else {
      firstNameValidation ? firstNameInputStyle = 'subscription-name-input-valid' : firstNameInputStyle = 'subscription-name-input-notvalid'
      lastNameValidation ? lastNameInputStyle = 'subscription-name-input-valid' : lastNameInputStyle = 'subscription-name-input-notvalid'
      emailValidation ? emailSubscriptionInputStyle = 'subscription-input-valid' : emailSubscriptionInputStyle = 'subscription-input-notvalid'
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
                  className={firstNameInputStyle}
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
                  className={lastNameInputStyle}
                  type='text'
                  value={this.state.lastName}
                  onChange={(event) => this.handleChange(event, 'lastName')}
                />
              </span>
            </div>
            <div className='ancestry-subscribe-form-email-field'>
              {emailValidation ? <p>Your email</p> : <p className='validation-warning'>Your email
                <span className='validation-warning'>
                  <img src='../images/warning.png' className='validation-warning' /> A valid email is required
                </span>
              </p>
              }
              <input
                className={emailSubscriptionInputStyle}
                type='text'
                value={this.state.email}
                onChange={(event) => this.handleChange(event, 'email')}
              />
              <button type='submit' className='subscribe-button'>GET STARTED</button>
            </div>
          </form>
          <p className='modal-fine-print'>By creating an account, you agree to <a href=''>Ancestry Terms and Conditions</a> and understand that your information will be used in accordance with our <a href=''>Privacy Statement</a>, including that we will send you emails about our service and special offers.</p>
          <div
            className='close-subscribe-modal'
            onClick={this.props.closeModal}
          >
            x
          </div>
        </div>
      </div>
    )
  }
}

SubscribeModal.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default SubscribeModal
