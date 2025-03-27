import Image from 'next/image';

export default function SuccessStory() {
  return (
    <section className="bg-sectionBg py-20 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-10">실제 매칭 성공 사례</h3>

      <div className="max-w-4xl mx-auto bg-white px-6 py-6 rounded-xl shadow-sm text-left flex flex-col sm:flex-row items-start gap-6">
        <Image
          src="/team-building/exampleStory.png"
          alt="성공 사례 이미지"
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <p className="text-base font-semibold text-gray-800 mb-1">
            강민준 님의 성공 스토리
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            "TeamIT의 AI 매칭 시스템을 통해 완벽한 팀원들을 만났습니다. 3개월 만에 성공적으로 팀 출시를 완료했고, 현재 100만 다운로드를 달성했습니다."
          </p>
          <p className="text-sm text-gray-500 mt-2">
            매칭 포지션: 기획자 1명, 디자이너 1명, 개발자 2명
          </p>
        </div>
      </div>
    </section>
  );
}
