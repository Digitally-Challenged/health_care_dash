import {
  LayoutDashboard,
  Users,
  ClipboardList,
  AlertTriangle,
  Calendar,
} from 'lucide-react'

export interface NavItem {
  title: string
  icon: any
  href: string
  label?: string
}

export const navItems: NavItem[] = [
  {
    title: 'Overview',
    icon: LayoutDashboard,
    href: '/',
  },
  {
    title: 'Patients',
    icon: Users,
    href: '/patients',
    label: '128',
  },
  {
    title: 'Care Plans',
    icon: ClipboardList,
    href: '/care-plans',
  },
  {
    title: 'Risk Assessment',
    icon: AlertTriangle,
    href: '/risk-assessments',
  },
  {
    title: 'Appointments',
    icon: Calendar,
    href: '/appointments',
    label: '9',
  },
] 