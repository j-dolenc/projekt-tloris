import React, { useState } from "react";
//import classes from "./ProjectStruct.module.css";
import SortableTree from "@nosferatu500/react-sortable-tree";
import "@nosferatu500/react-sortable-tree/style.css"; // This only needs to be imported once in your app
//import { TreeItem } from "@nosferatu500/react-sortable-tree";
import { TreeItem } from "react-sortable-tree";

const ProjectStruct = () => {
	// const rekVPodatke = (data:TreeItem[], objekt:{id:number,title:string,stars_id:number}) => {
	// 	if(data[0].title=== objekt["stars_id"]){
	// 		//vstavi element v children od tega titla
	// 		//pazi:ce se nima children elementa ga moras ustvarti, ce ga ima ze vstavi na konec
	// 		if(data[0].hasOwnProperty("children")){
	// 			data[0].children!.push({title:objekt.title});
	// 		}	

	// 		return;
	// 	}
	// 	if(data[0].hasOwnProperty("children")){
	// 		for(let i = 0; i < data[0].children!.length; i++){
	// 			rekVPodatke(data[0].children![i],objekt);
	// 		}
	// 	}
	// }
	// let data: TreeItem[] = [{title:3}];
  const getData = async () => {
    // try {
    //   const response = await fetch(`http://192.168.38.164:5000/projects/3`);
    //   const jsonData = await response.json();
    //   //console.log(jsonData);
    //   //TODO: rekurzivni sprehod skozi drevo in postavljanje v treeItem array.....
      
    //   console.log(jsonData.length);
    //   for (let i = 0; i < jsonData.length; i++) {
    //     console.log(jsonData[i]);
    //     if (jsonData[i].stars_id === 3) {
    //       data.push({ title: jsonData[i].id, children: [] });
    //     }
    //   }
    //   console.log(data);
    // } catch (error: any) {
    //   console.error(error.message);
    // }
  };
//   const getData = async () => {
// 	  try {
// 		  const response = await fetch(`http://192.168.38.164:5000/users/${enteredUsername}?passoword=${enteredPassword}`);//?pass=${enteredPassword}
// 		  const jsonData = await response.json();
		  
// 		} catch (error:any) {
// 			console.error(error.message);
// 		}
		
// 	}
	getData();
	
  const initialData = [
    {
      title: "Chicken",
      children: [{ title: "Egg", children: [{ title: "hmmm" }] }],
    },
    { title: "Egg", children: [{ title: "fingerline" }] },
  ];

  const [treeData, setTreeData] = useState<TreeItem[]>(initialData);

  const onChangeHandler = (treeData: TreeItem[]) => {
    console.log(treeData);
    setTreeData(treeData);
    //setTreeData();
  };
  return (
    <div>
      <h2>{"{CURRENT PROJECT}"}</h2>
      <div style={{ height: 400 }}>
        <SortableTree treeData={treeData} onChange={onChangeHandler} />
      </div>
    </div>
  );
};
export default ProjectStruct;
