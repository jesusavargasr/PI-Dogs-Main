
import { useParams} from "react-router-dom";
import { clearDetail, getById } from "../../redux/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './Detail.module.css'


const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector(state => state.dogId);
    

    useEffect(() => {

    dispatch(getById(id))
    return() => dispatch(clearDetail())
    }, [dispatch,id])


   

    return (
        <div >
            
            <div className={style.detail}>
            <img src={detail?.image} alt={detail?.name} />
                <h3>Id: {detail?.id}</h3>
                <h3>name: {detail?.name}</h3>
                <h3>lifeSpan: {detail?.lifeSpan}</h3>
                <h3>Height: {detail?.height}</h3>
                <h3>Weight: {detail?.weight}</h3>
                <h3>temperaments: {detail?.temperaments}</h3>
            </div>
        </div>
    );
};

export default Detail;
