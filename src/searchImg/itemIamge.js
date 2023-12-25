import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ItemIamge(props) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className='container col-md-6 mt-3'>
            <div className='shadow border h-100 d-flex  p-2 '>
                <img onClick={() => setOpen(true)} className='w-50 h-100 me-1' src={props.item.largeImageURL}></img>
                <div>
                <h6>{props.item.tags}</h6>
                <div >likes - {props.item.likes}</div>
                <div >views - {props.item.views}</div>
                <div >Downloads - {props.item.downloads}</div>
                </div>
                <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: props.item.largeImageURL },
     
        ]}
      />
    </>
     
            </div>

        </div>
    )
}
