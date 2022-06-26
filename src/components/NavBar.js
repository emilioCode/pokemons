
export default function NavBar({name, routes, img = null, width = "", bgcolor = null }){
    const color = bgcolor? "white": "";
    const css = !bgcolor? "bg-light": "";
    const styleConfig = { color: color, fontWeight: "bold"};
    return(
        
        <nav className={"navbar navbar-expand-lg navbar-light " + css} style={{backgroundColor: bgcolor}}>
            
            {img ?(
                <>                
                <a className="navbar-brand" href="/">
                    <img src={img} alt={name} width={width}/>
                </a>
                </>
                
            ):(
                <a className="navbar-brand" href="/">{name}</a>
            )}

            <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="/" style={styleConfig}>Home <span className="sr-only">(current)</span></a>

                    {routes.map((a, index)=>{
                        return <a className="nav-link" href={a.path} key={index} style={styleConfig}>{a.name}</a>;
                    })}

                </div>
            </div>

        </nav>
    )
}