export default function ListItem({item,handleDelete,id}) {

    return (
        <>
            <p className="listItem">
                {item}
                <button 
                onClick={()=>handleDelete(id)}
                className="deleteButton">X</button>
            </p>
        </>
    )
}