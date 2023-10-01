import React from 'react'
import leftimg from '../assets/back-left2.jpg'
import rightimg from '../assets/back-left-4.jpeg'
import backleft from '../assets/Inner Peace Meditation GIF.gif'
import gif from '../assets/Intercom Live Chat.gif'
import gif2 from '../assets/Searching.gif'
const About = () => {
  return (
    <div>

        

<section
   className="relative bg-gray-200 w-full mt-4 ">
 
   <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto py-8 ">
       <div className="space-y-2 ">
           <div clclassNameass="flex felx-col gap-10 mx-auto"> 
           <p className="text-center relative left-[450px] text-[30px] font-bold leading-[1.2] text-black">ABOUT US</p>
           </div>   
       </div>
   </div>
 
    </section>
        
      <div className="flex  sm:flex-col lg:flex-row justify-between items-center py-8 ">
       {/* <!--left part--> */}
       <div className="space-y-2 ml-14">
           <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">Who We Are </h1>
           <div className="">
            <p className="font-mullish text-[18px] leading-7 text-black opacity-70 ">
            We are a passionate team of healthcare enthusiasts, Ayurvedic practitioners, and technology experts committed to bridging the gap between traditional Ayurvedic wisdom and modern healthcare solutions. Our journey began with a shared vision: to make Ayurveda more accessible, personalized, and efficient through innovative software solutions. Ayurveda, with its profound knowledge of herbs, minerals, and formulations, holds the key to holistic well-being. However, navigating the complexities of Ayurvedic texts and adapting this ancient wisdom to contemporary healthcare practices can be a daunting task. This realization led us to embark on a mission - to create a transformative digital platform that empowers both Ayurvedic students and practitioners.

           </p>
           
          </div>
        </div>
        {/* <!--right part--> */}
       <img src={gif} alt=""
       className="w-full max-w-[580px] relative mr-14"/>
           
       </div>

     <div className="flex  sm:flex-col lg:flex-row justify-between items-center py-10 ">
        {/* <!--right part--> */}
       <img src={gif2} alt=""
       className="w-full max-w-[580px] relative ml-14 rounded-full"/>

       {/* <!--left part--> */}
       <div className="space-y-2 ml-8">
           <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">Our Mission</h1>
           <div className="">
            <p className="font-mullish text-[18px] leading-7 text-black opacity-70 ">
            At our core, we are driven by a singular mission: to democratize Ayurvedic healthcare. We firmly believe that Ayurveda's holistic approach to well-being has a place in today's world, and we're dedicated to making it accessible to all. Our software is not just a tool; it's a gateway to Ayurvedic knowledge, enabling users to harness the full potential of personalized treatments, informed decisions, and a balanced life.
           </p>
    
          </div>
        </div>
           
       </div>

      

       <div className="flex  sm:flex-col lg:flex-row justify-between items-center py-5 ">
       {/* <!--left part--> */}
       <div className="space-y-2 ml-12">
           <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">The Power of Technology and Tradition</h1>
           <div className="">
            <p className="font-mullish text-[18px] leading-7 text-black opacity-70 ">
            Our unique strength lies in our ability to harmoniously blend technology with tradition. Our software leverages advanced Natural Language Processing (NLP) and machine learning techniques to navigate the extensive Ayurvedic texts, decipher complex terminology, and deliver tailored recommendations. We have meticulously digitized Ayurvedic classics to create a comprehensive knowledge base that serves as a bridge between the past and the future of healthcare.
           </p>
          </div>
        </div>
        {/* <!--right part--> */}
       <img src={backleft} alt=""
       className="w-full max-w-[450px] relative mr-12 rounded-full"/>
           
       </div>

       
       
       
    </div>
  )
}

export default About