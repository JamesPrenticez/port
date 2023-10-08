import React from 'react'

const data = {
  name: "Australia",
  children: [
    {
      name: "NSW",
      children: [
        {
          name: "Sydney",
          children: [{ name: "Bonnells Bay" }, { name: "Mandalong" }, { name: "Eraring" }, {name: "Dora Creek"}, {name: "Cooranbong"}]
        },
        {
          name: "Canberra",
          children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4 Creek"}, {name: "5"}]
        },
        {
          name: "New Castle",
          children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4 Creek"}, {name: "5"}]
        },
        {
          name: "New Castle",
          children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4 Creek"}, {name: "5"}]
        },
        {
          name: "Dubbo",
          children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4 Creek"}, {name: "5"}]
        },

      ]
    },
    { 
      name: "VIC",
      children: [
       { 
        name: "Melbourne",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
       { 
        name: "Hamilton",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
       { 
        name: "Geelong",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
       { 
        name: "Morwell",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
       { 
        name: "Traralgon",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
      ]
    },
    { 
      name: "QLD",
      children: [
       { 
        name: "Brisbane",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
       { 
        name: "Gold Coast",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
       { 
        name: "Sunshine Coast",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
       { 
        name: "Bundaberg",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
       { 
        name: "Gladstone",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
       { 
        name: "Mackay",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
       { 
        name: "Port Douglas",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
      ]
    },
    { 
      name: "WEST",
      children: [
       { 
        name: "Perth",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
      ]
    },
    { 
      name: "SOUTH",
      children: [
       { 
        name: "Adelaide",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
      ]
    },
    { 
      name: "North",
      children: [
       { 
        name: "Darwin",
        children: [{ name: "1" }, { name: "2" }, { name: "3" }, {name: "4"}, {name: "5"}]
       },
      ]
    },
  ]
};


function RecursiveTree() {
  const isArray = Array.isArray

  const recursiveFunction = (obj, depth = 0) => {
    const padLength = obj.name.length + depth
    //console.log(obj.name.padStart(padLength, "_"))
  
    const newdepth = depth + 1
  
    obj.children?.map((item) => {
      console.log(obj)
      recursiveFunction(item, newdepth)
    })
  }

  const recursiveObj = (obj) => {
    for(let key in obj){
      //if(!obj.hasOwnProperty(key)) continue;

      if(typeof obj[key] == 'object' && !isArray(obj[key])){
        recursiveFunction(obj[key])
      }
      
      if(isArray(obj[key])){
      recursiveFunction(obj[key])
      }

      else {
        //im a string
        console.log(typeof(obj[key]), obj[key])
        //console.log('type', typeof obj[key])
        //recursiveObj(obj[key])
      }
    }
  }
  

  return (
    <div>
      <h1>RecursiveTree</h1>

      <button 
        className='bg-green-500 px-4 py-2 text-white'
        onClick={() => { recursiveFunction(data, 0) }}
      >
        recursive function
      </button>

      <button 
        className='bg-fuchsia-500 px-4 py-2 text-white'
        onClick={() => { recursiveObj(data) }}
      >
        recursive object
      </button>



    </div>
  )
}

export default RecursiveTree
