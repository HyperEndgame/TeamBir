export type Dept = 'materials' | 'developments' | 'transport' | 'luxury' | 'travel'

export type LeadStep =
  | 'department'
  | 'propertyType'
  | 'location'
  | 'timeline'
  | 'budget'
  | 'phone'
  | 'email'
  | 'done'

export interface LeadState {
  step: LeadStep
  department?: Dept
  propertyType?: 'commercial' | 'residential'
  location?: string
  timeline?: string
  budget?: string
  phone?: string
  email?: string
}

export const DEPT_LABELS: Record<Dept, string> = {
  materials: 'BIR Materials',
  developments: 'BIR Developments (Construction)',
  transport: 'BIR Transport',
  luxury: 'BIR Luxury Landing',
  travel: 'BIR Travel Plaza',
}

export const DEPT_CHOICES = Object.keys(DEPT_LABELS) as Dept[]

export const NEEDS_PROPERTY_TYPE: ReadonlySet<Dept> = new Set(['materials', 'developments'])

export const TIMELINE_CHOICES = ['ASAP', '1–3 months', '3–6 months', '6+ months / planning']

export const BUDGET_CHOICES = ['< $10k', '$10k–$50k', '$50k–$250k', '$250k+', 'Not sure yet']

const STEP_ORDER: LeadStep[] = [
  'department',
  'propertyType',
  'location',
  'timeline',
  'budget',
  'phone',
  'email',
  'done',
]

// ponytail: linear flow, add back-step if users ask.
export function nextStep(s: LeadState): LeadStep {
  const i = STEP_ORDER.indexOf(s.step)
  let next = STEP_ORDER[i + 1] ?? 'done'
  if (next === 'propertyType' && s.department && !NEEDS_PROPERTY_TYPE.has(s.department)) {
    next = STEP_ORDER[STEP_ORDER.indexOf('propertyType') + 1]
  }
  return next
}

export function promptFor(step: LeadStep, s: LeadState): string {
  switch (step) {
    case 'department':
      return 'Which team can we connect you with?'
    case 'propertyType':
      return 'Is this a commercial or residential project?'
    case 'location':
      return "What's the project location (city/area)?"
    case 'timeline':
      return "What's your timeline?"
    case 'budget':
      return "What's your budget range?"
    case 'phone':
      return "What's the best phone number to reach you?"
    case 'email':
      return "And your email address?"
    case 'done':
      return `Thanks — ${s.department ? DEPT_LABELS[s.department] : 'our team'} will reach out shortly.`
  }
}

export function validPhone(v: string): boolean {
  const digits = v.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 15
}

export function validEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

export function validDept(v: string): v is Dept {
  return Object.hasOwn(DEPT_LABELS, v)
}

export function isComplete(s: LeadState): boolean {
  if (!s.department || !s.location || !s.timeline || !s.budget || !s.phone || !s.email) return false
  if (NEEDS_PROPERTY_TYPE.has(s.department) && !s.propertyType) return false
  return true
}
