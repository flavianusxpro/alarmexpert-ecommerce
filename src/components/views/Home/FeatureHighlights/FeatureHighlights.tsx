import React from 'react'
import { FEATURE_HIGHLIGHTS } from './FeatureHighlights.constants'
import Container from '@/components/ui/Container'

const FeatureHighlights = () => {
    return (
        <Container className="bg-[#F5F5F5]">
            <div className="w-full">
                <div className="flex flex-col md:flex-row gap-[135px] md:gap-0">
                    {FEATURE_HIGHLIGHTS.map((item) => (
                        <div key={`feature-${item.title}`} className="flex justify-center items-center flex-1 gap-[25px]">
                            <div className="bg-[#0A3353] rounded-full p-3">
                                {React.cloneElement(item.icon, { className: "w-6 h-6 text-white" })}
                            </div>
                            <div className='gap-[4px]'>
                                <h3 className="font-semibold text-black text-[18px]">{item.title}</h3>
                                <p className="text-[#707070] text-[14px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default FeatureHighlights