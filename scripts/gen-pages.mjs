#!/usr/bin/env node
/**
 * Generates page.tsx files for all product sub-pages.
 * Run with: node scripts/gen-pages.mjs
 */
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// ─── Page definitions ─────────────────────────────────────────────────────────
// Format: [route (relative to app/(site)), eyebrow, title, description, [stats], [feature titles]]

const PAGES = [
  // ── NETWORK SECURITY ──────────────────────────────────────────────────────
  [
    'network-security/next-generation-firewall',
    'Strata™ Network Security',
    'Next-Generation Firewall',
    'ML-Powered NGFWs that stop zero-day threats inline, in real time. The industry\'s first NGFWs to use machine learning to prevent unknown threats across all traffic.',
    [{ value: '70K', label: 'Customers' }, { value: '95%', label: 'Fortune 100' }, { value: '13x', label: 'Recognized Leader' }],
    ['Inline ML Threat Prevention', 'Zero-Day Exploit Protection', 'App-ID™ Technology', 'User-ID™ & Device-ID™', 'Advanced URL Filtering', 'Decryption at Scale']
  ],
  [
    'network-security/hardware-firewall-innovations',
    'Strata™ Network Security',
    'Hardware Firewall Innovations',
    'Purpose-built hardware firewalls delivering the highest throughput and density for any environment — from branch to campus to data center.',
    [{ value: '1 Tbps', label: 'Max Throughput' }, { value: '70K', label: 'Customers' }],
    ['PA-Series Firewalls', 'High Availability', 'Centralized Management', 'Purpose-Built ASICs', 'Zero-Touch Provisioning', 'Hardware Security Modules']
  ],
  [
    'network-security/software-firewalls',
    'Strata™ Network Security',
    'Software Firewalls',
    'Flexible VM-Series and CN-Series firewalls deliver consistent security across private clouds, public clouds, and Kubernetes environments.',
    [{ value: '3', label: 'Deployment Forms' }, { value: '5+', label: 'Public Clouds Supported' }],
    ['VM-Series for Private Cloud', 'VM-Series for Public Cloud', 'CN-Series for Kubernetes', 'Auto-Scaling Support', 'Cloud-Native Integration', 'Terraform & Ansible Support']
  ],
  [
    'network-security/strata-cloud-manager',
    'Strata™ Network Security',
    'Strata Cloud Manager',
    'AI-driven Zero Trust network security management that provides consistent policy management, health monitoring, and predictive analytics across all NGFW deployments.',
    [{ value: '1', label: 'Unified Control Plane' }, { value: '99.9%', label: 'Uptime SLA' }],
    ['Unified Policy Management', 'AI-Driven Health Monitoring', 'Predictive Analytics', 'Zero Touch Provisioning', 'Multi-Tenancy', 'REST API Automation']
  ],
  [
    'network-security/sd-wan-subscription',
    'Strata™ Network Security',
    'SD-WAN Subscription',
    'Integrated SD-WAN capabilities delivered directly through PAN-OS, ensuring secure and optimized connectivity for branch offices with a single-pane-of-glass management.',
    [{ value: '100%', label: 'PAN-OS Integrated' }],
    ['Single-Vendor SASE', 'Application-Aware Routing', 'Zero Touch Provisioning', 'Integrated Security', 'WAN Optimization', 'Dynamic Path Selection']
  ],
  [
    'network-security/pan-os',
    'Strata™ Network Security',
    'PAN-OS',
    'The world\'s most deployed next-generation firewall OS, PAN-OS natively classifies all traffic — including applications, threats, and content — and ties it to the user.',
    [{ value: '70K', label: 'Deployments Worldwide' }],
    ['App-ID™', 'User-ID™', 'Content-ID™', 'Device-ID™', 'GlobalProtect™', 'Advanced Routing Engine']
  ],
  [
    'network-security/panorama',
    'Strata™ Network Security',
    'Panorama Network Security Management',
    'A single pane of glass for centralized firewall management, delivering consistent policies and visibility across physical, virtual, and cloud-delivered firewalls.',
    [{ value: '5,000+', label: 'Managed Devices' }, { value: '1', label: 'Pane of Glass' }],
    ['Centralized Policy Management', 'Log Collection & Aggregation', 'Role-Based Administration', 'Application Usage Visibility', 'Automated Threat Response', 'Push to All Firewalls']
  ],
  [
    'network-security/security-subscriptions',
    'Strata™ Network Security',
    'Security Subscriptions',
    'AI-powered security services that seamlessly add advanced protection capabilities to your Strata firewalls — activated in minutes, not months.',
    [{ value: '6+', label: 'Subscription Services' }],
    ['Advanced Threat Prevention', 'Advanced URL Filtering', 'Advanced WildFire®', 'Advanced DNS Security', 'Enterprise IoT Security', 'Medical IoT Security']
  ],
  [
    'network-security/advanced-threat-prevention',
    'Strata™ Network Security',
    'Advanced Threat Prevention',
    'The industry\'s only inline deep-learning-based security that prevents unknown C2 and evasion attacks, stopping zero-day threats before they can execute.',
    [{ value: '95%', label: 'New Threats Blocked Inline' }, { value: '0', label: 'Day Delay on Signatures' }],
    ['Inline Deep Learning', 'C2 Attack Prevention', 'IPS Signatures', 'Evasion Detection', 'Encrypted Traffic Analysis', 'Real-Time Updates']
  ],
  [
    'network-security/advanced-url-filtering',
    'Strata™ Network Security',
    'Advanced URL Filtering',
    'Real-time prevention of web-based threats using inline deep learning to accurately categorize URLs, stop phishing, and prevent malicious content delivery.',
    [{ value: '8B+', label: 'URLs Analyzed Daily' }, { value: '11M+', label: 'Malicious URLs Blocked Daily' }],
    ['Inline ML URL Analysis', 'Phishing Prevention', 'Malware Download Prevention', 'Category-Based Filtering', 'Custom URL Categories', 'SSL Inspection']
  ],
  [
    'network-security/advanced-wildfire',
    'Strata™ Network Security',
    'Advanced WildFire®',
    'The industry\'s largest cloud-based malware analysis and prevention engine using machine learning, static analysis, and dynamic analysis to detect the most evasive threats.',
    [{ value: '30M', label: 'Malware Samples Analyzed Daily' }, { value: '5 min', label: 'Time to Protection' }],
    ['Multi-Technique Analysis', 'Evasion-Resistant Sandbox', 'Retro-Scanning', 'Threat Intelligence Sharing', 'API Access', 'File Verdict Cache']
  ],
  [
    'network-security/advanced-dns-security',
    'Strata™ Network Security',
    'Advanced DNS Security',
    'Real-time DNS-layer protection that uses ML to predict and block DNS-based attacks, stopping threats from communicating with command-and-control infrastructure.',
    [{ value: '1B+', label: 'DNS Queries Analyzed Daily' }],
    ['DNS Tunneling Detection', 'DGA Detection', 'Malicious Domain Blocking', 'Cache Poisoning Prevention', 'FQDN-Based Policies', 'Real-Time Threat Intelligence']
  ],
  [
    'network-security/enterprise-device-security',
    'Strata™ Network Security',
    'Enterprise IoT Security',
    'The industry\'s most comprehensive IoT security solution uses ML-powered visibility to discover and protect all unmanaged smart devices on enterprise networks.',
    [{ value: '90%', label: 'IoT Devices Unmanaged' }, { value: '1', label: 'Policy Engine for All Devices' }],
    ['ML-Powered Device Discovery', 'Risk Assessment', 'Behavioral Anomaly Detection', 'Automated Policy Recommendations', 'Zero Trust Segmentation', 'Vulnerability Assessment']
  ],
  [
    'network-security/medical-device-security',
    'Strata™ Network Security',
    'Medical IoT Security',
    'Protect connected medical devices and clinical IoT with the industry\'s first security solution purpose-built for healthcare environments.',
    [{ value: '500+', label: 'Medical Device Types Identified' }],
    ['Clinical Device Profiling', 'FDA Recall Alerting', 'HIPAA Compliance Reporting', 'Network Segmentation', 'Real-Time Risk Scoring', 'Integration with Clinical Workflows']
  ],
  [
    'network-security/strengthen-your-network-security-foundation',
    'Strata™ Network Security',
    'Strengthen Your Network Security Foundation',
    'Build a Zero Trust network security foundation with AI-powered next-generation firewalls that prevent threats, enable safe application use, and enforce policy across all traffic.',
    [],
    ['Zero Trust Architecture', 'AI-Powered Prevention', 'Consistent Policy Enforcement', 'End-to-End Visibility', 'Threat Intelligence Integration', 'Security Orchestration']
  ],
  [
    'network-security/simplify-network-security-management',
    'Strata™ Network Security',
    'Simplify Network Security Management',
    'Reduce operational complexity with centralized management, automated policy deployment, and AI-driven operations across your entire firewall estate.',
    [],
    ['Centralized Policy Management', 'Zero Touch Provisioning', 'AIOps for Network Security', 'Role-Based Administration', 'Configuration Audit', 'Change Management Automation']
  ],
  [
    'network-security/protect-your-extended-network',
    'Strata™ Network Security',
    'Protect Your Extended Network',
    'Secure your branches, campuses, data centers, and cloud environments with a consistent security architecture powered by Strata and Precision AI®.',
    [],
    ['Branch Office Security', 'Campus Network Protection', 'Data Center Segmentation', 'Multi-Cloud Security', 'OT/ICS Protection', 'Remote Worker Security']
  ],
  // ── SASE ──────────────────────────────────────────────────────────────────
  [
    'sase/access',
    'Prisma® SASE',
    'Prisma Access',
    'The industry\'s most complete SASE platform, providing cloud-delivered security and networking for remote users, branch offices, and headquarters from a single cloud service.',
    [{ value: '5B+', label: 'Transactions Secured Daily' }, { value: '100+', label: 'PoP Locations' }],
    ['Cloud SWG', 'ZTNA 2.0', 'Cloud CASB', 'FWaaS', 'Cloud SDP', 'ADEM']
  ],
  [
    'sase/prisma-browser',
    'Prisma® SASE',
    'Prisma Browser',
    'A managed enterprise browser that provides secure access to SaaS and web applications from any device, without compromising user experience.',
    [{ value: '100%', label: 'Browser-Based Threat Visibility' }],
    ['Managed Enterprise Browser', 'Data Leak Prevention', 'Phishing Protection', 'Zero Trust Access', 'BYOD Support', 'Isolated Browsing']
  ],
  [
    'sase/sd-wan',
    'Prisma® SASE',
    'Prisma SD-WAN',
    'The industry\'s first SASE-native SD-WAN, providing AI-driven autonomous networking that is secure by design, cloud-managed, and application-aware.',
    [{ value: '5x', label: 'Better Application Performance' }, { value: '63%', label: 'OpEx Reduction' }],
    ['AI-Driven Path Selection', 'Autonomous SD-WAN', 'SASE-Native Integration', 'Zero Touch Provisioning', 'Application Performance Monitoring', 'WAN Optimization']
  ],
  [
    'sase/app-acceleration',
    'Prisma® SASE',
    'App Acceleration',
    'Optimize the performance of SaaS and cloud applications for your remote workforce with AI-driven acceleration built directly into Prisma Access.',
    [{ value: '5x', label: 'SaaS Application Speedup' }],
    ['SaaS Acceleration', 'WAN Optimization', 'Protocol Optimization', 'Traffic Steering', 'Real-Time Performance Monitoring', 'AI-Driven Optimization']
  ],
  [
    'sase/adem',
    'Prisma® SASE',
    'Autonomous Digital Experience Management (ADEM)',
    'Proactively monitor and optimize the digital experience of users across all applications and networks with full end-to-end visibility and AI-driven insights.',
    [{ value: '360°', label: 'User Experience Visibility' }],
    ['End-to-End Monitoring', 'AI-Driven Root Cause Analysis', 'User Experience Scoring', 'Proactive Alerting', 'Self-Healing Networks', 'SLA Monitoring']
  ],
  [
    'sase/enterprise-data-loss-prevention',
    'Prisma® SASE',
    'Enterprise Data Loss Prevention',
    'Comprehensive cloud-delivered DLP that protects sensitive data across all channels — SaaS, web, private applications, and endpoints — from a single policy engine.',
    [{ value: '1,000+', label: 'Data Patterns Out-of-the-Box' }],
    ['Unified DLP Policy', 'ML Data Classification', 'SaaS DLP', 'Web DLP', 'Endpoint DLP', 'Compliance Reporting']
  ],
  [
    'sase/remote-browser-isolation',
    'Prisma® SASE',
    'Remote Browser Isolation',
    'Protect users from web-borne threats by executing web content in a remote cloud environment, delivering a zero-trust browsing experience with no impact on productivity.',
    [{ value: '100%', label: 'Browser-Based Threats Neutralized' }],
    ['Cloud Rendering', 'Zero-Day Protection', 'Phishing Prevention', 'Data Exfiltration Prevention', 'BYOD Security', 'Transparent User Experience']
  ],
  [
    'sase/saas-security',
    'Prisma® SASE',
    'SaaS Security',
    'Discover, assess, and secure all SaaS applications — both sanctioned and unsanctioned — with inline CASB and API-based CASB capabilities.',
    [{ value: '54,000+', label: 'SaaS Applications Covered' }],
    ['Inline CASB', 'API-Based CASB', 'Shadow IT Discovery', 'Data Loss Prevention', 'Threat Detection', 'Compliance Enforcement']
  ],
  [
    'sase/ai-access-security',
    'Prisma® SASE',
    'AI Access Security',
    'Safely enable the use of generative AI tools in your organisation by providing visibility, access control, and data protection for AI applications.',
    [{ value: '1,000+', label: 'AI Applications Covered' }],
    ['AI App Discovery', 'Granular AI Controls', 'Sensitive Data Protection', 'Prompt Injection Prevention', 'AI Usage Visibility', 'Policy Enforcement']
  ],
  [
    'sase/secure-work-on-any-device',
    'Prisma® SASE',
    'Secure Work on Any Device',
    'Enable secure access to enterprise applications from any device — managed, unmanaged, or BYOD — with zero trust principles and consistent policy enforcement.',
    [],
    ['ZTNA for Any Device', 'BYOD Security', 'Managed Device Integration', 'Agentless Access', 'Device Posture Checking', 'Adaptive Access Policies']
  ],
  // ── AI SECURITY ───────────────────────────────────────────────────────────
  [
    'ai-security/prisma-airs',
    'Precision AI®',
    'Prisma® AIRS — AI Runtime Security',
    'The industry\'s first comprehensive security platform for AI systems — protecting AI agents, models, and the data they process against emerging threats in real time.',
    [{ value: '100%', label: 'AI Attack Surface Coverage' }],
    ['AI Agent Security', 'AI Model Protection', 'Training Data Security', 'Inference Security', 'Prompt Injection Detection', 'AI Behavioral Analytics']
  ],
  // ── CORTEX ────────────────────────────────────────────────────────────────
  [
    'cortex/cortex-xsiam',
    'Cortex® SecOps Platform',
    'Cortex® XSIAM',
    'The AI-driven security operations platform that automates detection, investigation, and response — enabling 80%+ reduction in analyst effort and 90% reduction in MTTR.',
    [{ value: '90%', label: 'Reduction in MTTR' }, { value: '480B', label: 'Endpoints Scanned Daily' }],
    ['AI-Powered Detection', 'Automated Investigation', 'Threat Intelligence Integration', 'Unified Data Layer', 'Machine Learning Correlation', 'Automated Response Playbooks']
  ],
  [
    'cortex/cortex-xdr',
    'Cortex® SecOps Platform',
    'Cortex® XDR',
    'The industry\'s first extended detection and response platform that natively integrates endpoint, network, and cloud data to stop sophisticated attacks.',
    [{ value: '480B', label: 'Endpoints Scanned Daily' }, { value: '700+', label: 'Partner Integrations' }],
    ['Endpoint Protection', 'Network Detection', 'Cloud Data Integration', 'Behavioral Analytics', 'Root Cause Analysis', 'Guided Investigation']
  ],
  [
    'cortex/cortex-xsoar',
    'Cortex® SecOps Platform',
    'Cortex® XSOAR',
    'The industry\'s most comprehensive SOAR platform with 750+ integrations and AI-powered automation that enables analysts to respond 10x faster.',
    [{ value: '750+', label: 'Integrations' }, { value: '10x', label: 'Faster Response' }],
    ['Security Orchestration', 'Automated Playbooks', 'Case Management', 'Threat Intelligence Management', 'War Room Collaboration', 'Metrics & Reporting']
  ],
  [
    'cortex/cortex-xpanse',
    'Cortex® SecOps Platform',
    'Cortex® Xpanse',
    'Continuously discover, evaluate, and mitigate attack surface risks across your entire internet-facing footprint — including unknown and unmanaged assets.',
    [{ value: '100%', label: 'Attack Surface Discovery' }],
    ['Asset Discovery', 'Risk Prioritization', 'Exposure Management', 'Shadow IT Detection', 'Third-Party Risk', 'Remediation Tracking']
  ],
  [
    'cortex/managed-detection-and-response',
    'Cortex® SecOps Platform',
    'Managed Detection and Response (MDR)',
    'Unit 42 MDR delivers 24/7/365 threat monitoring, detection, and response from elite security experts — extending your team without expanding headcount.',
    [{ value: '24/7', label: 'Monitoring' }, { value: '15 min', label: 'Mean Time to Respond' }],
    ['24/7 SOC Monitoring', 'Elite Threat Hunters', 'Incident Response', 'Threat Intelligence', 'Executive Reporting', 'On-Demand Expertise']
  ],
  [
    'cortex/managed-xsiam',
    'Cortex® SecOps Platform',
    'Managed XSIAM',
    'Fully managed XSIAM deployment with Unit 42 experts operating the platform on your behalf — delivering enterprise-grade SecOps without the operational burden.',
    [{ value: '90%', label: 'MTTR Reduction' }],
    ['Expert-Led Deployment', 'Continuous Tuning', 'Threat Hunting', 'Incident Response', 'Platform Optimization', 'Quarterly Business Reviews']
  ],
  [
    'cortex/fight-ai-with-ai',
    'Cortex® SecOps Platform',
    'Fight AI with AI',
    'Attackers are using AI to create more sophisticated threats. Precision AI® in Cortex fights back with autonomous detection, prevention, and response that outpaces adversaries.',
    [{ value: '90%', label: 'Reduction in MTTR' }, { value: '15x', label: 'Recognized Security Leader' }],
    ['AI Threat Detection', 'Autonomous Response', 'Adversarial ML Resistance', 'AI Model Monitoring', 'Predictive Analytics', 'Behavioral Baselining']
  ],
  [
    'cortex/cloud/application-security',
    'Cortex Cloud',
    'Application Security',
    'Shift security left with AI-powered static analysis, software composition analysis, and secrets detection integrated directly into developer workflows.',
    [{ value: '90%', label: 'Risk Reduction with Shift Left' }],
    ['SAST', 'SCA', 'Secrets Detection', 'IaC Security', 'API Security', 'CI/CD Integration']
  ],
  [
    'cortex/cloud/cloud-posture-security',
    'Cortex Cloud',
    'Cloud Posture Security (CSPM)',
    'Continuously monitor and improve your cloud security posture across multi-cloud environments with AI-driven risk prioritization and automated remediation guidance.',
    [{ value: '25x', label: 'Reduction in Alerts' }],
    ['Multi-Cloud Visibility', 'AI Risk Prioritization', 'Compliance Monitoring', 'Misconfiguration Detection', 'Remediation Guidance', 'Attack Path Analysis']
  ],
  [
    'cortex/cloud/runtime-security',
    'Cortex Cloud',
    'Runtime Security (CWPP)',
    'Protect cloud workloads at runtime with behavioral threat detection, vulnerability management, and incident response for containers, VMs, and serverless functions.',
    [{ value: '25x', label: 'Reduction in Alerts' }],
    ['Container Security', 'VM Protection', 'Serverless Security', 'Runtime Threat Detection', 'Vulnerability Management', 'Forensics & Incident Response']
  ],
  // ── IDIRA ─────────────────────────────────────────────────────────────────
  [
    'idira/human',
    'Idira® Identity Security',
    'Human Identity Security',
    'Secure every human identity — employees, contractors, and partners — with industry-leading PAM, IAM, and governance capabilities powered by AI.',
    [{ value: '10K', label: 'Customers' }, { value: '55%', label: 'Fortune 500' }],
    ['Privileged Access Management', 'Identity & Access Management', 'Identity Governance', 'Endpoint Privilege Manager', 'Vendor Access', 'Workforce Password Management']
  ],
  [
    'idira/human/privileged-access-management',
    'Idira® Identity Security',
    'Privileged Access Management (PAM)',
    'Control, monitor, and audit privileged access to critical systems with AI-powered PAM that adapts to modern hybrid IT environments.',
    [{ value: '10K', label: 'Customers' }, { value: '55%', label: 'Fortune 500' }],
    ['Vault & Rotate Credentials', 'Just-in-Time Access', 'Session Recording', 'Privileged Task Automation', 'Threat Analytics', 'Zero Standing Privileges']
  ],
  [
    'idira/human/identity-and-access-management',
    'Idira® Identity Security',
    'Identity and Access Management (IAM)',
    'Deliver seamless, secure access for all users with AI-powered identity intelligence, adaptive MFA, and single sign-on across all applications.',
    [],
    ['Single Sign-On', 'Adaptive MFA', 'Lifecycle Management', 'Directory Services', 'Passwordless Authentication', 'Identity Intelligence']
  ],
  [
    'idira/human/endpoint-privilege-manager',
    'Idira® Identity Security',
    'Endpoint Privilege Manager',
    'Eliminate local admin rights and enforce least privilege across all Windows and Mac endpoints without disrupting productivity.',
    [],
    ['Least Privilege Enforcement', 'Application Control', 'Just-in-Time Elevation', 'Ransomware Protection', 'Audit & Compliance', 'macOS & Windows Support']
  ],
  [
    'idira/human/identity-governance',
    'Idira® Identity Security',
    'Identity Governance & Administration (IGA)',
    'Automate access certifications, enforce separation of duties, and maintain continuous compliance across your entire identity estate.',
    [],
    ['Access Certification', 'Role Management', 'SoD Enforcement', 'Automated Provisioning', 'Compliance Reporting', 'AI-Driven Access Reviews']
  ],
  [
    'idira/human/workforce-password-management',
    'Idira® Identity Security',
    'Workforce Password Management',
    'Eliminate password-related breaches with enterprise-grade password management that integrates with your existing IAM and SSO infrastructure.',
    [],
    ['Password Vaulting', 'Auto-Fill & Discovery', 'Zero-Knowledge Architecture', 'SSO Integration', 'Password Health Monitoring', 'Admin Controls']
  ],
  [
    'idira/human/vendor-privileged-access',
    'Idira® Identity Security',
    'Vendor Privileged Access',
    'Secure and control privileged access for third-party vendors and contractors without requiring VPN or installing agents on remote endpoints.',
    [],
    ['Agentless Access', 'Session Monitoring', 'Just-in-Time Provisioning', 'Vendor Onboarding', 'Approval Workflows', 'Audit Trails']
  ],
  [
    'idira/machine',
    'Idira® Identity Security',
    'Machine Identity Security',
    'Discover, manage, and secure all non-human identities — secrets, certificates, API keys, and service accounts — across your entire infrastructure.',
    [],
    ['Secrets Management', 'Certificate Lifecycle Management', 'SSH Key Management', 'API Key Security', 'Service Account Governance', 'Workload Identity']
  ],
  [
    'idira/machine/secrets-management',
    'Idira® Identity Security',
    'Secrets Management',
    'Centrally manage and secure all secrets — API keys, passwords, certificates, and tokens — used by applications, services, and DevOps pipelines.',
    [],
    ['Dynamic Secrets', 'Secrets Rotation', 'Developer-Friendly APIs', 'CI/CD Integration', 'Cloud-Native Support', 'Audit Logging']
  ],
  [
    'idira/machine/unified-secrets-governance',
    'Idira® Identity Security',
    'Unified Secrets Governance',
    'Gain complete visibility and control over all secrets across your organization, eliminating secrets sprawl and ensuring continuous compliance.',
    [],
    ['Secrets Discovery', 'Centralized Policy', 'Compliance Reporting', 'Risk Scoring', 'Remediation Workflows', 'Multi-Vault Support']
  ],
  [
    'idira/machine/application-credentials-delivery',
    'Idira® Identity Security',
    'Application Credentials Delivery',
    'Securely inject credentials into applications and workloads at runtime — eliminating hardcoded secrets and reducing credential exposure risk.',
    [],
    ['Runtime Injection', 'Just-in-Time Credentials', 'Zero Hardcoded Secrets', 'Kubernetes Integration', 'Cloud-Native Support', 'Audit & Compliance']
  ],
  [
    'idira/agentic',
    'Idira® Identity Security',
    'Agentic Identity Security',
    'Secure AI agents and autonomous systems with the industry\'s first identity security platform purpose-built for non-human, AI-driven actors.',
    [],
    ['AI Agent Identity', 'Agentic PAM', 'AI Credential Management', 'Behavioral Monitoring', 'Least Privilege for AI', 'Audit & Governance']
  ],
  [
    'idira/2025-magic-quadrant-report-for-pam',
    'Idira® Identity Security',
    'Gartner® Magic Quadrant™ for PAM 2025',
    'Palo Alto Networks has been recognized as a Leader in the 2025 Gartner® Magic Quadrant™ for Privileged Access Management for the third consecutive year.',
    [],
    ['Leader Recognition', 'Completeness of Vision', 'Ability to Execute', 'Customer Success', 'Innovation Leadership', 'Global Coverage']
  ],
  // ── UNIT 42 ───────────────────────────────────────────────────────────────
  [
    'unit42/retainer',
    'Unit 42® Threat Intelligence & IR',
    'Unit 42 Retainer',
    'Engage Unit 42 before an incident occurs. Our Retainer service gives you on-demand access to world-class incident responders, threat hunters, and security experts.',
    [{ value: '24/7', label: 'Availability' }, { value: '1K+', label: 'IR Engagements Per Year' }],
    ['Pre-Negotiated Response', 'Rapid Mobilization', 'Threat Hunting Credits', 'Tabletop Exercises', 'Executive Briefings', 'Dedicated Account Team']
  ],
  [
    'unit42/incident-response',
    'Unit 42® Threat Intelligence & IR',
    'Incident Response',
    'When a breach occurs, Unit 42\'s elite incident response team deploys within hours to contain the threat, investigate the root cause, and restore operations.',
    [{ value: '1K+', label: 'Incidents Handled Per Year' }, { value: '24/7', label: 'Response Availability' }],
    ['Rapid Deployment', 'Threat Containment', 'Forensic Investigation', 'Malware Analysis', 'Evidence Preservation', 'Executive Communication Support']
  ],
  [
    'unit42/assess',
    'Unit 42® Threat Intelligence & IR',
    'Security Assessments',
    'Proactively identify vulnerabilities and strengthen your security posture with Unit 42 red team, pen testing, and compromise assessment services.',
    [{ value: '200+', label: 'Threat Researchers' }],
    ['Red Team Operations', 'Penetration Testing', 'Compromise Assessment', 'Purple Team Exercises', 'Ransomware Readiness', 'Cloud Security Assessment']
  ],
  [
    'unit42/respond',
    'Unit 42® Threat Intelligence & IR',
    'Respond Services',
    'Unit 42 Respond services help organisations recover from cyber incidents faster with expert-led remediation, recovery planning, and lessons-learned workshops.',
    [{ value: '24/7', label: 'Availability' }],
    ['Threat Containment', 'System Remediation', 'Recovery Planning', 'Business Continuity Support', 'Post-Incident Review', 'Hardening Recommendations']
  ],
  [
    'unit42/respond/managed-detection-response',
    'Unit 42® Threat Intelligence & IR',
    'Managed Detection & Response (MDR)',
    'Unit 42 MDR provides continuous monitoring, threat detection, and response by elite security analysts — acting as an extension of your security team.',
    [{ value: '24/7', label: 'Monitoring' }, { value: '15 min', label: 'MTTR' }],
    ['24/7 SOC', 'Threat Hunting', 'Incident Response', 'Threat Intelligence', 'Custom Playbooks', 'Reporting & Metrics']
  ],
  [
    'unit42/threat-intelligence-partners',
    'Unit 42® Threat Intelligence & IR',
    'Threat Intelligence Partners',
    'Unit 42 partners with law enforcement, ISACs, and industry groups worldwide to share intelligence and combat the most dangerous threat actors.',
    [{ value: '150+', label: 'Law Firm Partners' }, { value: '30M', label: 'Malware Samples Analyzed Daily' }],
    ['Law Enforcement Collaboration', 'ISAC Membership', 'Intelligence Sharing', 'Joint Operations', 'Threat Briefings', 'Research Publications']
  ],
  [
    'unit42/transform',
    'Unit 42® Threat Intelligence & IR',
    'Security Transformation',
    'Unit 42 advisors help organisations transform their security programs with strategic consulting, security architecture, and program development services.',
    [],
    ['Strategic Advisory', 'Security Architecture', 'Program Development', 'Executive Workshops', 'Roadmap Planning', 'Maturity Assessment']
  ],
  [
    'unit42/contact-unit42',
    'Unit 42® Threat Intelligence & IR',
    'Contact Unit 42',
    'Reach out to Unit 42 for immediate incident response, security consulting, or to learn more about our threat intelligence and managed services.',
    [{ value: '24/7', label: 'Emergency Response' }],
    ['Emergency Hotline', 'Retainer Inquiry', 'Consulting Request', 'Intelligence Briefing', 'Partnership Inquiry', 'General Inquiry']
  ],
  [
    'unit42/combat-risks-frontier-ai',
    'Unit 42® Threat Intelligence & IR',
    'Combating Risks at the AI Frontier',
    'Unit 42 researchers investigate AI-enabled threats and develop strategies to help organisations defend against AI-powered attacks and secure their own AI systems.',
    [{ value: '200+', label: 'Threat Researchers' }],
    ['AI Threat Research', 'Adversarial ML', 'Prompt Injection Analysis', 'AI Red Teaming', 'Deepfake Detection', 'AI Security Frameworks']
  ],
  // ── INDUSTRY ──────────────────────────────────────────────────────────────
  [
    'industry/public-sector',
    'Industries',
    'Public Sector Cybersecurity',
    'Protecting government agencies, defense organizations, and critical infrastructure with Zero Trust security and AI-powered threat prevention.',
    [],
    ['Zero Trust for Government', 'Classified Network Security', 'OT/ICS Protection', 'FedRAMP Authorized', 'CMMC Compliance', 'Insider Threat Detection']
  ],
  [
    'industry/financial-services',
    'Industries',
    'Financial Services Cybersecurity',
    'Securing banks, insurance companies, and capital markets firms against advanced threats with real-time fraud detection and regulatory compliance.',
    [],
    ['Real-Time Fraud Detection', 'PCI DSS Compliance', 'SOX Compliance', 'Insider Threat Detection', 'API Security', 'Third-Party Risk Management']
  ],
  [
    'industry/manufacturing',
    'Industries',
    'Manufacturing Cybersecurity',
    'Protecting manufacturing operations from OT/IT convergence risks with Zero Trust segmentation and AI-powered threat prevention for industrial environments.',
    [],
    ['OT/IT Security', 'ICS/SCADA Protection', 'Zero Trust Segmentation', 'Supply Chain Security', 'Remote Access Security', 'Industrial Protocol Monitoring']
  ],
  [
    'industry/healthcare',
    'Industries',
    'Healthcare Cybersecurity',
    'Securing hospitals, medical devices, and patient data with purpose-built healthcare security that maintains compliance and clinical availability.',
    [],
    ['Medical IoT Security', 'HIPAA Compliance', 'EHR Protection', 'Ransomware Defense', 'Clinical Network Segmentation', 'Telehealth Security']
  ],
  [
    'industry/small-medium-business-portfolio',
    'Industries',
    'Small & Medium Business Security',
    'Enterprise-grade cybersecurity made accessible for SMBs — simple to deploy, easy to manage, and powerful enough to stop sophisticated attacks.',
    [],
    ['Easy Deployment', 'Managed Security Services', 'Cost-Effective Licensing', 'Cloud-Delivered Security', 'Unified Management', '24/7 Threat Monitoring']
  ],
  // ── WHY PANW ──────────────────────────────────────────────────────────────
  [
    'why-paloaltonetworks/platformization',
    'Why Palo Alto Networks',
    'Platformization',
    'Replace fragmented point products with a unified AI-powered security platform — reducing complexity, cost, and risk while dramatically improving security outcomes.',
    [{ value: '90%', label: 'MTTR Reduction' }, { value: '30.9B', label: 'Attacks Blocked Per Day' }],
    ['Unified Platform', 'AI-Native Security', 'Reduced Complexity', 'Integrated Intelligence', 'Consolidated Visibility', 'Lower Total Cost']
  ],
  [
    'why-paloaltonetworks/cyber-predictions',
    'Why Palo Alto Networks',
    'Cybersecurity Predictions',
    'Unit 42 threat researchers share their predictions for the evolving threat landscape and what organizations need to prepare for in the year ahead.',
    [],
    ['AI-Powered Attacks', 'State-Sponsored Threats', 'Supply Chain Attacks', 'Ransomware Evolution', 'Cloud Security Risks', 'Identity-Based Attacks']
  ],
  [
    'why-paloaltonetworks/nam-cxo-portfolio',
    'Why Palo Alto Networks',
    'Executive Portfolio Overview',
    'An executive-level overview of the complete Palo Alto Networks portfolio — designed for CXOs who need to understand the strategic value of platformization.',
    [],
    ['Platform Overview', 'ROI Analysis', 'Competitive Differentiation', 'Analyst Recognition', 'Customer Success Stories', 'Strategic Roadmap']
  ],
  // ── SERVICES ──────────────────────────────────────────────────────────────
  [
    'services/education',
    'Services',
    'Education & Training',
    'Build cybersecurity expertise with Palo Alto Networks\' world-class training programs, certifications, and digital learning platforms.',
    [],
    ['PCNSA Certification', 'PCCSA Certification', 'Digital Learning', 'Live Instructor-Led Training', 'Learning Paths', 'Corporate Training Programs']
  ],
  [
    'services/customer-success-tools',
    'Services',
    'Customer Success Tools',
    'Maximize the value of your Palo Alto Networks investment with dedicated customer success tools, resources, and expert guidance.',
    [],
    ['Onboarding Assistance', 'Health Checks', 'Best Practice Guides', 'Community Access', 'Success Plans', 'Technical Account Management']
  ],
  // ── LEGAL / MISC ──────────────────────────────────────────────────────────
  [
    'legal-notices/privacy',
    'Legal',
    'Privacy Policy',
    'Learn how Palo Alto Networks collects, uses, and protects your personal information in accordance with applicable privacy laws.',
    [], []
  ],
  [
    'legal-notices/terms-of-use',
    'Legal',
    'Terms of Use',
    'Review the terms and conditions governing your use of Palo Alto Networks websites, products, and services.',
    [], []
  ],
  [
    'legal-notices/trust-center',
    'Legal',
    'Trust Center',
    'Explore Palo Alto Networks\' commitments to security, privacy, and compliance — including certifications, attestations, and audit reports.',
    [],
    ['SOC 2 Type II', 'ISO 27001', 'FedRAMP Authorization', 'GDPR Compliance', 'Privacy Shield', 'Vulnerability Disclosure']
  ],
  [
    'legal-notices/trust-center/compliance',
    'Legal',
    'Compliance',
    'View the full list of compliance certifications and regulatory attestations maintained by Palo Alto Networks.',
    [], []
  ],
  [
    'legal',
    'Legal',
    'Legal Notices',
    'Access all legal information, policies, and disclosures related to Palo Alto Networks products and services.',
    [], []
  ],
  [
    'security-disclosure',
    'Legal',
    'Security Disclosure Policy',
    'Learn how to responsibly disclose security vulnerabilities in Palo Alto Networks products and services.',
    [], []
  ],
  // ── PRISMA CLOUD REDIRECT ─────────────────────────────────────────────────
  [
    'prisma/cloud',
    'Cortex Cloud',
    'Prisma® Cloud',
    'Prisma Cloud is now Cortex Cloud — the most complete real-time cloud security platform. Discover unified security across your entire cloud estate.',
    [{ value: '90%', label: 'Risk Reduction' }, { value: '25x', label: 'Alert Reduction' }],
    ['CSPM', 'CWPP', 'CIEM', 'DSPM', 'Application Security', 'AI Security']
  ],
  // ── COMPANY ───────────────────────────────────────────────────────────────
  [
    'company/newsroom',
    'Company',
    'Newsroom',
    'Stay up to date with the latest news, press releases, and media coverage from Palo Alto Networks.',
    [], []
  ],
]

