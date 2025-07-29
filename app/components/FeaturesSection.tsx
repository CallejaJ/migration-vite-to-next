import type { JSX } from "react"

const BurnTokenIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center relative border border-blue-100">
    <div className="w-12 h-12 relative">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12L32 20L24 28L16 20L24 12Z" fill="url(#gradient1)" />
        <path d="M20 16L28 24L20 32L12 24L20 16Z" fill="#FFD700" />
        <text x="21" y="26" fontSize="12" fill="#FFF">
          B
        </text>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
)

const DeployTokenIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center border border-blue-100">
    <div className="w-12 h-12 relative">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8L36 20L24 32L12 20L24 8Z" fill="url(#gradient2)" />
        <circle cx="24" cy="20" r="6" fill="#FFD700" />
        <path d="M24 12L28 24L24 36L20 24L24 12Z" fill="url(#gradient3)" />
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E90FF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
)

const VestingIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center border border-blue-100">
    <div className="w-12 h-12 relative">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12H36V36H12V12H24Z" fill="url(#gradient4)" />
        <circle cx="24" cy="24" r="4" fill="#FFD700" />
        <path d="M20 20H28V28H20V20Z" fill="url(#gradient5)" />
        <defs>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
          <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E90FF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
)

const FeatureCard = ({
  Icon,
  title,
  description,
}: {
  Icon: () => JSX.Element
  title: string
  description: string
}) => {
  return (
    <div className="feature-card bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 group">
      <div className="flex flex-col space-y-4">
        {/* Icon */}
        <Icon />
        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold gradient-text group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

const FeaturesSection = () => {
  const features = [
    {
      Icon: BurnTokenIcon,
      title: "Burn Tokens",
      description:
        "Securely burn tokens and verify the process with confidence. Keep track of all token burns and share Memento Toolkit-certified burn records with your community.",
    },
    {
      Icon: DeployTokenIcon,
      title: "Deploy Token",
      description:
        "Create and manage your ERC-20 tokens effortlessly. Personalize the token name, total supply, and network for a seamless token deployment experience.",
    },
    {
      Icon: VestingIcon,
      title: "Vesting",
      description: "Safely vest your tokens with tailored unlocking schedules using the Memento Toolkit.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} Icon={feature.Icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
