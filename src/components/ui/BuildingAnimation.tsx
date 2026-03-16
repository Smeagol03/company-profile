import { motion } from 'framer-motion';

interface BuildingAnimationProps {
  className?: string;
}

const BuildingAnimation = ({ className = "" }: BuildingAnimationProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 400 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Sky Gradient Background */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E8E6DF" />
            <stop offset="100%" stopColor="#F5F3EE" />
          </linearGradient>
          
          {/* Glass Window Gradient */}
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A843" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#E8C06A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4A843" stopOpacity="0.2" />
          </linearGradient>
          
          {/* Concrete Texture */}
          <pattern id="concretePattern" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="#3D3D39" />
            <circle cx="2" cy="2" r="0.5" fill="#4F4F4A" opacity="0.3" />
          </pattern>
          
          {/* Shadow for depth */}
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3" />
          </filter>
        </defs>
        
        {/* Background */}
        <rect x="0" y="0" width="400" height="450" fill="url(#skyGradient)" />
        
        {/* Ground with texture */}
        <motion.g>
          {/* Main ground */}
          <motion.rect
            x="40"
            y="400"
            width="320"
            height="40"
            rx="2"
            fill="#2E2E2B"
            filter="url(#dropShadow)"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: 'center' }}
          />
          {/* Ground highlight */}
          <rect x="40" y="400" width="320" height="3" fill="#4F4F4A" opacity="0.5" />
        </motion.g>

        {/* Tower Crane - More detailed */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Crane Tower with cross braces */}
          <g transform="translate(300, 50)">
            {/* Main tower */}
            <rect x="15" y="0" width="10" height="350" fill="none" stroke="#4F4F4A" strokeWidth="2" />
            <rect x="45" y="0" width="10" height="350" fill="none" stroke="#4F4F4A" strokeWidth="2" />
            
            {/* Cross braces */}
            {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((y, i) => (
              <g key={i}>
                <line x1="25" y1={y} x2="45" y2={y + 40} stroke="#4F4F4A" strokeWidth="1.5" opacity="0.6" />
                <line x1="45" y1={y} x2="25" y2={y + 40} stroke="#4F4F4A" strokeWidth="1.5" opacity="0.6" />
              </g>
            ))}
            
            {/* Top platform */}
            <rect x="10" y="-10" width="50" height="15" fill="#3D3D39" />
            
            {/* Counterweight */}
            <rect x="-30" y="-5" width="40" height="10" fill="#4F4F4A" />
          </g>
          
          {/* Crane arm (jib) */}
          <motion.g
            initial={{ rotate: -5 }}
            animate={{ rotate: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ transformOrigin: '310px 50px' }}
          >
            {/* Main arm */}
            <line x1="310" y1="50" x2="120" y2="30" stroke="#4F4F4A" strokeWidth="4" />
            {/* Support cables */}
            <line x1="310" y1="40" x2="250" y2="30" stroke="#4F4F4A" strokeWidth="1" opacity="0.6" />
            <line x1="250" y1="30" x2="180" y2="30" stroke="#4F4F4A" strokeWidth="1" opacity="0.6" />
          </motion.g>
          
          {/* Hook and load - Horizontal movement with careful installation */}
          <motion.g
            initial={{ x: 0 }}
            animate={{ 
              x: [0, 120, 120, 0],
            }}
            transition={{ 
              delay: 2, 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.25, 0.75, 1]
            }}
          >
            {/* Cable - dynamic length based on position */}
            <motion.line 
              x1="140" 
              y1="40" 
              x2="140" 
              y2="130" 
              stroke="#D4A843" 
              strokeWidth="2" 
              strokeDasharray="3 2" 
              animate={{
                y2: [100, 100, 140, 140, 100]
              }}
              transition={{
                delay: 2,
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.4, 0.6, 1]
              }}
            />
            {/* Hook */}
            <motion.g
              animate={{
                y: [0, 0, 40, 40, 0]
              }}
              transition={{
                delay: 2,
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.4, 0.6, 1]
              }}
            >
              <path d="M 135 100 L 145 100 L 140 110 Z" fill="#D4A843" />
              <circle cx="140" cy="115" r="5" fill="none" stroke="#D4A843" strokeWidth="2" />
            </motion.g>
            {/* Steel beam being lifted - appears when hook moves */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0, 0],
                y: [20, 20, 60, 60, 20]
              }}
              transition={{
                delay: 2,
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.45, 0.65, 1]
              }}
            >
              <rect
                x="120"
                y="120"
                width="40"
                height="8"
                fill="#D4A843"
                rx="1"
              />
              {/* Attachment point indicator */}
              <circle cx="140" cy="120" r="3" fill="#D4A843" />
            </motion.g>
          </motion.g>
        </motion.g>

        {/* Building Group */}
        <g transform="translate(100, 100)">
          {/* Building shadow */}
          <motion.path
            d="M 10 300 L 190 300 L 210 330 L -10 330 Z"
            fill="#1A1A18"
            opacity="0.2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />

          {/* Main building structure - constructed floor by floor */}
          {/* Foundation */}
          <motion.rect
            x="0"
            y="280"
            width="200"
            height="20"
            fill="#2E2E2B"
            filter="url(#dropShadow)"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ transformOrigin: 'left' }}
          />
          
          {/* Floor 1 (Ground) */}
          <motion.g
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ transformOrigin: '100px 280px' }}
          >
            <rect x="5" y="240" width="190" height="40" fill="url(#concretePattern)" stroke="#4F4F4A" strokeWidth="1" />
            {/* Floor line */}
            <line x1="5" y1="240" x2="195" y2="240" stroke="#4F4F4A" strokeWidth="2" />
            {/* Entrance */}
            <rect x="85" y="255" width="30" height="25" fill="#1A1A18" stroke="#D4A843" strokeWidth="2" />
            <rect x="88" y="258" width="12" height="22" fill="url(#glassGradient)" opacity="0.6" />
            <rect x="100" y="258" width="12" height="22" fill="url(#glassGradient)" opacity="0.6" />
            {/* Windows */}
            <rect x="15" y="250" width="25" height="20" fill="url(#glassGradient)" stroke="#D4A843" strokeWidth="1.5" rx="1" />
            <rect x="50" y="250" width="25" height="20" fill="url(#glassGradient)" stroke="#D4A843" strokeWidth="1.5" rx="1" />
            <rect x="125" y="250" width="25" height="20" fill="url(#glassGradient)" stroke="#D4A843" strokeWidth="1.5" rx="1" />
            <rect x="160" y="250" width="25" height="20" fill="url(#glassGradient)" stroke="#D4A843" strokeWidth="1.5" rx="1" />
          </motion.g>

          {/* Floor 2 */}
          <motion.g
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ transformOrigin: '100px 240px' }}
          >
            <rect x="10" y="200" width="180" height="40" fill="url(#concretePattern)" stroke="#4F4F4A" strokeWidth="1" />
            <line x1="10" y1="200" x2="190" y2="200" stroke="#4F4F4A" strokeWidth="2" />
            {/* Balcony */}
            <rect x="5" y="235" width="190" height="8" fill="#2E2E2B" />
            {/* Windows with frames */}
            {[15, 55, 95, 135].map((x, i) => (
              <g key={i}>
                <rect x={x} y="210" width="28" height="22" fill="url(#glassGradient)" stroke="#D4A843" strokeWidth="1.5" rx="1" />
                <line x1={x + 14} y1="210" x2={x + 14} y2="232" stroke="#D4A843" strokeWidth="1" />
                <line x1={x} y1="221" x2={x + 28} y2="221" stroke="#D4A843" strokeWidth="1" />
              </g>
            ))}
          </motion.g>

          {/* Floor 3 */}
          <motion.g
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{ transformOrigin: '100px 200px' }}
          >
            <rect x="15" y="160" width="170" height="40" fill="url(#concretePattern)" stroke="#4F4F4A" strokeWidth="1" />
            <line x1="15" y1="160" x2="185" y2="160" stroke="#4F4F4A" strokeWidth="2" />
            <rect x="10" y="195" width="180" height="8" fill="#2E2E2B" />
            {/* Windows */}
            {[20, 58, 96, 134].map((x, i) => (
              <g key={i}>
                <rect x={x} y="170" width="26" height="22" fill="url(#glassGradient)" stroke="#D4A843" strokeWidth="1.5" rx="1" />
                <line x1={x + 13} y1="170" x2={x + 13} y2="192" stroke="#D4A843" strokeWidth="1" />
              </g>
            ))}
          </motion.g>

          {/* Floor 4 */}
          <motion.g
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.6 }}
            style={{ transformOrigin: '100px 160px' }}
          >
            <rect x="20" y="120" width="160" height="40" fill="url(#concretePattern)" stroke="#4F4F4A" strokeWidth="1" />
            <line x1="20" y1="120" x2="180" y2="120" stroke="#4F4F4A" strokeWidth="2" />
            <rect x="15" y="155" width="170" height="8" fill="#2E2E2B" />
            {/* Windows */}
            {[28, 64, 100, 136].map((x, i) => (
              <rect key={i} x={x} y="130" width="24" height="22" fill="url(#glassGradient)" stroke="#D4A843" strokeWidth="1.5" rx="1" />
            ))}
          </motion.g>

          {/* Floor 5 - Top Floor with setbacks */}
          <motion.g
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.6 }}
            style={{ transformOrigin: '100px 120px' }}
          >
            <rect x="25" y="80" width="150" height="40" fill="url(#concretePattern)" stroke="#4F4F4A" strokeWidth="1" />
            <line x1="25" y1="80" x2="175" y2="80" stroke="#4F4F4A" strokeWidth="2" />
            <rect x="20" y="115" width="160" height="8" fill="#2E2E2B" />
            {/* Larger windows */}
            {[35, 75, 115].map((x, i) => (
              <rect key={i} x={x} y="90" width="30" height="22" fill="url(#glassGradient)" stroke="#D4A843" strokeWidth="1.5" rx="1" />
            ))}
          </motion.g>

          {/* Roof structure */}
          <motion.g
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <rect x="30" y="70" width="140" height="10" fill="#2E2E2B" />
            {/* Mechanical penthouse */}
            <rect x="60" y="50" width="80" height="20" fill="#3D3D39" stroke="#4F4F4A" strokeWidth="1" />
            <rect x="65" y="55" width="70" height="10" fill="none" stroke="#4F4F4A" strokeWidth="1" />
            {/* Vents */}
            <rect x="75" y="45" width="8" height="5" fill="#4F4F4A" />
            <rect x="117" y="45" width="8" height="5" fill="#4F4F4A" />
            {/* Antenna */}
            <line x1="100" y1="50" x2="100" y2="20" stroke="#4F4F4A" strokeWidth="2" />
            <circle cx="100" cy="20" r="3" fill="#D4A843" />
          </motion.g>

          {/* Scaffolding on one side (construction detail) */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {[80, 120, 160, 200, 240].map((y, i) => (
              <g key={i}>
                <line x1="195" y1={y} x2="210" y2={y} stroke="#4F4F4A" strokeWidth="1" />
                <line x1="195" y1={y} x2="195" y2={y + 40} stroke="#4F4F4A" strokeWidth="1" />
                <line x1="210" y1={y} x2="210" y2={y + 40} stroke="#4F4F4A" strokeWidth="1" />
                {/* X braces */}
                <line x1="195" y1={y} x2="210" y2={y + 40} stroke="#4F4F4A" strokeWidth="0.5" opacity="0.5" />
                <line x1="210" y1={y} x2="195" y2={y + 40} stroke="#4F4F4A" strokeWidth="0.5" opacity="0.5" />
              </g>
            ))}
          </motion.g>

          {/* Construction netting */}
          <motion.rect
            x="195"
            y="80"
            width="15"
            height="200"
            fill="#8C8C85"
            opacity="0.3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          />
        </g>

        {/* Construction barriers on ground */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {/* Barrier segments */}
          {[50, 80, 110, 140, 260, 290, 320].map((x, i) => (
            <g key={i}>
              <rect x={x} y="385" width="28" height="15" fill="#D4A843" opacity="0.8" />
              <rect x={x + 2} y="388" width="24" height="9" fill="#1A1A18" opacity="0.5" />
              <text x={x + 14} y="396" textAnchor="middle" fill="#1A1A18" fontSize="5" fontWeight="bold">⚠</text>
            </g>
          ))}
          {/* Barrier line */}
          <line x1="45" y1="392" x2="355" y2="392" stroke="#D4A843" strokeWidth="2" strokeDasharray="25 5" />
        </motion.g>

        {/* Beam installed on building - appears when hook places it */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0, 1, 1, 0, 0]
          }}
          transition={{
            delay: 2,
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.45, 0.48, 0.9, 0.95, 1]
          }}
        >
          {/* Installed beam on the building (Floor 3 area) */}
          <rect 
            x="215" 
            y="295" 
            width="40" 
            height="8" 
            fill="#D4A843" 
            rx="1"
            filter="url(#dropShadow)"
          />
          {/* Installation markers */}
          <circle cx="225" cy="299" r="2" fill="#1A1A18" opacity="0.5" />
          <circle cx="245" cy="299" r="2" fill="#1A1A18" opacity="0.5" />
          {/* Sparkle effect for installation */}
          <motion.circle
            cx="235"
            cy="299"
            r="4"
            fill="#E8C06A"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              delay: 4.8,
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 9.5
            }}
          />
        </motion.g>

        {/* Progress indicator with animated fill */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
        >
          {/* Progress bar background */}
          <rect x="100" y="420" width="200" height="20" rx="10" fill="#2E2E2B" />
          {/* Progress fill */}
          <motion.rect
            x="102"
            y="422"
            width="196"
            height="16"
            rx="8"
            fill="#D4A843"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.2, duration: 1 }}
            style={{ transformOrigin: 'left' }}
          />
          {/* Text */}
          <text x="200" y="435" textAnchor="middle" fill="#1A1A18" fontSize="12" fontWeight="bold" fontFamily="Barlow Condensed, sans-serif">
            100% SELESAI
          </text>
        </motion.g>

        {/* Decorative construction elements */}
        {/* Cement mixer silhouette */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.3, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <rect x="30" y="360" width="40" height="25" rx="3" fill="#4F4F4A" />
          <circle cx="50" cy="372" r="8" fill="#3D3D39" />
          <rect x="45" y="385" width="10" height="15" fill="#2E2E2B" />
        </motion.g>

        {/* Pile of construction materials */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <rect x="330" y="370" width="30" height="15" fill="#4F4F4A" transform="rotate(-5 345 377)" />
          <rect x="340" y="365" width="25" height="12" fill="#3D3D39" transform="rotate(3 352 371)" />
          <rect x="335" y="375" width="20" height="10" fill="#2E2E2B" />
        </motion.g>
      </svg>
    </div>
  );
};

export default BuildingAnimation;