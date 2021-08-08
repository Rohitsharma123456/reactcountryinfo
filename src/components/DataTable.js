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
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'countryfeatures',
      headerName: 'Country Features',
      width: 250,
      editable: true,
    },
    {
      field: 'values',
      headerName: 'Values',
      width: 150,
      editable: true,
    },
    
  ];
  
  
  const classes = useStyles();
  const arrayform=Object.values(countrydata1).flat();
  const data=arrayform[0].data;
  const datarows = data.map((item,index)=>{
    return [index,item.name];
  });
  const countryfeatures=["alpha2Code","alpha3Code","area","borders","callingCodes","capital","currencies","demonym","flag","languages","name","nativeName","population","region","timezones"];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={datarows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
export default DataTable;