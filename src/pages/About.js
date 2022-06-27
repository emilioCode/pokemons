import linkein from './../assets/LinkedIn_logo.png';
import twitter from './../assets/twitter-logo.png';

export default function About(){
    return (
        <div className='container' style={{marginTop: "15%"}}> 
            <div className="row">

                <div className="col-5 text-center">
                    <h5>Visit Me</h5>
                    <a href="https://www.linkedin.com/in/manuel-emilio-mendez/" target="_blank" rel="noreferrer"><img src={linkein} alt="LinkedIn" width="45%"/></a>
                </div>
                <div className="col-2 text-center">
                    <h5 >- OR -</h5>    
                </div>
                <div className="col-5 text-center">
                    <h5>Follow Me</h5>
                    <a href="https://twitter.com/emiliomendez_" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter" width="60%"/></a>
                </div>
            </div>
        </div>
    )
}