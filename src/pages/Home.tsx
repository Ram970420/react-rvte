import './home.css'
function Home(props:any){

    return (

        <div style={{color:"red"}}>
            <h1>{props.name}</h1>
            <h2> {props.age}</h2>
            <h3>{props.gender}</h3>
            <h1>{props.adr}</h1>
            
        </div> 
    )
}

export default Home;