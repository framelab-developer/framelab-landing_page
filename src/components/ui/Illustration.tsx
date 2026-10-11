import { useId } from "react";

/** Original scalable product-category illustrations. These represent categories, not listed products. */
export function Illustration({
  kind,
  label,
}: {
  kind: "pc" | "chip" | "monitor" | "security";
  label: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 400 300"
      className={`illustration illustration-${kind}`}
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id={`${id}-case`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#243348" />
          <stop offset="1" stopColor="#080e19" />
        </linearGradient>
        <linearGradient id={`${id}-glass`}>
          <stop stopColor="#0d1a32" />
          <stop offset="1" stopColor="#182941" stopOpacity=".6" />
        </linearGradient>
        <radialGradient id={`${id}-glow`}>
          <stop stopColor="#3b82f6" stopOpacity=".28" />
          <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-screen`} x1="0" y1="1" x2="1" y2="0">
          <stop stopColor="#10233e" />
          <stop offset=".55" stopColor="#2851ab" />
          <stop offset="1" stopColor="#071124" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="253" rx="135" ry="20" fill="#030811" opacity=".7" />
      <circle cx="205" cy="152" r="145" fill={`url(#${id}-glow)`} />
      {kind === "pc" && (
        <g>
          <path
            d="M106 63 242 42 303 71 303 239 167 263 106 231Z"
            fill={`url(#${id}-case)`}
            stroke="#3b4b64"
          />
          <path
            d="M119 75 236 57 236 225 119 243Z"
            fill={`url(#${id}-glass)`}
            stroke="#405b7b"
          />
          <path
            d="M249 59 290 79 290 227 249 234Z"
            fill="#0a1321"
            stroke="#273d58"
          />
          {[100, 151, 202].map((y) => (
            <g key={y}>
              <ellipse
                cx="269"
                cy={y}
                rx="15"
                ry="20"
                fill="#0a101f"
                stroke="#60a5fa"
                strokeWidth="3"
              />
              <ellipse
                cx="269"
                cy={y}
                rx="10"
                ry="14"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
              />
              <path
                d={`M260 ${y - 8} Q283 ${y - 7} 266 ${y + 12} Q250 ${y + 2} 278 ${y - 7}`}
                fill="#31537f"
              />
              <circle cx="269" cy={y} r="4" fill="#8bbcff" />
            </g>
          ))}
          <path
            d="M135 104 207 94 207 176 135 187Z"
            fill="#111d2a"
            stroke="#2c4567"
          />
          <path
            d="M153 114 183 110 183 140 153 145Z"
            fill="#142943"
            stroke="#60a5fa"
            strokeWidth="2"
          />
          <path
            d="M177 116 C197 78 218 111 216 142"
            fill="none"
            stroke="#397ad1"
            strokeWidth="4"
          />
          <path d="M193 109V163M200 108V162" stroke="#66b5ff" strokeWidth="3" />
          <path
            d="M130 178 219 165 219 188 130 201Z"
            fill="#253951"
            stroke="#6384ab"
          />
          {[151, 192].map((x) => (
            <ellipse
              key={x}
              cx={x}
              cy={x === 151 ? 187 : 181}
              rx="13"
              ry="8"
              fill="#102037"
              stroke="#4688ce"
            />
          ))}
          <path d="M127 216 225 202" stroke="#3b82f6" strokeWidth="3" />
          <path
            d="M109 67 164 93M167 263V94L303 71"
            stroke="#64748b"
            strokeOpacity=".25"
            fill="none"
          />
          <path
            d="M123 80 157 91 157 213 123 230Z"
            fill="#c4e0ff"
            opacity=".025"
          />
          <circle cx="281" cy="74" r="2" fill="#22c55e" />
          <path d="M123 239V250M283 241V249" stroke="#182337" strokeWidth="9" />
        </g>
      )}
      {kind === "chip" && (
        <g transform="translate(200 148) rotate(-24)">
          <rect
            x="-100"
            y="-78"
            width="200"
            height="156"
            rx="9"
            fill="#0e1c2c"
            stroke="#31435c"
          />
          {[-64, -40, -16, 8, 32, 56].map((y) => (
            <g key={y}>
              <path
                d={`M-94 ${y}H-58L-39 ${y / 2}M94 ${y}H58L39 ${y / 2}`}
                stroke="#31597c"
                fill="none"
              />
              <circle cx="-91" cy={y} r="2" fill="#579cca" />
            </g>
          ))}
          <rect
            x="-50"
            y="-50"
            width="100"
            height="100"
            rx="4"
            fill="#415369"
            stroke="#8ca5c5"
          />
          <rect
            x="-39"
            y="-39"
            width="78"
            height="78"
            rx="3"
            fill={`url(#${id}-case)`}
            stroke="#60a5fa"
          />
          <path
            d="M-15 18V-18h33M-15 0h22M-2 18V-18"
            fill="none"
            stroke="#79b5ff"
            strokeWidth="3"
          />
          {[-36, -24, -12, 0, 12, 24, 36].map((x) => (
            <path
              key={x}
              d={`M${x} -50v-8M${x} 50v8M-50 ${x}h-8M50 ${x}h8`}
              stroke="#738da9"
              strokeWidth="3"
            />
          ))}
        </g>
      )}
      {kind === "monitor" && (
        <g>
          <path
            d="M188 208v29l-46 13h115l-46-13v-29"
            fill="#304157"
            stroke="#52647e"
          />
          <rect
            x="65"
            y="61"
            width="270"
            height="160"
            rx="7"
            fill="#090f1b"
            stroke="#52647e"
            strokeWidth="2"
          />
          <rect
            x="73"
            y="69"
            width="254"
            height="140"
            rx="2"
            fill={`url(#${id}-screen)`}
          />
          <path
            d="M73 200 159 116 213 163 269 88 327 128M73 184 167 93 229 151 290 73"
            fill="none"
            stroke="#5089ed"
            strokeWidth="1"
            opacity=".7"
          />
          <path d="M77 206 189 69h46L124 206" fill="#5da1ff" opacity=".08" />
          <circle cx="200" cy="215" r="2" fill="#60a5fa" />
          <path
            d="M88 263 114 244H277l21 19Z"
            fill="#152338"
            stroke="#41536d"
          />
          {[120, 142, 164, 186, 208, 230, 252, 274].map((x) => (
            <path key={x} d={`M${x} 250h13`} stroke="#6792c2" strokeWidth="3" />
          ))}
        </g>
      )}
      {kind === "security" && (
        <g>
          <path
            d="M234 140v67l-27 20h-42"
            fill="none"
            stroke="#536c8d"
            strokeWidth="13"
            strokeLinejoin="round"
          />
          <path
            d="M134 91 253 73 298 110 181 134Z"
            fill="#3c4e66"
            stroke="#7892b3"
          />
          <path d="M134 91v57l47 40v-54Z" fill="#1b2c43" stroke="#506887" />
          <path
            d="M181 134 298 110v55l-117 23Z"
            fill={`url(#${id}-case)`}
            stroke="#7892b3"
          />
          <ellipse
            cx="155"
            cy="134"
            rx="13"
            ry="20"
            transform="rotate(-28 155 134)"
            fill="#080e19"
            stroke="#60a5fa"
            strokeWidth="3"
          />
          <ellipse
            cx="155"
            cy="134"
            rx="7"
            ry="12"
            transform="rotate(-28 155 134)"
            fill="#163864"
          />
          <circle cx="150" cy="128" r="3" fill="#8bbcff" />
          <path
            d="M104 149q-17 18 0 36M92 139q-28 28 0 57"
            fill="none"
            stroke="#3b82f6"
            strokeOpacity=".5"
            strokeWidth="2"
          />
          <path
            d="M260 96v-24m0 0q15-12 25 0m-32-8q22-18 40 0"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
          />
        </g>
      )}
    </svg>
  );
}
