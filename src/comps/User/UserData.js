import React from 'react';
import { FcBrokenLink, FcHome, FcContacts, FcPhoneAndroid, FcElectricity, FcBusinessman } from "react-icons/fc";

const UserData = ({ data }) => {
    return (
        <div class='shadow-lg hover:bg-purple-400 hover:text-white'>
            <div className='grid grid-cols-4 gap-5  p-5 rounded-md items-center'>
                <div className=''>
                    <FcBusinessman className='text-5xl text-center'></FcBusinessman>
                    <h4 class="text-start p-2 font-semibold text-purple-900 ">
                        {data.name}
                    </h4>
                </div>
                <div className=''>
                    <FcHome className='text-4xl text-center'></FcHome >
                    <p class=" "><span className="">{data.address.city} <br />{data.address.street}</span></p>

                </div>
                <div className='flex-auto justify-center item-center'>
                    <FcContacts className='text-3xl'></FcContacts>
                    <p class="flex flex-row justify-start items-center"> <FcPhoneAndroid></FcPhoneAndroid >
                        <span className="ml-2">{data.phone.slice(0, 12)}</span></p>
                    <p class="flex flex-row justify-start items-center"> <FcElectricity></FcElectricity >
                        <span className="ml-2">{data.company.name.slice(0, 8)}</span></p>
                    <p class="flex flex-row justify-start items-center"><FcBrokenLink></FcBrokenLink > <span className="ml-2">{data.website}</span></p>

                </div>
                <div class="flex space-x-2 justify-center p-3">
                    <button type="button" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Details</button>
                </div>
            </div>

        </div>
    );
};

export default UserData;