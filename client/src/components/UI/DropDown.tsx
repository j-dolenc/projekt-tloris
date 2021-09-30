import Select from 'react-select'

const DropDown = () => {
	
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	  ]
	  const getOptions =async() => {
		try {
            
            const response = await fetch(`http://192.168.38.164:5000/users`);//?pass=${enteredPassword}
            const jsonData = await response.json();
            console.log(jsonData);
			for(let i = 0; i < jsonData.length;i++){
				//TODO: dodaj vse kar dovis v usestate options, nato pa se oddelke
			}
        } catch (error:any) {
            console.error(error.message);
        }

		return [
			{ value: 'chocolate', label: 'Chocolate' },
			{ value: 'strawberry', label: 'Strawberry' },
			{ value: 'vanilla', label: 'Vanilla' }
		  ];
	  }
	  getOptions();
	return <Select
			closeMenuOnSelect={false}
      		isMulti
      		options={options} />;
}
export default DropDown;