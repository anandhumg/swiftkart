import './setting.css'
import { Button, Form } from 'react-bootstrap'

export const Settings = () => {
    return (
        <div style={{ padding: '20px' }}>
            <div>
                <h1>Settings</h1>
            </div>
            <div className="notificationContainer">
                <div style={{ padding: '20px 0 0 20px', borderBottom: '0.5px solid gray' }}>
                    <h5>Notifications</h5>
                    <p>Manage the Notifications</p>
                </div>
                <div className='options'>
                    <div style={{ width: '40%' }}>
                        <h5>Email</h5>
                        <div className='checkboxes'>
                            <div>
                                <input type='checkbox' />
                            </div>
                            <div>
                                <p>Product Updates</p>
                            </div>
                        </div>
                        <div className='checkboxes'>
                            <div>
                                <input type='checkbox' />
                            </div>
                            <div>
                                <p>Security Updates</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>Phone</h5>
                        <div className='checkboxes'>
                            <div>
                                <input type='checkbox' />
                            </div>
                            <div>
                                <p>Email</p>
                            </div>
                        </div>
                        <div className='checkboxes'>
                            <div>
                                <input type='checkbox' />
                            </div>
                            <div>
                                <p>Security Updates</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', padding: '20px', borderTop: '0.5px solid gray' }}>
                    <div className='submit'>
                        save changes
                    </div>
                </div>
            </div>
            <div className='passwordContainer'>
                <div style={{ padding: '20px 0 0 20px', borderBottom: '0.5px solid gray' }}>
                    <h5>Password</h5>
                    <p>Update Password</p>
                </div>
                <div className='formContainer'>
                    <Form.Control type="text" placeholder="Password" className='inputBox' />
                    <Form.Control type="text" placeholder="Confirm Password" className='inputBox' />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', padding: '20px', borderTop: '0.5px solid gray' }}>
                    <div className='submit'>
                        update
                    </div>
                </div>
            </div>

        </div>
    )
}
