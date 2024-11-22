"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 60,
  },
  {
    name: 'Tues',
    present: 30,
    absent:  58,
  },
  {
    name: 'Weds',
    present: 67,
    absent: 43,
  }, 
  {
    name: 'Thurs',
    present: 78,
    absent: 36,
  },
  {
    name: 'Fri ',
    present: 47,
    absent: 30,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt="" height={20} width={20}/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false } tick={{fill:"#d1d5db"}} tickline={false} />
          <YAxis 
          axisLine={false } 
          tick={{fill:"#d1d5db"}} 
          tickline={false}   /> 
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}} />
          <Legend 
            align="left" 
            verticalAlign="top"
            wrapperStyle={{ paddingTop:"20px", paddingBottom: "40px" }}
          />

          <Bar dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10,10,10,10]}
     
           />
          <Bar dataKey="absent"
            fill="#C3EBFA" 
          legendType="circle"
          radius={[10,10,10,10]}
            />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart