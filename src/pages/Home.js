export default function Home(props){
    return (
        <div className="text-center" style={{marginTop: "25%"}}>
            <img src={props.img} width={props.width} alt={props.alt}/>
        </div>
    )
}