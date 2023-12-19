import { BingReturnType } from "@/lib/hooks/use-bing";

const exampleMessages = [
  {
    heading: "💭 ",
    message: `无限对话`,
  },
  {
    heading: "🤖 ",
    message: `支持GPT4`,
  },
  {
    heading: "📱 《知之AI》APP",
    message: "点击安装",
  },
  {
    heading: "🎨 ",
    message: `支持Dalle3绘画`,
  },
  {
    heading: "🚌 ",
    message: `免魔法`,
  },
];

export function WelcomeScreen({ setInput }: Pick<BingReturnType, "setInput">) {
  return (
    <div>
      {/* <div className="welcome-container flex">
      <button
            key='zhizhiai'
            className="welcome-item w-4/5 sm:w-[240px]"
            type="button"
            onClick={() => setInput('安装 《知之AI》')}
          >
            <div className="item-title">安装 《知之AI》</div>
            <div className="item-content">
              <div className="item-body">
                <div className="item-header"></div>
                <div>免魔法国内支持GPT4,DallE3,等强大的AI功能</div>
              </div>
            </div>
          </button>
      </div> */}
      <div className="welcome-container flex">
        {exampleMessages.map((example) => (
            <a
              key={example.heading}
              href="https://zhizhiai.njstack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-2 cursor-pointer welcome-item w-4/5 sm:w-[240px]"
            >
            <div className="item-title">{example.heading}</div>
            <div className="item-content">
              <div className="item-body">
                <div className="item-header"></div>
                <div>&ldquo;{example.message}&rdquo;</div>
              </div>
            </div>
            </a>
        ))}
      </div>
    </div>
  );
}
