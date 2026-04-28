import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Heart,
  Leaf,
  LockKeyhole,
  Monitor,
  ShieldCheck,
  Sprout,
  Users,
  UserRound,
  Globe2,
  BadgeCheck,
  BatteryCharging,
  HandHeart,
  CircleCheck,
} from 'lucide-react';
import './styles.css';

const emissions = [
  { year: '2019', value: 167 },
  { year: '2020', value: 146 },
  { year: '2021', value: 121 },
  { year: '2022', value: 93 },
  { year: '2023', value: 85 },
  { year: '2024', value: 90 },
];

const diversity = [
  { icon: UserRound, value: '41%', label: 'Women' },
  { icon: Globe2, value: '40%', label: 'International talent' },
  { icon: Users, value: '36%', label: 'in Leadership positions' },
  { icon: Handshake, value: '100%', label: 'Parental leave return rate' },
];

const avoided = [
  { year: '2020', label: '40M', height: 20 },
  { year: '2021', label: '80M', height: 34 },
  { year: '2022', label: '140M', height: 56 },
  { year: '2023', label: '210M', height: 78 },
  { year: '2024', label: '>300M', height: 102 },
];

function Header() {
  return (
    <header className="hero">
      <div className="brand">
        <div className="mark">3DS</div>
        <div className="name">DASSAULT<br />SYSTEMES</div>
      </div>
      <div className="heroDivider" />
      <div className="heroText">
        <h1>ESG DASHBOARD</h1>
        <p>Driving sustainable innovation for a better world</p>
      </div>
      <div className="planet" aria-hidden="true">
        <div className="continent c1" />
        <div className="continent c2" />
        <div className="continent c3" />
        <div className="network n1" />
        <div className="network n2" />
        <div className="network n3" />
      </div>
    </header>
  );
}

function SectionTitle({ icon: Icon, children, tone = 'blue' }) {
  return (
    <div className={`sectionTitle ${tone}`}>
      <Icon size={34} strokeWidth={2.4} />
      <span>{children}</span>
    </div>
  );
}

function Card({ children, className = '' }) {
  return <section className={`card ${className}`}>{children}</section>;
}

function EmissionsChart() {
  const points = emissions.map((item, index) => {
    const x = 38 + index * 74;
    const y = 178 - (item.value / 200) * 135;
    return { ...item, x, y };
  });

  return (
    <Card className="emissions">
      <div className="cardHeader">
        <div>
          <h2>CO₂ EMISSIONS (Scope 1, 2 &amp; 3)</h2>
          <p>tCO₂e</p>
        </div>
        <div className="change">-46%<span>vs. FY2019</span></div>
      </div>
      <svg className="lineChart" viewBox="0 0 430 220" role="img" aria-label="CO2 emissions line chart">
        {[0, 50, 100, 150, 200].map((tick) => (
          <g key={tick}>
            <text x="4" y={178 - (tick / 200) * 135 + 4}>{tick === 0 ? '0' : `${tick}K`}</text>
          </g>
        ))}
        <line x1="38" y1="178" x2="405" y2="178" className="axis" />
        <polyline points={points.map((p) => `${p.x},${p.y}`).join(' ')} className="trend" />
        {points.map((point) => (
          <g key={point.year}>
            <circle cx={point.x} cy={point.y} r="5" className="dot" />
            <text x={point.x} y={point.y - 15} textAnchor="middle" className="value">{point.value}K</text>
            <text x={point.x} y="199" textAnchor="middle">{point.year}</text>
          </g>
        ))}
      </svg>
    </Card>
  );
}

function Donut() {
  return (
    <div className="donut" style={{ '--value': '72%' }}>
      <div className="donutText"><strong>72%</strong><span>Renewable<br />Energy</span></div>
    </div>
  );
}

function EnvironmentColumn() {
  return (
    <div className="column">
      <SectionTitle icon={Sprout} tone="green">ENVIRONMENT</SectionTitle>
      <EmissionsChart />
      <Card className="splitCard">
        <div className="energyBlock">
          <h2>ENERGY CONSUMPTION</h2>
          <p>% Renewable Energy</p>
          <div className="energyContent">
            <Donut />
            <BatteryCharging className="greenIcon" size={66} strokeWidth={1.5} />
          </div>
          <small>vs. 63% in FY2022</small>
        </div>
        <div className="travelBlock">
          <h2>BUSINESS TRAVEL<br />EMISSIONS</h2>
          <p>tCO₂e</p>
          <div className="travelRow">
            <div className="change compact">-35%<span>vs. FY2019</span></div>
            <BriefcaseBusiness className="greenIcon" size={62} strokeWidth={1.6} />
          </div>
          <small>Continued reduction through virtual collaboration</small>
        </div>
      </Card>
    </div>
  );
}

