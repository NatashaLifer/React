import { Link } from 'react-router-dom'

const Contacts = () => {
    return (
        <div className='wrapper'>
            <Link className="btn-return-home" to='..'> return Home </Link>
            <h2>Contacts</h2>
            <p>
                адреса: вул. Банальна, 404, м. Київ
            </p>
            <p>
                email: kalamputsalo-salo@gmail.com
            </p>
            <p>
                телефон: +380 44 404 44 44
            </p>
        </div>
    )
}

export default Contacts