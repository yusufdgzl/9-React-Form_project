export default function MotorCard({item}){

    return(
        <>
            <div className="motorCard">
               <h4>{item.name}</h4>
                <img
                style={{width:"450px",margin:"auto",display:"flex"}}
                src={item.src}  />
            </div>
        </>
    )

}