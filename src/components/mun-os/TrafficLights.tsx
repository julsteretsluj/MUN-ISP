"use client";

type Props = {
  onClose: () => void;
  onMinimize: () => void;
  onZoom: () => void;
};

export function TrafficLights({ onClose, onMinimize, onZoom }: Props) {
  return (
    <div className="flex items-center gap-2 pl-1">
      <button
        type="button"
        aria-label="Close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="group relative flex h-3 w-3 items-center justify-center rounded-full bg-[#FF5F57] shadow-inner ring-1 ring-black/10"
      >
        <span className="opacity-0 transition-opacity group-hover:opacity-100">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M2 2l4 4M6 2L2 6" stroke="#4a0000" strokeWidth="1.2" />
          </svg>
        </span>
      </button>
      <button
        type="button"
        aria-label="Minimize"
        onClick={(e) => {
          e.stopPropagation();
          onMinimize();
        }}
        className="group relative flex h-3 w-3 items-center justify-center rounded-full bg-[#FFBD2E] shadow-inner ring-1 ring-black/10"
      >
        <span className="opacity-0 transition-opacity group-hover:opacity-100">
          <svg width="8" height="2" viewBox="0 0 8 2">
            <rect width="8" height="1.5" rx="0.75" fill="#995700" />
          </svg>
        </span>
      </button>
      <button
        type="button"
        aria-label="Zoom"
        onClick={(e) => {
          e.stopPropagation();
          onZoom();
        }}
        className="group relative flex h-3 w-3 items-center justify-center rounded-full bg-[#28C840] shadow-inner ring-1 ring-black/10"
      >
        <span className="opacity-0 transition-opacity group-hover:opacity-100">
          <svg width="8" height="8" viewBox="0 0 8 8">
            <path
              d="M2 5h4v1H2V5zm0-3h4v1H2V2z"
              fill="#0b4d1a"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
