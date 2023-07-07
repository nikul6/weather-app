'use client'

import CityPicker from '../../components/CityPicker';
import { Card, Divider, Text, Subtitle } from '@tremor/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center">
      <Card className='max-w-4xl mx-auto'>
        {/* <Text className='text-5xl font-bold text-center mb-10'>Weather App</Text> */}
        <Subtitle className='text-6xl font-bold text-center mb-10 text-gray-500'>Weather App</Subtitle>
        <Subtitle className='text-xl text-center'>Powered by Next.js 13, Tailwind CSS, Tremor + More!</Subtitle>
        <Divider className='my-10'/>
        <Card className='bg-gradient-to-br from-[#394F68] to-[#183B7E]'>
          <CityPicker/>
        </Card>
      </Card>
    </div>
  )
}
