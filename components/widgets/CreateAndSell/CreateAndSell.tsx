import Image from 'next/image';
import React from 'react';
import {SectionTitle} from '../../Elements/SectionTitle'
import SellWidget from "./SellWidget";
import data from '../../../pages/api/SellData.json';
interface itemProps {
    id?: number,
    img? : string,
    title? : string,
    description? : string
}

const CreateAndSell = () => {
    return (
        <div className='create_sell_area lg:pb-155px md:pb-80px pb-60px'>
            <div className="container">
                <div className="flex items-center justify-between mb-10">
                    <SectionTitle>
                        Create and Sell 
                    </SectionTitle>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    
                   {
                    data?.map((item)=> (
                        <div key={item.id} className="lg:col-span-3 md:col-span-6 col-span-12 ">
                            <SellWidget item={item}  />
                        </div>
                    ))
                   }
                </div>
            </div>
        </div>
    );
};

export default CreateAndSell;