import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import ItemIamge from './itemIamge';
import { sortBy } from 'lodash'

export default function SreachShowImg() {
    let nameImage = useRef();
    let inputBox = useRef();
    const [boxRef, setBoxFex] = useState("likes")
    const [nameTypeImage, setType] = useState("CATS")
    const [listImage, setList] = useState([]);
    useEffect(() => {
        doApi();
    }, [nameTypeImage, boxRef])

    const doApi = async () => {
        const url = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${nameTypeImage}&image_type=photo&pretty=true`
        let listImgaes = await axios.get(url);
        let sortar = sortBy(listImgaes.data.hits, [boxRef]);
        setList(sortar)
    }
    const changeSearch = () => {
        setType(nameImage.current.value);
    }
    const sleactOp = () => {
        setBoxFex(inputBox.current.value)
    }

    return (
        <div>
            <h2 className=' bg-dark text-light p-2 text-center'>Pixa search api iamge  </h2>
            <div className='container col-md-6 mt-2'>
                <div className='d-flex '>
                    <input placeholder='sreach image' className='form-control mt-3' ref={nameImage}></input>
                    <button onClick={changeSearch} className='btn btn-dark mt-3 ms-3'>Sreach</button>
                    <select onClick={sleactOp} ref={inputBox} className=' mt-3 ms-3 btn btn-danger'>
                        <option value='likes'>Like</option>
                        <option value='views'>View</option>
                        <option value='downloads'>Downloads</option>
                    </select>
                </div>
                <div className='row' >
                    {
                        listImage.map(item => {
                            return <ItemIamge item={item}></ItemIamge>
                        })
                    }

                </div>

            </div>

        </div>

    )
}
