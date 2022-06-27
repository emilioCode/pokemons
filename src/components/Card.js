export default function Card(props){
    const col = "col-" + props.col;
    return(
        <div className={col}>
            <br/>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{props.title}</p>
                </div>
                <img src={props.image} alt={props.title}/>
                <div className="card-body">
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}