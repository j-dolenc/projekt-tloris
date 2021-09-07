import React from "react";
import classes from "./ProjectStruct.module.css";
import 'react-sortable-tree/style.css';
import { SortableTreeWithoutDndContext as SortableTree, TreeItem } from 'react-sortable-tree';
const ProjectStruct = () => {
    const treeData=[
        { title: 'Chicken', children: [{ title: 'Egg' }] },
        { title: 'Fish', children: [{ title: 'fingerline' }] },
      ];
    // const [treeData,setTreeData] = useState([
    //     { title: 'Chicken', children: [{ title: 'Egg' }] },
    //     { title: 'Fish', children: [{ title: 'fingerline' }] },
    //   ]);
    const onChangeHandler = (treeData: TreeItem[]) => {
        console.log(treeData);
        //setTreeData();
    }
  return (
    <div>
      <p>kuku</p>
      <SortableTree  treeData ={treeData}
          onChange={onChangeHandler} className={classes.hey}></SortableTree>
    </div>
  );
};
export default ProjectStruct;
