// import React from 'react'
import { data } from 'autoprefixer';

function Course(props) {
            let newDate = new Date().toISOString().split("T")[0];
            console.log(newDate.replace(/\-/g, "/"));
            console.log(props.date.replace(/\-/g, "/"));
            if (props.date > newDate) {
             return 
              // console.log(props.date);
            }
  return (
    <div className=" flex flex-col items-center justify-center px-10">
      <div className="text-center">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <img
              className="w-full rounded-t-lg"
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="p-5">
              <h5 className="text-xl font-bold tracking-tight text-gray-900">
                {props.title}
              </h5>
              <p className="font-normal text-gray-700 pb-5">
                {props.description}
              </p>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {props.address}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {props.time}
              </span>
              <div className="flex items-center justify-between mt-5">
                <p className="text-sm font-medium text-gray-900">
                  {props.date}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  التفاصيل
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Course