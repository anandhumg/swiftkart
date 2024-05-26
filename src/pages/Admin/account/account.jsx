
import { Button, Form } from 'react-bootstrap'
import './account.css'

export const Account = () => {
    return (
        <div style={{padding:'20px'}}>
            <h1>Account</h1>
            <div className='account-container'>
                <div className='acc-profile'>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '32px 24px' }}>
                        <h2>
                            Sofia Rivers
                        </h2>
                        <p>
                            Los Angeles USA
                        </p>
                        <p>
                            GTM-7
                        </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        borderTop: '0.5px solid gray',
                        padding: '12px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        color: 'blue'
                    }}>
                        upload pictures
                    </div>
                </div>
                <div className='acc-formContainer'>
                    <div style={{ padding:'20px 0 0 20px',borderBottom:'0.5px solid gray'}}>
                        <h2>Profile</h2>
                        <p>This information can be edited</p>
                    </div>
                    <div className='acc-formControl'>
                        <Form.Control type="text" placeholder="First Name" aria-label='first name' className='acc-inputForm' />
                        <Form.Control type="text" placeholder="Last Name" className='acc-inputForm' />
                        <Form.Control type="text" placeholder="email" aria-label='first name' className='acc-inputForm' />
                        <Form.Control type="text" placeholder="phone" className='acc-inputForm' />
                        <Form.Control as="select" placeholder='state' className='acc-inputForm' >
                            <option>state</option>
                            <option>kerala</option>
                        </Form.Control>
                        <Form.Control type="text" placeholder="city" className='acc-inputForm' />
                    </div>
                    <div style={{display:'flex',justifyContent:'flex-end',marginTop:'20px',padding:'20px',borderTop:'0.5px solid gray'}}>
                        <div className='submit'>
                            save details
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
