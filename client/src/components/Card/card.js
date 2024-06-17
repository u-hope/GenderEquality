import './card.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../pagination/pagination';
import Search from '../Search/search';
import Filter from '../Filter/filter';

// Card component
function Card(props) {

  //for fetching and storing data
  const [organizations, setOrganizations] = useState([]);
  const base_url="http://localhost:8000/api/orglist";

    //for search/filter
    const [obj,setObj]=useState({});
    const[data,setData]=useState([]);
    const[filterRegion,setFilterRegion]= useState([]);
    const [search,setSearch]=useState("");
    // const Filter = (e)=>{
    //   setData(organizations.filter(f=> f.name.toLowerCase().includes(e.target.value)))
    // } 

  useEffect(() => {
    axios.get('http://localhost:8000/api/data')
      .then(organizations => {
        setOrganizations(organizations.data);
        console.log(organizations.data)
      })
      .catch(error =>
        console.error('Error fetching notes:', error));
  }, []);
  useEffect(()=>{
    const getAllFiles = async()=>{
      try{
        const url = `${base_url}?region=${filterRegion.toString()}&search=${search}`
        const {file} = await axios.get(url);
        setObj(file);
        console.log(file);
      }catch(err){
        console.log(err);
      }
    };
    getAllFiles();
  },[filterRegion,search]);
  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(6);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = organizations.slice(firstIndex, lastIndex);
 


  return ( 
    // List of Cards
    <div>

      <h1 className='cardSectionTitle'>Organizations</h1>
      <Search setSearch={(search)=>setSearch(search)}/>
      
      <div className='cardSection'>
        {records.map(organization => (
          <div className='cardContainer'>
            
            <div className='cardLeft'>
              <img src={props.cardImg} alt='Logo' className='cardImg'/>
            </div>
            
            <div className='cardRight'>

             
                <div className='cardName'>
                <span className='cardLable'>Name:</span> 
                <span className='cardText'>{organization.name}</span>
                </div>
                

                <div className='cardBottom'>
                  <div className='cardName'>
                    <span className='cardLable'>Email:</span> 
                    <span className='cardText'>{organization.email}</span>
                  </div>
                  <div className='cardName'>
                    <span className='cardLable'>Region:</span> 
                    <span className='cardText'>{organization.region}</span>
                  </div>
              </div>
            </div>

          </div>
        ))}
      </div>
      <Pagination
        totalRecords={organizations.length}
        recordsPerPage={recordsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
 
}

export default Card;








