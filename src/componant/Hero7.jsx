import React from 'react';

const testimonials = [
  {
    category: 'DEV & IT',
    quote:
      '"Haris came in and helped us transfer knowledge from our departing developer, meeting a serious deadline, without fail. His knowledge and experience are exceptional."',
    stars: '⭐⭐⭐⭐⭐',
    contributor: 'Hari M.',
    role: 'Full-Stack Developer',
    date: 'Apr 7, 2025',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnrsfR_YqM-e08lflHvQWXIlCzmSqAwmozg&s',
  },
  {
  category: 'Design & UX',
  quote:
    '"Priya transformed our outdated website into a sleek, user-friendly platform. The feedback from our clients has been overwhelmingly positive."',
  stars: '⭐⭐⭐⭐⭐',
  contributor: 'Priya K.',
  role: 'UX Designer',
  date: 'Feb 12, 2025',
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
},
{
  category: 'Writing & Translation',
  quote:
    '"Jake’s copywriting helped us boost conversions by 30%. His words connected effortlessly with our audience and matched our brand perfectly."',
  stars: '⭐⭐⭐⭐⭐',
  contributor: 'Jake L.',
  role: 'Copywriter',
  date: 'Jan 18, 2025',
  image: 'https://randomuser.me/api/portraits/men/35.jpg',
},
{
  category: 'Marketing',
  quote:
    '"Fatima brought fresh strategy and consistency to our email campaigns. We’re finally seeing results, and it’s all thanks to her insights."',
  stars: '⭐⭐⭐⭐⭐',
  contributor: 'Fatima S.',
  role: 'Digital Marketer',
  date: 'Mar 3, 2025',
  image: 'https://randomuser.me/api/portraits/women/32.jpg',
},
{
  category: 'Development',
  quote:
    '"Alex’s backend optimization reduced our server response time by half. It’s been a huge performance upgrade for our users."',
  stars: '⭐⭐⭐⭐⭐',
  contributor: 'Alex J.',
  role: 'Backend Engineer',
  date: 'May 22, 2025',
  image: 'https://randomuser.me/api/portraits/men/55.jpg',
},
{
  category: 'Data & Analytics',
  quote:
    '"Li helped us identify inefficiencies and restructure our reporting dashboards. His work made our decision-making faster and smarter."',
  stars: '⭐⭐⭐⭐⭐',
  contributor: 'Li Wei',
  role: 'Data Analyst',
  date: 'June 14, 2025',
  image: 'https://randomuser.me/api/portraits/men/18.jpg',
}
  
];

export const Hero7 = () => {
  return (
    <div className=''>
      <div className='mb-10'>
        <h1 className='text-3xl font-medium'>Real results for clients</h1>
      </div>
      <div className='grid gap-20 grid-cols-3 m-10'>
        {testimonials.map((t, index) => (
          <div
            key={index}
            className='grid p-5 gap-[30px] shadow-[0_0_3px_rgba(0,0,0,0.2)] w-[350px] h-[450px] rounded-3xl bg-white hover:shadow-2xl'
          >
            <div className='mb-10'>
              <p className='text-sm font-semibold text-gray-600'>{t.category}</p>
              <p className='text-[.9rem] mt-10 w-[90%] font-[500] text-gray-800'>
                {t.quote}
              </p>
              <p className='mt-4 text-xl text-yellow-500'>{t.stars}</p>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-sm font-semibold text-gray-700'>
                  Work done by {t.contributor}
                </p>
                <p className='text-sm text-gray-600'>{t.role}</p>
                <p className='text-sm text-gray-500'>{t.date}</p>
              </div>
              <img
                className='w-[90px] h-[90px] rounded-full object-cover border'
                src={t.image}
                alt={`Profile photo of ${t.contributor}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};