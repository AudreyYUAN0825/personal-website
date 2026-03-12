"use client";

/**
 * Project Cover — 概念视觉封面，非真实截图
 * 使用网站五色系统，每个项目独立主题
 */
const COVER_CONFIG: Record<
  string,
  { gradient: string; svg: React.ReactNode }
> = {
  "longing-startup": {
    gradient:
      "linear-gradient(135deg, rgba(125,172,214,0.35) 0%, rgba(51,83,158,0.25) 50%, rgba(125,172,214,0.2) 100%)",
    svg: (
      <svg
        viewBox="0 0 400 200"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* 世界地图轮廓简化 — 连接节点 */}
        <defs>
          <linearGradient id="longing-line1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7DACD6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#33539E" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="longing-line2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#33539E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7DACD6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* 连接线 — 国际航线/教育网络 */}
        <path
          d="M 40 100 Q 120 60 200 90 T 360 80"
          fill="none"
          stroke="url(#longing-line1)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <path
          d="M 60 140 Q 160 100 260 130 T 380 110"
          fill="none"
          stroke="url(#longing-line1)"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
        <path
          d="M 80 50 L 180 90 L 280 70 L 320 120"
          fill="none"
          stroke="url(#longing-line2)"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* 节点 */}
        {[
          [50, 95],
          [120, 65],
          [200, 95],
          [280, 75],
          [350, 85],
          [100, 135],
          [240, 125],
          [320, 115],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i < 4 ? 4 : 2.5}
            fill="#7DACD6"
            fillOpacity={0.5 - i * 0.03}
          />
        ))}
      </svg>
    ),
  },
  "erm-compliance": {
    gradient:
      "linear-gradient(135deg, rgba(51,83,158,0.28) 0%, rgba(192,185,219,0.35) 50%, rgba(51,83,158,0.2) 100%)",
    svg: (
      <svg
        viewBox="0 0 400 200"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="erm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#33539E" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#C0B9DB" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* 欧洲轮廓简化 */}
        <path
          d="M 180 40 L 220 35 L 260 50 L 280 85 L 270 120 L 240 140 L 200 135 L 170 110 L 160 75 Z"
          fill="none"
          stroke="url(#erm-grad)"
          strokeWidth="2"
          opacity="0.7"
        />
        {/* 电池/电网结构 — 竖条 */}
        {[100, 140, 180, 220, 260, 300, 340].map((x, i) => (
          <rect
            key={i}
            x={x}
            y={80 - i * 3}
            width={12}
            height={50 + i * 4}
            rx={2}
            fill="#33539E"
            fillOpacity={0.15 + (i % 3) * 0.08}
          />
        ))}
        {/* 能源流动线 */}
        <path
          d="M 60 100 Q 150 80 250 90 T 380 95"
          fill="none"
          stroke="#C0B9DB"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
      </svg>
    ),
  },
  "oecd-ifcma": {
    gradient:
      "linear-gradient(135deg, rgba(51,83,158,0.25) 0%, rgba(125,172,214,0.3) 40%, rgba(192,185,219,0.25) 100%)",
    svg: (
      <svg
        viewBox="0 0 400 200"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="oecd-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#33539E" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#7DACD6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C0B9DB" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* 数据节点网络 */}
        {[
          [80, 60],
          [160, 45],
          [240, 55],
          [320, 50],
          [120, 110],
          [200, 100],
          [280, 115],
          [180, 150],
          [260, 155],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={5 - (i % 3)}
            fill="url(#oecd-grad)"
          />
        ))}
        {/* 连接线 — 政策连接结构 */}
        <line x1="80" y1="60" x2="160" y2="45" stroke="#7DACD6" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="160" y1="45" x2="240" y2="55" stroke="#7DACD6" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="240" y1="55" x2="320" y2="50" stroke="#C0B9DB" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="80" y1="60" x2="120" y2="110" stroke="#33539E" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="160" y1="45" x2="200" y2="100" stroke="#33539E" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="240" y1="55" x2="280" y2="115" stroke="#7DACD6" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="120" y1="110" x2="200" y2="100" stroke="#C0B9DB" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="200" y1="100" x2="280" y2="115" stroke="#C0B9DB" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="200" y1="100" x2="180" y2="150" stroke="#33539E" strokeWidth="1" strokeOpacity="0.25" />
        <line x1="280" y1="115" x2="260" y2="155" stroke="#7DACD6" strokeWidth="1" strokeOpacity="0.25" />
      </svg>
    ),
  },
  "undp-portfolio": {
    gradient:
      "linear-gradient(135deg, rgba(125,172,214,0.3) 0%, rgba(233,183,212,0.28) 45%, rgba(192,185,219,0.25) 100%)",
    svg: (
      <svg
        viewBox="0 0 400 200"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="undp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7DACD6" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#E9B7D4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C0B9DB" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {/* 循环箭头结构 — 同心圆 */}
        <circle cx="200" cy="100" r="70" fill="none" stroke="url(#undp-grad)" strokeWidth="2.5" strokeOpacity="0.6" />
        <circle cx="200" cy="100" r="45" fill="none" stroke="#E9B7D4" strokeWidth="2" strokeOpacity="0.5" />
        <circle cx="200" cy="100" r="25" fill="none" stroke="#C0B9DB" strokeWidth="1.5" strokeOpacity="0.5" />
        {/* 材料流动路径 — 连接线 */}
        <path
          d="M 200 30 L 200 55 M 200 75 L 200 100 M 200 125 L 200 170"
          fill="none"
          stroke="#7DACD6"
          strokeWidth="1.5"
          strokeOpacity="0.35"
        />
        <path
          d="M 130 100 L 155 100 M 245 100 L 270 100"
          fill="none"
          stroke="#E9B7D4"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        {/* 网络节点 */}
        {[
          [200, 30],
          [130, 100],
          [270, 100],
          [200, 170],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={4} fill="#C0B9DB" fillOpacity={0.5} />
        ))}
      </svg>
    ),
  },
};

const DEFAULT_COVER = {
  gradient:
    "linear-gradient(135deg, rgba(125,172,214,0.25) 0%, rgba(192,185,219,0.2) 100%)",
  svg: null,
};

interface ProjectCoverProps {
  slug: string;
}

export function ProjectCover({ slug }: ProjectCoverProps) {
  const config = COVER_CONFIG[slug] ?? DEFAULT_COVER;

  return (
    <div
      className="project-cover relative h-[200px] w-full shrink-0 overflow-hidden"
      style={{ background: config.gradient }}
    >
      {config.svg}
    </div>
  );
}
