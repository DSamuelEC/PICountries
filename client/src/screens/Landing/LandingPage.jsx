import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <h1>Bienvenido</h1>
            <button>
                <Link to='/home'>Vamos!</Link>
            </button>
        </div>
    );
};

export default LandingPage;