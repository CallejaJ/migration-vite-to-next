import type { JSX } from "react"

const BurnTokenIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center relative border border-blue-100">
    <div className="w-12 h-12 relative">
      <img 
        src="/images/burn.png" 
        alt="Burn Token" 
        className="w-full h-full object-contain"
      />
    </div>
  </div>
)

const DeployTokenIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center border border-blue-100">
    <div className="w-12 h-12 relative">
      <img 
        src="/images/deploy.png" 
        alt="Deploy Token" 
        className="w-full h-full object-contain"
      />
    </div>
  </div>
)

const VestingIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center border border-blue-100">
    <div className="w-12 h-12 relative">
      <img 
        src="/images/vesting.png" 
        alt="Vesting" 
        className="w-full h-full object-contain"
      />
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