import reactLogo from '../assets/react.svg'
import { navigate } from '../components'

const About = () => {
    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>About</h1>
            <button className="btn-return-home" onClick={() => navigate('/')}>
                return Home
            </button>
        </>
    )
}

export default About