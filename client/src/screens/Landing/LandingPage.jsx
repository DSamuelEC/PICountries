import { Link } from "react-router-dom";
import './LandingPage.styles.css'

const LandingPage = () => {
    return (
        <div>
            <h1 className="title">Welcome!</h1>
            <button>
                <Link to='/home'>Go to PI</Link>
            </button>
        </div>
    );
};

export default LandingPage;