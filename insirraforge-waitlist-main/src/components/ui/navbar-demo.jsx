import React from 'react'
import { Home, Target, Users, Mail } from 'lucide-react'
import { NavBar } from "./tubelight-navbar.jsx"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Features', url: '#features', icon: Target },
    { name: 'About', url: '#about', icon: Users },
    { name: 'Join Waitlist', url: '#waitlist', icon: Mail }
  ]

  return <NavBar items={navItems} />
}
