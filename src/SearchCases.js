import React, { Component } from 'react';

export default class searchCases extends Component{
    
    autoSearch(){
        var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  td = [];
  for (i = 0; i < tr.length; i++) {
    td[0] = tr[i].getElementsByTagName("td")[0];
    td[1] = tr[i].getElementsByTagName("td")[1];
    if (td[0] || td[1]) {
      if (td[0].innerHTML.toUpperCase().indexOf(filter) > -1
          || td[1].innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
    }
    
    render(){
        return(
    <div>
  <input type="text" id="myInput" onKeyUp={()=>this.autoSearch()} placeholder="Search..." title="Type anything"/>
  <table id="myTable">
  <tr className="header">
    <th style={{width:'60%'}}>Name</th>
    <th style={{width:'40%'}}>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds snabbkop</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Koniglich Essen</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Paris specialites</td>
    <td>France</td>
  </tr>
</table>
</div>
        );
    }
}
