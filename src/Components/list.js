import React, { Component } from "react";
import axios from "axios"; 
import Table from 'react-bootstrap/Table'

export default class  List extends Component {

    constructor(props){
        super(props);
        this.state = { 
          list: [],
          category:''
       };
        
    } 

    

    componentDidMount(){
      const maliste = []
      if(this.state.category == ''){
      axios.get('https://app.getrecall.com/api/products').then((response) =>{
        
          for(let i=0; i<response.data.products.length; i++){
            maliste.push(response.data.products[i])
        }
        this.setState({ list: maliste})
      })}
      if(this.state.category != ''){
      axios.get('https://app.getrecall.com/api/products').then((response) =>{
      
          for(let i=0; i<response.data.products.length; i++){
            if(response.data.products[i].category == this.state.category) maliste.push(response.data.products[i])
        }
        this.setState({ list: maliste})
          
        
    })
  } 
    }

  listProducts(){
    var maliste = []
    
      if(this.state.category == ''){
        maliste = this.state.list;
      }
      else {
        for(let i=0; i<this.state.list.length; i++){
          if(this.state.list[i].category == this.state.category) maliste.push(this.state.list[i])
      }
        
      }
  
  return maliste
}
    componentWillReceiveProps(nextProps) {
      this.setState({
          category:nextProps.category

      });
  }

        render (){
          console.log(this.listProducts())
              return(
              
                <div> 
                <div>
                   <div className="box">
                       <br></br>
                       <br></br>
                       <br></br>
                       
                       <u><h2>Liste de produits</h2></u>
                 <table className="table">
                 <th className="col-md-5">ModelID</th>
                 <th>Name</th>
                 <th>Category</th>
                 <th>Sub category</th>
                 <th>PID</th>
                 <th>CratedAt</th>
                 <th>Link</th>
                 <th>Features</th>
                 <th>Data sheet</th>
                 <th>Description</th>
                 <th>Spécifications</th>
                 <th>Thumbnail</th>
                 <th>UpdatedAt</th>
                 
                 {
                     this.listProducts().map(p => (
                      
                         <tr>
                             <td>{p.modelId}</td>
                             <td>{p.name}</td>
                             <td>{p.category}</td>
                             <td>{p.subcategory}</td>
                             <td>{p.pid}</td>
                             <td>{p.createdAt}</td>
                             <td><p>{p.link}</p></td>

                             <td>
                             {
                                 p.features.map(f => (
                                  <tr>
                                      {f}
                                  </tr>
                                 ))
                             }
                             </td>
                             <td>{p.datasheet}</td>
                             <td>{p.description}</td>
                             <td>
                             {
                                 p.specifications.map(s => (
                                  <tr>
                                      <td>{s.name}</td>
                                      <td>{s.category}</td>
                                      <td>{s.value}</td>
                                  </tr>
                                 ))
                             }
                             </td>
                             <td>{p.thumbnail}</td>
                             <td>{p.updatedAt}</td>



                         </tr>
                         
                         
                     ))
                 }
                 </table>
                   </div>
                </div>
            </div>
                                        
            ); 
            
            }

            
            
}


