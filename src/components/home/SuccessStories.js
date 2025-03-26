/*
코드 설명 : 팀빌딩 성공사례를 보여주는 컴포넌트
*/

const stories = [
    {
      category: '금융 서비스',
      title: '핀테크 앱 런칭 성공',
      date: '6개월 전 팀빌딩',
      tags: ['React Native', 'Node.js'],
    },
    {
      category: '교육 플랫폼',
      title: '교육앱 출시 및 투자유치',
      date: '8개월 전 팀빌딩',
      tags: ['Vue.js', 'Spring'],
    },
    {
      category: '소셜 미디어',
      title: 'SNS 서비스 베타 출시',
      date: '5개월 전 팀빌딩',
      tags: ['Python', 'TensorFlow'],
    },
    {
      category: '여행 서비스',
      title: '여행 플랫폼 MVP 완성',
      date: '4개월 전 팀빌딩',
      tags: ['Solidity', 'Web3.js'],
    },
  ];
  
  export default function SuccessStories() {
    return (
      <section className="bg-white py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-10">팀빌딩 성공사례</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {stories.map((story, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:shadow transition">
              <h4 className="text-sm text-blue-500 font-semibold">{story.category}</h4>
              <h3 className="mt-2 text-base font-bold">{story.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{story.date}</p>
              <div className="flex gap-2 flex-wrap mt-3">
                {story.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
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
  