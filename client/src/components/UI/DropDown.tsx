import Select from 'react-select'

const DropDown = () => {
	
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	  ];
	  let data:{value:string,label:string}[]=[];
	  const getOptions =async() => {
		try {
            
            const response = await fetch(`http://192.168.38.164:5000/users`);//?pass=${enteredPassword}
            const jsonData = await response.json();
            console.log(jsonData);
			for(let i = 0; i < jsonData.length;i++){
				//TODO: dodaj vse kar dovis v usestate options, nato pa se oddelke
				data.push({value:jsonData[i].id,label:jsonData[i].username});
			}
			console.log(data);
        } catch (error:any) {
            console.error(error.message);
        }
		try {
            
            const response = await fetch(`http://192.168.38.164:5000/oddelki`);//?pass=${enteredPassword}
            const jsonData = await response.json();
            console.log(jsonData);
			for(let i = 0; i < jsonData.length;i++){
				//TODO: dodaj vse kar dovis v usestate options, nato pa se oddelke
				data.push({value:`od${jsonData[i].id}`,label:jsonData[i].ime});
			}
			console.log(data);
        } catch (error:any) {
            console.error(error.message);
        }

	  }
	  getOptions();
	return <Select
			closeMenuOnSelect={false}
      		isMulti
      		options={data} />;
}
export default DropDown;