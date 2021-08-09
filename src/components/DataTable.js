import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

 const DataTable=(countrydata1)=> {
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'name',
      headerName: 'Country Features',
      width: 300,
      editable: true,
    },
    {
      field: 'values',
      headerName: 'Values',
      width:300 ,
      editable: true,
    },
    
  ];
  
  
  const classes = useStyles();
  const arrayform=Object.values(countrydata1).flat();
  
  const data=arrayform[0].data[0];

  
 
 
  const countryfeatures=[
  {"id":1,"name":"alpha2Code","values":data.alpha2Code},{"id":3,"name":"topLevelDomain","values":data.topLevelDomain[0]},
  {"id":2,"name":"alpha3Code","values":data.alpha3Code},{"id":4,"name":"subregion","values":data.subregion},
  
  {"id":6,"name":"capital","values":data.capital},{"id":7,"name":"currencies","values":data.currencies[0].code},
  {"id":8,"name":"demonym","values":data.demonym},{"id":9,"name":"flag","values":data.flag},
  {"id":10,"name":"languages","values":data.languages[0].name},{"id":11,"name":"name","values":data.name},
  {"id":12,"name":"nativeName","values":data.nativeName},{"id":13,"name":"population","values":data.population},
  {"id":14,"name":"region","values":data.region},{"id":15,"name":"timezones","values":data.timezones}];
  
  return (
    <div style={{ height: 1000, width: 800 }}>
      <DataGrid
        rows={countryfeatures}
        columns={columns}
        pageSize={20}
        
        disableSelectionOnClick
      />
    </div>
  );
}
export default DataTable;