/*
import React, { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'react-notifications/lib/notifications.css';
import axios from "axios";
import {ReactTable} from "react-table";  
import Navbar from "./navbar";  

export const columns = [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
      Header: 'Grade',
      accessor: 'grade',
    },
  ];
  
  export const data = [
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      age: 9,
      gender: 'F',
      grade: 4,
    },
    {
      firstName: 'Mike',
      lastName: 'Ford',
      age: 5,
      gender: 'M',
      grade: 1,
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 8,
      gender: 'M',
      grade: 4,
    },
    {
      firstName: 'Joe',
      lastName: 'Johnson',
      age: 11,
      gender: 'M',
      grade: 6,
    },
    {
      firstName: 'Linda',
      lastName: 'Ford',
      age: 8,
      gender: 'F',
      grade: 5,
    },
    {
      firstName: 'Noah',
      lastName: 'Wilson',
      age: 9,
      gender: 'M',
      grade: 3,
    },
    {
      firstName: 'Emma',
      lastName: 'Lee',
      age: 7,
      gender: 'F',
      grade: 3,
    },
    {
      firstName: 'James',
      lastName: 'Jones',
      age: 10,
      gender: 'M',
      grade: 5,
    },
    {
      firstName: 'Mia',
      lastName: 'Brown',
      age: 8,
      gender: 'F',
      grade: 5,
    },
    {
      firstName: 'William',
      lastName: 'Davis',
      age: 11,
      gender: 'M',
      grade: 6,
    },
  ];


//export default class  List extends Component {
function  List () {
  
  var category =''
  const listProducts = () => {
    const maliste = []
    axios.get('https://app.getrecall.com/api/products').then((response) =>{
      for(let i=0; i<response.data.products.length; i++){
        maliste.push(response.data.products[i])
      }
  })
  return maliste
}

const componentWillReceiveProps = (nextProps) => {
  this.setState({
      id:nextProps.id,
      username: nextProps.username,
      email: nextProps.email,

  });
}
    /*constructor(props){
        super(props);
        this.state = { list: [] };
        
    } 

    

    componentDidMount(){
        
        axios.get('https://app.getrecall.com/api/products').then((response) => {
            this.setState({ list: response.data.products})
            console.log(this.state.list)
        });
    } */

        //render (){
          /*var res = window.location.pathname.split('/')
          console.log("ooo")
          console.log(category)
          //const data = this.state.list;
          //console.log(data)
          //const { list } = this.state
          //console.log("---")
          //console.log(this.state.list)
          const { columns } = [
              {
                  Header : "Features",
                  accessor : "features"
              },
              {
                  Header : "Category",
                  accessor : "Category"
              }
          ]
            return(
            
              <div> 
              <div>
                 <div className="box">
                     <br></br>
                     <br></br>
                     <br></br>
                     
                 <u><h2>Liste de produits</h2></u>
                 <table className="table">
                 <th>ModelID</th>
                 <th>Name</th>
                 <th>Category</th>
                 <th>Sub category</th>
                 <th>PID</th>
                 <th>CratedAt</th>
                 <th>Link</th>
                 <th>Features</th>
                 <th>Data sheet</th>
                 <th>Description</th>
                 <th>Spécifications</th>
                 <th>Thumbnail</th>
                 <th>UpdatedAt</th>
                 
                 {
                     listProducts().map(p => (
                      
                         <tr>
                             <td>{p.modelId}</td>
                             <td>{p.name}</td>
                             <td>{p.category}</td>
                             <td>{p.subcategory}</td>
                             <td>{p.pid}</td>
                             <td>{p.createdAt}</td>
                             <td>{p.link}</td>

                             <td>
                             {
                                 p.features.map(f => (
                                  <tr>
                                      {f}
                                  </tr>
                                 ))
                             }
                             </td>
                             <td>{p.datasheet}</td>
                             <td>{p.description}</td>
                             <td>
                             {
                                 p.specifications.map(s => (
                                  <tr>
                                      <td>{s.name}</td>
                                      <td>{s.category}</td>
                                      <td>{s.value}</td>
                                  </tr>
                                 ))
                             }
                             </td>
                             <td>{p.thumbnail}</td>
                             <td>{p.updatedAt}</td>



                         </tr>
                         
                         
                     ))
                 }
                 </table>
                 </div>
              </div>
          </div>
                                      
          ); 
          
          

          
          
}export default List;
//}

/*import React from 'react';
import { useTable, ReactTable }  from 'react-table';

const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Gender',
    accessor: 'gender',
  },
  {
    Header: 'Grade',
    accessor: 'grade',
  },
];

const data = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 9,
    gender: 'F',
    grade: 4,
  },
  {
    firstName: 'Mike',
    lastName: 'Ford',
    age: 5,
    gender: 'M',
    grade: 1,
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 8,
    gender: 'M',
    grade: 4,
  },
  {
    firstName: 'Joe',
    lastName: 'Johnson',
    age: 11,
    gender: 'M',
    grade: 6,
  },
  {
    firstName: 'Linda',
    lastName: 'Ford',
    age: 8,
    gender: 'F',
    grade: 5,
  },
  {
    firstName: 'Noah',
    lastName: 'Wilson',
    age: 9,
    gender: 'M',
    grade: 3,
  },
  {
    firstName: 'Emma',
    lastName: 'Lee',
    age: 7,
    gender: 'F',
    grade: 3,
  },
  {
    firstName: 'James',
    lastName: 'Jones',
    age: 10,
    gender: 'M',
    grade: 5,
  },
  {
    firstName: 'Mia',
    lastName: 'Brown',
    age: 8,
    gender: 'F',
    grade: 5,
  },
  {
    firstName: 'William',
    lastName: 'Davis',
    age: 11,
    gender: 'M',
    grade: 6,
  },
];
function List() {
const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
} = useTable({
  columns,
  data,
});

return (
    <div>
  <table {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
  <div >
  <ReactTable  
                data={data}  
                columns={columns}    
            />
  
  </div>
    
  </div>
);
}

export default List; */
/*
*/

