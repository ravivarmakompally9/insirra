import { Card } from "./card"

const cardContent = {
  title: "About InsirraForge",
  description: "At InsirraForge, we connect startups, mentors, and investors in one smart ecosystem. Our AI-powered platform makes it easier to find the right people, track progress, and unlock opportunities. Join the waitlist and be part of the future of growth."
}

export function DefaultCardDemo() {
  return (
    <Card {...cardContent} className="max-w-[400px] bg-black border-neutral-800 text-white" />
  )
}

export function DotsCardDemo() {
  return (
    <Card variant="dots" {...cardContent} className="max-w-[400px] bg-black border-neutral-800 text-white" />
  )
}

export function GradientCardDemo() {
  return (
    <Card variant="gradient" {...cardContent} className="max-w-[400px] bg-black border-neutral-800 text-white" />
  )
}

export function PlusCardDemo() {
  return (
    <Card variant="plus" {...cardContent} className="max-w-[400px] bg-black border-neutral-800 text-white" />
  )
}

export function NeubrutalismCardDemo() {
  return (
    <Card variant="neubrutalism" {...cardContent} className="max-w-[400px] bg-black border-neutral-800 text-white" />
  )
}

export function InnerCardDemo() {
  return (
    <Card variant="inner" {...cardContent} className="max-w-[400px] bg-black border-neutral-800 text-white" />
  )
}

export function LiftedCardDemo() {
  return (
    <Card variant="lifted" {...cardContent} className="max-w-[400px] bg-black border-neutral-800 text-white" />
  )
}

export function CornersCardDemo() {
  return (
    <Card variant="corners" {...cardContent} className="max-w-[400px] bg-black border-neutral-800 text-white" />
  )
}
