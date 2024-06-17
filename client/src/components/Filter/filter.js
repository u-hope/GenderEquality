import './filter.css';

const Filter = (region, filterRegion, setFilterRegion) => {
    const onChange = ({currentTarget:input})=>{
        if(input.checked){
            const state = [...filterRegion, input.value];
            setFilterRegion(state);
        }else{
            const state = filterRegion.filter((val)=>val!==input.value);
            setFilterRegion(state);
        }
    }
    return(
        <div className='filter'>
            <div className='filterContainer'>
                {region.map((region)=>(
                    <div className='regionFilter' key={region}>
                        <input 
                            className='filter_regionInput'
                            type='checkbox'
                            value={region}
                            onChange={onChange}
                        />
                        <p className='filterRegionLable'>{region}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter;