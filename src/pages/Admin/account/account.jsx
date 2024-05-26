
import { Button, Form } from 'react-bootstrap'
import styles from './account.module.css'

export const Account = () => {
    return (
        <div style={{padding:'20px'}}>
            <h1>Account</h1>
            <div className={styles.container}>
                <div className={styles.profile}>
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
                <div className={styles.formContainer}>
                    <div style={{ padding:'20px 0 0 20px',borderBottom:'0.5px solid gray'}}>
                        <h2>Profile</h2>
                        <p>This information can be edited</p>
                    </div>
                    <div className={styles.formControl}>
                        <Form.Control type="text" placeholder="First Name" aria-label='first name' className={styles.inputForm} />
                        <Form.Control type="text" placeholder="Last Name" className={styles.inputForm} />
                        <Form.Control type="text" placeholder="email" aria-label='first name' className={styles.inputForm} />
                        <Form.Control type="text" placeholder="phone" className={styles.inputForm} />
                        <Form.Control as="select" placeholder='state' className={styles.inputForm} >
                            <option>state</option>
                            <option>kerala</option>
                        </Form.Control>
                        <Form.Control type="text" placeholder="city" className={styles.inputForm} />
                    </div>
                    <div style={{display:'flex',justifyContent:'flex-end',marginTop:'20px',padding:'20px',borderTop:'0.5px solid gray'}}>
                        <div className={styles.submit}>
                            save details
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
