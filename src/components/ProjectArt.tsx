/** Small editorial illustrations, not screenshots of the projects. */
export function ProjectIllustration({ slug }: { slug: string }) {
  return (
    <svg aria-hidden viewBox="0 0 340 180" className="project-illustration" fill="none">
      {slug === 'video-streaming' ? (
        <>
          <circle cx="284" cy="33" r="48" fill="#ffc94a" />
          <path
            d="M0 139L90 49M0 160L112 48M5 177L130 52"
            stroke="#211a1f"
            strokeOpacity=".14"
            strokeWidth="2"
          />
          <g transform="rotate(-5 170 90)">
            <rect x="73" y="31" width="205" height="128" rx="8" fill="#211a1f" />
            <rect
              x="64"
              y="23"
              width="205"
              height="128"
              rx="8"
              fill="#fff8f0"
              stroke="#211a1f"
              strokeWidth="2"
            />
            <path d="M64 43h205" stroke="#211a1f" strokeWidth="2" />
            <circle cx="77" cy="33" r="3" fill="#ff6b6b" />
            <circle cx="88" cy="33" r="3" fill="#ffc94a" />
            <circle cx="99" cy="33" r="3" fill="#1fb7a6" />
            <rect x="75" y="53" width="183" height="70" rx="4" fill="#332833" />
            <circle cx="166" cy="88" r="22" fill="#ff6b6b" />
            <path d="M161 78l16 10-16 10Z" fill="#211a1f" />
            <path d="M78 136h176" stroke="#ded1c6" strokeWidth="4" strokeLinecap="round" />
            <path d="M78 136h65" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round" />
          </g>
        </>
      ) : slug === 'ai-business-software' ? (
        <>
          <path
            d="M0 30h340M0 60h340M0 90h340M0 120h340M0 150h340M40 0v180M80 0v180M120 0v180M160 0v180M200 0v180M240 0v180M280 0v180M320 0v180"
            stroke="#211a1f"
            strokeOpacity=".1"
          />
          <g transform="rotate(4 170 90)">
            <rect x="84" y="28" width="193" height="132" rx="8" fill="#211a1f" />
            <rect
              x="76"
              y="20"
              width="193"
              height="132"
              rx="8"
              fill="#fff8f0"
              stroke="#211a1f"
              strokeWidth="2"
            />
            <rect x="76" y="20" width="42" height="132" rx="8" fill="#332833" />
            <path
              d="M89 42h16M89 55h12M89 68h16"
              stroke="#8b7cf6"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path d="M133 40h67" stroke="#211a1f" strokeWidth="5" strokeLinecap="round" />
            <rect x="132" y="56" width="54" height="28" rx="4" fill="#e3dcfc" />
            <rect x="193" y="56" width="60" height="28" rx="4" fill="#b5e6d9" />
            <path d="M133 131h119" stroke="#d9cbc0" />
            <path
              d="M140 120l25-17 24 9 27-22 28 5"
              stroke="#6755c8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M62 84l6 17 17 6-17 6-6 17-6-17-17-6 17-6Z"
            fill="#ffc94a"
            stroke="#211a1f"
            strokeWidth="2"
          />
        </>
      ) : (
        <>
          <circle cx="63" cy="144" r="60" fill="#ffc94a" />
          <g transform="rotate(-3 170 90)">
            <rect x="82" y="22" width="188" height="145" rx="9" fill="#211a1f" />
            <rect
              x="74"
              y="14"
              width="188"
              height="145"
              rx="9"
              fill="#fff8f0"
              stroke="#211a1f"
              strokeWidth="2"
            />
            <rect x="86" y="25" width="164" height="107" rx="3" fill="#28222f" />
            <path d="M97 39h23M222 39h15" stroke="#ffc94a" strokeWidth="3" />
            <path d="M112 60h9v9h-9zM201 82h9v9h-9zM154 47h9v9h-9z" fill="#ff6b6b" />
            <path d="M112 56l4-5M201 78l4-5M154 43l4-5" stroke="#ffc94a" strokeWidth="2" />
            <path d="M149 112v9h37v-9" stroke="#1fb7a6" strokeWidth="5" />
            <path d="M100 145h22M111 138v14" stroke="#211a1f" strokeWidth="4" />
            <circle cx="222" cy="145" r="4" fill="#ff6b6b" />
            <circle cx="239" cy="142" r="4" fill="#8b7cf6" />
          </g>
          <path d="M283 39v27M270 52h27" stroke="#211a1f" strokeWidth="3" />
        </>
      )}
    </svg>
  )
}
