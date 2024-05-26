import { Table } from 'react-bootstrap';
import styles from './customer.module.css';
export const ViewAllCustomers = () => {
    const tableData = [
        {
            name: 'Alcides Antonio',
            emai: 'alcides.antonio@devias.io',
            location: 'Madrid, Comunidad de Madrid, Spain',
            phone: '908-691-3242',
            signedup: 'Mar 8, 2024'
        },
        {
            name: 'Alcides Antonio',
            emai: 'alcides.antonio@devias.io',
            location: 'Madrid, Comunidad de Madrid, Spain',
            phone: '908-691-3242',
            signedup: 'Mar 8, 2024'
        },
        {
            name: 'Alcides Antonio',
            emai: 'alcides.antonio@devias.io',
            location: 'Madrid, Comunidad de Madrid, Spain',
            phone: '908-691-3242',
            signedup: 'Mar 8, 2024'
        },
        {
            name: 'Alcides Antonio',
            emai: 'alcides.antonio@devias.io',
            location: 'Madrid, Comunidad de Madrid, Spain',
            phone: '908-691-3242',
            signedup: 'Mar 8, 2024'
        },
        {
            name: 'Alcides Antonio',
            emai: 'alcides.antonio@devias.io',
            location: 'Madrid, Comunidad de Madrid, Spain',
            phone: '908-691-3242',
            signedup: 'Mar 8, 2024'
        },
    ]
    return (
        <div style={{ padding: '20px' }}>
            <div className={styles.header}>
                <div>
                    <div style={{ fontSize: '2rem', fontWeight: 500 }}>
                        Customers
                    </div>
                    <div style={{ display: 'flex', gap: '50px', marginTop: '20px' }}>
                        <div>
                            import
                        </div>
                        <div>
                            Export
                        </div>
                    </div>
                </div>
                <div className={styles.addButton}>
                    + Add
                </div>
            </div>
            <div style={{
                backgroundColor: 'white',
                boxShadow: ' 0 4px 6px rgba(0, 0, 0, 0.2)',
                height: '100px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                padding: '30px'
            }}>
                <input className={styles.searchBox} placeholder='       search customer' />
            </div>
            <div style={{ marginTop: '30px', overflow: 'scroll' }}>
                <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '12px', minWidth: '72rem' }}>
                    <Table >
                        <thead>
                            <tr>
                                <th><input type='checkbox' /></th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Location
                                </th>
                                <th>
                                    Phone
                                </th>
                                <th>
                                    Signed Up
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) => {
                                return (
                                    <tr key={index} style={{ height: '65px' }}>
                                        <td>
                                            <input type='checkbox' />
                                        </td>
                                        <td>
                                            {data.name}
                                        </td>
                                        <td>
                                            {data.emai}
                                        </td>
                                        <td>
                                            {data.location}
                                        </td>
                                        <td>
                                            {data.phone}
                                        </td>
                                        <td>
                                            {data.signedup}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '15px', gap:'20px'}}>
                        <div>
                            Rows per page:
                        </div>
                        <div>
                            5 1–5 of 5
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
