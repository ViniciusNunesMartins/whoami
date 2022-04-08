import { FC } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const currentYear: number = new Date().getFullYear();
const data = [
  { lvl: currentYear - 2011, fullMark: 12, subject: "Linux" },
  { lvl: currentYear - 2020, fullMark: 12, subject: "Docker" },
  { lvl: currentYear - 2020, fullMark: 12, subject: "AWS" },
  { lvl: currentYear - 2016, fullMark: 12, subject: "Python" },
  { lvl: currentYear - 2016, fullMark: 12, subject: "JavaScript" },
  { lvl: currentYear - 2018, fullMark: 12, subject: "Django" },
  { lvl: currentYear - 2019, fullMark: 12, subject: "React" },
  { lvl: currentYear - 2016, fullMark: 12, subject: "PostgreSQL" },
  { lvl: currentYear - 2017, fullMark: 12, subject: "Git" },
];


const Ability: FC = () => {
  return (
    <>
      <h1>Abilities (years)</h1>
      <ResponsiveContainer width="50%" height="50%" aspect={3}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" fill='#FFF' axisLine />
          <PolarRadiusAxis />
          <Radar name="Ability" dataKey="lvl" stroke="#FFFFFF" fill='#FFFFFF' fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}


export default Ability;