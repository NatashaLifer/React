import { Link } from 'react-router-dom'

const Team = () => {
    return (
        <div className='wrapper'>
            <Link className="btn-return-home" to='..'> return Home </Link>
            <h2>Team</h2>
            
            <ul>
                <li>
                    Gog Die - CEO
                </li>
                <li>
                    Gaga Doe - CMO
                </li>
                <li>
                    Gugu Doo - CTO
                </li>
                <li>
                    Gigi Dii - COO
                </li>
                <li>
                    Gaga Dae - Head of Sales
                </li>   
            </ul>
        </div>
    )
}

export default Team