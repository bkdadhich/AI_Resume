const Education = ({ educations = [], handleInputChange, addEducation, deleteEducation }) => {
  return (

    <div className="mt-10 px-20">
      <h3 className="flex justify-between font-bold text-lg mt-4">Awards and Training, Education, 
    Certifications, and Accolades:</h3>

<div className="font-normal mb-8">
Include all Education and Training including trainings 
and Awards, Degrees, Certifications, Trainings, Recognitions, Awards and Accolades.

</div>

      {educations.map((edu, index) => (
        <div key={index} className="  mt-4 ">
          
          <div className="flex gap-6">
  <div className="w-3/4">

  <label htmlFor="schoolname" className="block text-sm text-gray-700 mb-2 font-bold">
           School Name *
        </label>
        <input 
          type="text" 
          name="schoolname" 
          required
          value={edu.schoolname}
              onChange={(e) => handleInputChange(e, index, 'educations')} 
          placeholder="e.g. Delhi University" 
          className="w-full p-3 mb-4 border border-black rounded-lg"
        />
        
  </div>

  <div className="w-3/4">

  <label htmlFor="schoolplace" className="block text-sm  text-gray-700 mb-2 font-bold">
  School Location 
        </label>
        <input 
          type="text" 
          name="schoolplace" 
          value={edu.schoolplace}
              onChange={(e) => handleInputChange(e, index, 'educations')}
          placeholder="e.g. Delhi, India" 
          className="w-full p-3 mb-4 border border-black rounded-lg"
        />
        
  </div>
</div>
<label htmlFor="schoolplace" className="block text-sm  text-gray-700 mb-2 font-bold">
Field Of Study
        </label>
<input 
          type="text" 
          name="coursename" 
          value={edu.coursename}
              onChange={(e) => handleInputChange(e, index, 'educations')}
          placeholder="e.g. Financial Accounting" 
          className="w-full p-3 mb-4 border border-black rounded-lg"
        />
    
<div className="flex gap-2 w-1/3 pe-2">
  <div className="w-3/4">

  <label htmlFor="month1" className="block text-sm font-medium text-gray-700 mb-2">
                  Start: 
        </label>
        <input 
          type="month" 
          name="edmonth1" 
           value={edu.edmonth1}
              onChange={(e) => handleInputChange(e, index, 'educations')}           
          className="w-full p-3 mb-4 border border-black rounded-lg"
        /> 
  </div>

  <div className="w-3/4">

  <label htmlFor="month2" className="block text-sm font-medium text-gray-700 mb-2">
               End: 
        </label>
        <input 
          type="month" 
          name="edmonth2" 
          value={edu.edmonth2}
              onChange={(e) => handleInputChange(e, index, 'educations')}
          className="w-full p-3 mb-4 border border-black rounded-lg"
          />
       
        
  </div>
</div>
<button
              type="button"
              onClick={() => deleteEducation(index)}
              className="mt-2 text-red-500"
            >
              Delete Education
            </button>

        </div>
      ))}
      <button className="font-bold text-lg flex items-center" onClick={addEducation}>
                <h3>Add Item</h3>
                <svg className="h-5 w-5 text-white bg-black rounded-full m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
                <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
                </svg>

            </button>
    </div>
  );
};

 export default Education;