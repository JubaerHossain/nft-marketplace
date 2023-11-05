import React from 'react';
import {ThemeLineButton} from '../../Elements/Button';
import {SectionTitle} from '../../Elements/SectionTitle';
import SellingWidget from "./SellingWidget"
const TopSelling = () => {
    return (
        <section className='top_selling_area lg:pb-117px md:pb-80px pb-60px'>
            <div className="container">
                <div className="flex items-center justify-between mb-10 flex-wrap gap-3">
                    <SectionTitle>
                        Top Sells this week
                    </SectionTitle>
                    <ThemeLineButton buttonProps={{text: "View All", url:"/top-seles" }} />
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-4 md:col-span-6 col-span-1">
                        <SellingWidget />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-1">
                        <SellingWidget />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-1">
                        <SellingWidget />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-1">
                        <SellingWidget />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-1">
                        <SellingWidget />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-1">
                        <SellingWidget />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-1">
                        <SellingWidget />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-1">
                        <SellingWidget />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-1">
                        <SellingWidget />
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default TopSelling;