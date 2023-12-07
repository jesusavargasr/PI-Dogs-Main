
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


   console.log("hola",detail[0]);

    return (
        <div >
            
            <div className={style.detail}>
            <img src={detail[0]?.image} alt={detail[0]?.name} />
                <h3>Id: {detail[0]?.id}</h3>
                <h3>name: {detail[0]?.name}</h3>
                <h3>lifeSpan: {detail[0]?.lifeSpan}</h3>
                <h3>Height: {detail[0]?.height}</h3>
                <h3>Weight: {detail[0]?.weight}</h3>
                <h3>temperaments: {detail[0]?.temperament}</h3>
            </div>
        </div>
    );
};

export default Detail;
