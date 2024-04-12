const Usefulitem = (props:any) => {
  return (
    <a href={props.url} target="_blank" rel="noopener">
    <div className='usefulitem color_lv_1-2'>
        <div className="img__wrap__useful">
          <img src={props.src} alt="" />
           

        </div>
        <div className="name__wrap__useful ">
          <div className="name__item__useful">
         <p> {props.name}</p>
          </div>
          

        </div>
    </div>
    </a>
  )
}

export default Usefulitem