
import { useState , useEffect} from 'react';
import axios from 'axios';



const UserCard = () => {
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(()=>{
      const getApi = async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data)
        setSearchTerm('users')
      }
      getApi();
    }, [])
  return (
    <div className='body'>
        <div>
        <input type="text" placeholder='search for user' onChange={(e) => setSearchTerm(e.target.value)} />
        <i class="fa-solid fa-magnifying-glass"  onClick={()=>setSearchTerm(searchTerm)}></i>
       
        </div>
      <div className='card-container'>
       {
         users.map((user)=>{
           return <div key={user.id} className="card">
            <img src={require('../components/pexels.png')} className="image" alt=" fine lady" />
            <h2>{user.username}</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
            {/* <p>{user.address}</p> */}
            <p>{user.phone}</p>
           </div> 
        })
       }
      </div>
    
    </div>
  );
}

export default UserCard;

