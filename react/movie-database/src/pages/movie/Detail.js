import { useParams } from 'react-router-dom';
import DetailMovie from '../../components/DetailMovie/DetailMovie';

function Detail(){

    const params = useParams();

    return(
        <>
            <DetailMovie/>
        </>
    )
}

export default Detail;