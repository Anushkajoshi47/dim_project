import {
  Activity,
  AlertTriangle,
  BarChart3,
  BellRing,
  BrainCircuit,
  Building2,
  CloudSun,
  Droplets,
  Gauge,
  HeartPulse,
  Home,
  LineChart,
  ShieldCheck,
  Sun,
  ThermometerSun,
  Waves,
  Wind,
} from 'lucide-react';

export const stats = [
  { label: 'Risk Detection', value: '87%', helper: 'demo model signal' },
  { label: 'Peak Temperature', value: '42°C', helper: 'simulated 7-day view' },
  { label: 'Monitoring', value: '24/7', helper: 'concept dashboard' },
  { label: 'Forecast View', value: '7 Days', helper: 'planning horizon' },
];

export const currentConditions = [
  { label: 'Temperature', value: '38°C', icon: ThermometerSun, tone: 'orange' },
  { label: 'Feels Like', value: '42°C', icon: Sun, tone: 'red' },
  { label: 'Humidity', value: '61%', icon: Droplets, tone: 'teal' },
  { label: 'Heat Index', value: '44°C', icon: Gauge, tone: 'amber' },
  { label: 'Wind', value: '14 km/h', icon: Wind, tone: 'blue' },
  { label: 'UV Index', value: '9', icon: CloudSun, tone: 'yellow' },
];

export const temperatureTrend = [
  { day: 'Mon', temperature: 35, feelsLike: 38 },
  { day: 'Tue', temperature: 37, feelsLike: 40 },
  { day: 'Wed', temperature: 39, feelsLike: 43 },
  { day: 'Thu', temperature: 41, feelsLike: 45 },
  { day: 'Fri', temperature: 40, feelsLike: 44 },
  { day: 'Sat', temperature: 38, feelsLike: 42 },
  { day: 'Sun', temperature: 36, feelsLike: 39 },
];

export const regionalRisk = [
  { city: 'Mumbai', level: 'HIGH', temp: '39°C', probability: '82%' },
  { city: 'Delhi', level: 'EXTREME', temp: '44°C', probability: '94%' },
  { city: 'Pune', level: 'MODERATE', temp: '35°C', probability: '58%' },
  { city: 'Ahmedabad', level: 'HIGH', temp: '42°C', probability: '88%' },
  { city: 'Bengaluru', level: 'NORMAL', temp: '31°C', probability: '24%' },
];

export const riskLevels = [
  {
    level: 'Normal',
    color: 'bg-emerald-500',
    border: 'border-emerald-200',
    text: 'Typical heat conditions. Keep hydration and daily weather awareness steady.',
  },
  {
    level: 'Moderate',
    color: 'bg-yellow-400',
    border: 'border-yellow-200',
    text: 'Warmer than usual. Plan shade, water breaks, and check on vulnerable people.',
  },
  {
    level: 'High',
    color: 'bg-orange-500',
    border: 'border-orange-200',
    text: 'Elevated heat risk. Reduce strenuous outdoor activity during peak afternoon hours.',
  },
  {
    level: 'Extreme',
    color: 'bg-red-500',
    border: 'border-red-200',
    text: 'Severe heat stress is possible. Follow official warnings and emergency guidance.',
  },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Monitor',
    copy: 'Collect climate and weather indicators from temperature, humidity, wind and urban heat signals.',
    icon: Activity,
  },
  {
    step: '02',
    title: 'Predict',
    copy: 'Analyze patterns to estimate heatwave risk and highlight conditions that may intensify.',
    icon: BrainCircuit,
  },
  {
    step: '03',
    title: 'Alert',
    copy: 'Present early-warning information in simple language for communities and planners.',
    icon: BellRing,
  },
];

export const awarenessArticles = [
  {
    category: 'Safety',
    title: 'How to Stay Safe During a Heatwave',
    description: 'Hydration, shade, cooling breaks, and responsible planning during extreme heat.',
    body:
      'Drink water regularly, avoid heavy activity during the hottest hours, wear light breathable clothing, and spend time in cooler spaces when possible. Check on children, older adults, outdoor workers, and people with medical conditions. For urgent symptoms or official alerts, follow local emergency guidance.',
    icon: ShieldCheck,
  },
  {
    category: 'Science',
    title: 'What Is Heat Index?',
    description: 'A simple explanation of why humidity can make high temperatures feel more dangerous.',
    body:
      'Heat index combines air temperature and humidity to describe how hot conditions feel to the human body. When humidity is high, sweat evaporates less efficiently, so the body has more difficulty cooling itself.',
    icon: Gauge,
  },
  {
    category: 'Health',
    title: 'Heat Exhaustion vs Heat Stroke',
    description: 'Recognize the difference between heat stress symptoms and emergency warning signs.',
    body:
      'Heat exhaustion can include heavy sweating, weakness, dizziness, nausea, and headache. Heat stroke is more serious and can include confusion, fainting, very high body temperature, or hot dry skin. Treat heat stroke as an emergency and seek official medical help immediately.',
    icon: HeartPulse,
  },
  {
    category: 'Urban Climate',
    title: 'Why Cities Experience Urban Heat',
    description: 'Understand how concrete, traffic, dense buildings, and low tree cover trap heat.',
    body:
      'Urban areas often absorb and retain more heat than rural surroundings because roads, rooftops, and buildings store solar energy. Tree cover, reflective materials, ventilation corridors, and shaded public spaces can reduce local heat exposure.',
    icon: Building2,
  },
  {
    category: 'Climate',
    title: 'How Climate Change Influences Heatwaves',
    description: 'Learn why warming trends can make heat extremes more frequent and intense.',
    body:
      'As average temperatures rise, extremely hot days become more likely in many regions. Climate change can increase the frequency, duration, and intensity of heatwaves, making preparedness and awareness more important for communities.',
    icon: LineChart,
  },
  {
    category: 'Preparedness',
    title: 'Preparing Your Home for Extreme Heat',
    description: 'Practical steps for shade, ventilation, cooling routines, and emergency readiness.',
    body:
      'Use curtains or reflective coverings during peak sun, ventilate when outdoor air is cooler, identify nearby cooling locations, and keep drinking water available. Families can prepare contact plans and monitor official weather warnings during periods of extreme heat.',
    icon: Home,
  },
];

export const predictionFactors = [
  { label: 'Temperature', icon: ThermometerSun },
  { label: 'Humidity', icon: Droplets },
  { label: 'Wind', icon: Wind },
  { label: 'Historical Trends', icon: BarChart3 },
  { label: 'AI Analysis', icon: BrainCircuit },
  { label: 'Heatwave Risk', icon: Waves },
];
