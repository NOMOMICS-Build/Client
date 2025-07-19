import { Eye, ThumbsUp, ThumbsDown } from 'lucide-react'

export default function Episode() {
  return (
    <div className="flex items-center gap-4 ">
    <div className="h-20 w-20 overflow-hidden rounded-md">
      <img
        src="/hero.svg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
    <div className="space-y-2">
      <div>
        <h3 className="text-lg font-bold">Episode 1</h3>
        <p className="text-sm text-muted">July 14, 2024</p>
      </div>
      <div className="center gap-4">
        <button>
          <Eye size={20} />
          <span>100</span>
        </button>
        <button>
          <ThumbsUp size={20} />
          <span>100</span>
        </button>
        <button>
          <ThumbsDown size={20} />
          <span>100</span>
        </button>
      </div>
    </div>
  </div>
  )
}
