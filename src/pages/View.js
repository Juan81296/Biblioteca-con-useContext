import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";
import {useParams} from 'react-router-dom'


export default function View(){
    const itemStyles = {
        container:{
            display:'flex',
            gap:'20px',
            color:'white',
            width:'800px',
            margin:'0 auto',
        },
        title: {
            fontSize:'30px',
            textAlign:'center',
            fontWeight:'bolder',
            color:'white',
        },
        author:{
            textAlign:'center',
            fontWeight:'bolder',
            color:'white',
            fontSize:'25px',
        },
        intro:{
            textAlign:'center',
            fontWeight:'bolder',
            color:'white',
            fontSize:'15px',
        },
        completed:{
            textAlign:'center',
            fontWeight:'bolder',
            color:'yellow',
            fontSize:'15px',
        },
        review:{
            textAlign:'center',
            color:'white',
            fontSize:'15px',
        }

    }

    const [item, setItem] = useState(null);

    const params = useParams();
    const store = useAppContext()

    useEffect(()=>{
        const book = store.getItem(params.bookId);
        setItem(book);
    },[]);

    if(!item){
        return <Layout>Item not found</Layout>;
    }
    return(
        <Layout>
            <div style={itemStyles.container}>
            <h2 style={itemStyles.title}> {item?.title} </h2>
            <div>
                <div> {item?.cover? <img src={item?.cover} width='400' alt={item.title} /> : ''}</div>
            </div>
            <div>
            <div style={itemStyles.author}> {item?.author} </div>
            <div style={itemStyles.intro}> {item?.intro} </div>
            <div style={itemStyles.completed}> {item?.completed? 'Leido' : 'Por terminar' } </div>
            <div style={itemStyles.review}> {item?.review} </div>
            </div>
            </div>
        </Layout>
    )
}