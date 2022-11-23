import './Cards.css'
function Cards({name,info}){
     return(
        <>
         <div className='card'>
          <h2>Hello  {name}</h2>
        <h3>{info}</h3>
             </div>
        </>
     )
}
export default Cards;