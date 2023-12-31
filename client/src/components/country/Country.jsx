import { Link } from 'react-router-dom'

const Country = ({ id, flag, name, continent }) => {
    //puedo traer por parametros las actividades y filtrarlas tambien
    return (
        <div>
            <h3>{name}</h3>
            <h4>{continent}</h4>
            <Link to={`/detail/${id}`}>
                <img src={flag} />
            </Link>
        </div>
    )
};

export default Country;