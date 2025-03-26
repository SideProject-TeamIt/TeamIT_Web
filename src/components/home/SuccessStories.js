/*
코드 설명 : 팀빌딩 성공사례를 보여주는 컴포넌트
*/

import { CalendarDays } from 'lucide-react';

const stories = [
  {
    category: '금융 서비스',
    title: '핀테크 앱 런칭 성공',
    team: '6명의 팀원',
    tags: ['React Native', 'Node.js'],
  },
  {
    category: '교육 플랫폼',
    title: '교육앱 출시 및 투자유치',
    team: '8명의 팀원',
    tags: ['Vue.js', 'Spring'],
  },
  {
    category: '소셜 미디어',
    title: 'SNS 서비스 베타 출시',
    team: '5명의 팀원',
    tags: ['Python', 'TensorFlow'],
  },
  {
    category: '여행 서비스',
    title: '여행 플랫폼 MVP 완성',
    team: '4명의 팀원',
    tags: ['Solidity', 'Web3.js'],
  },
];

const tagColors = {
  'React Native': 'bg-indigo-100 text-indigo-600',
  'Node.js': 'bg-green-100 text-green-600',
  'Vue.js': 'bg-yellow-100 text-yellow-700',
  Spring: 'bg-pink-100 text-pink-600',
  Python: 'bg-sky-100 text-sky-600',
  TensorFlow: 'bg-lime-100 text-lime-600',
  Solidity: 'bg-purple-100 text-purple-600',
  'Web3.js': 'bg-emerald-100 text-emerald-600',
};

export default function SuccessStories() {
  return (
    <section className="bg-sectionBg py-20">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">팀빌딩 성공사례</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {stories.map((story, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition h-full flex flex-col justify-between">
            <div>
              <h4 className="text-sm text-indigo-500 font-semibold">{story.category}</h4>
              <h3 className="mt-1 text-base font-bold text-gray-900">{story.title}</h3>
              <div className="flex items-center text-xs text-gray-500 mt-2 gap-1">
                <CalendarDays size={14} />
                <span>{story.team}</span>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mt-4">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagColors[tag]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