// ─── Template generator ───────────────────────────────────────────────────────

function makePageContent(eyebrow, title, description, stats, features) {
  // Convert string stat values like '70K', '30.9B', '95%' → { value: number, suffix: string }
  function parseStat(s) {
    const raw = s.value
    const suffixMatch = raw.match(/[%BKMx+/]+$/)
    const suffix = suffixMatch ? suffixMatch[0] : ''
    const numStr = raw.replace(/[^0-9.]/g, '')
    const value = numStr ? parseFloat(numStr) : 0
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
    return { value, suffix, decimals, label: s.label }
  }

  const statsCode = stats.length > 0
    ? `stats={[${stats.map(s => {
        const p = parseStat(s)
        return `{ value: ${p.value}, label: '${p.label}'${p.suffix ? `, suffix: '${p.suffix}'` : ''}${p.decimals > 0 ? `, decimals: ${p.decimals}` : ''} }`
      }).join(', ')}]}`
    : ''

  const featuresCode = features.length > 0
    ? `features={[${features.map(f => `{ title: '${f}', description: 'Enterprise-grade ${f.toLowerCase()} powered by Precision AI® to stop advanced threats in real time.' }`).join(',\n        ')}]}`
    : ''

  return `import type { Metadata } from 'next'
import { ProductPage } from '@/components/sections/platform/ProductPage'

export const metadata: Metadata = {
  title: '${title} | Palo Alto Networks',
  description: '${description.replace(/'/g, "\\'")}',
}

export default function Page() {
  return (
    <ProductPage
      eyebrow="${eyebrow}"
      title="${title}"
      description="${description.replace(/"/g, '\\"')}"
      ${statsCode}
      ${featuresCode}
    />
  )
}
`
}

// ─── Write files ──────────────────────────────────────────────────────────────

let count = 0
for (const [route, eyebrow, title, description, stats, featureLabels] of PAGES) {
  const dir = join(ROOT, 'app', '(site)', route)
  mkdirSync(dir, { recursive: true })
  const content = makePageContent(eyebrow, title, description, stats, featureLabels)
  writeFileSync(join(dir, 'page.tsx'), content, 'utf8')
  count++
  console.log(`✓ ${route}`)
}

console.log(`\nDone! Generated ${count} page.tsx files.`)