function SocialColumn() {
  return (
    <div className="column">
      <SectionTitle icon={Users}>SOCIAL</SectionTitle>
      <Card className="diversity">
        <h2>EMPLOYEE DIVERSITY</h2>
        <p>% of employees</p>
        <div className="metricGrid">
          {diversity.map(({ icon: Icon, value, label }) => (
            <div className="metric" key={label}>
              <Icon size={48} strokeWidth={1.6} />
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card className="engagement">
        <div>
          <h2>EMPLOYEE ENGAGEMENT</h2>
          <p>% Favorable</p>
          <div className="gauge">
            <div className="gaugeInner"><strong>85%</strong><span>vs. 82% in FY2022</span></div>
          </div>
        </div>
        <div className="people">
          <Heart size={34} />
          <Users size={74} strokeWidth={1.4} />
        </div>
      </Card>
      <Card className="learning">
        <div>
          <h2>LEARNING &amp; DEVELOPMENT</h2>
          <p>Average training hours per employee</p>
          <strong>37</strong>
          <span>vs. 32 in FY2022</span>
        </div>
        <Monitor className="blueIcon" size={86} strokeWidth={1.4} />
        <GraduationCap className="capIcon" size={42} strokeWidth={1.6} />
      </Card>
    </div>
  );
}

function Ratings() {
  return (
    <Card className="ratings">
      <h2>ESG RATINGS &amp; RECOGNITION</h2>
      <div className="ratingGrid">
        <div>
          <div className="msci">MSCI<span>ESG RATINGS</span><b>AAA</b></div>
          <strong>Leader</strong>
        </div>
        <div>
          <div className="eco">ecovadis<span>PLATINUM</span></div>
          <strong>Top 1%</strong>
        </div>
        <div>
          <div className="djsi">DJSI<span>World Index</span></div>
          <strong>Member</strong>
        </div>
      </div>
    </Card>
  );
}

function GovernanceColumn() {
  return (
    <div className="column">
      <SectionTitle icon={ShieldCheck}>GOVERNANCE</SectionTitle>
      <Ratings />
      <Card className="simpleMetric">
        <div>
          <h2>ETHICS &amp; COMPLIANCE</h2>
          <strong>100%</strong>
          <p>Employees trained<br />on Code of Ethics</p>
        </div>
        <ShieldCheck className="navyIcon" size={86} strokeWidth={1.5} />
      </Card>
      <Card className="simpleMetric">
        <div>
          <h2>DATA PRIVACY &amp; SECURITY</h2>
          <strong>0</strong>
          <p>Confirmed data<br />breaches</p>
        </div>
        <LockKeyhole className="blueIcon circleIcon" size={86} strokeWidth={1.5} />
      </Card>
    </div>
  );
}

function Handprint() {
  return (
    <section className="handprint">
      <div className="handIcon"><HandHeart size={68} strokeWidth={1.4} /></div>
      <div className="handText">
        <h2>OUR HANDPRINT – IMPACT THROUGH OUR SOLUTIONS</h2>
        <p>Enabling our customers to create more sustainable products, optimize operations and reduce emissions.</p>
      </div>
      <div className="divider" />
      <div className="avoidedText">
        <p>Estimated CO₂e avoided<br />through customer use of our solutions</p>
        <strong>&gt; 300M <span>tCO₂e</span></strong>
        <small>cumulative since 2020</small>
      </div>
      <div className="barChart">
        <p>tCO₂e avoided (cumulative)</p>
        <div className="bars">
          {avoided.map((bar) => (
            <div className="barItem" key={bar.year}>
              <span>{bar.label}</span>
              <div className="bar" style={{ height: `${bar.height}px` }} />
              <small>{bar.year}</small>
            </div>
          ))}
        </div>
      </div>
      <Leaf className="leafBadge" size={86} strokeWidth={1.4} />
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="dashboard">
          <EnvironmentColumn />
          <SocialColumn />
          <GovernanceColumn />
        </div>
        <Handprint />
      </main>
      <footer>
        Data as of FY2024 (ending Dec 31, 2024) <span>|</span> (1) Methodology based on internal assessment and customer data.
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
