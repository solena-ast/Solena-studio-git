'use client'

import Hero from '@/components/sections/Hero'
import Thesis from '@/components/sections/Thesis'
import WhatWeBuild from '@/components/sections/WhatWeBuild'
import EcosystemMap from '@/components/sections/EcosystemMap'
import TheStandard from '@/components/sections/TheStandard'
import Transformations from '@/components/sections/Transformations'
import Journal from '@/components/sections/Journal'
import Future from '@/components/sections/Future'
import Invitation from '@/components/sections/Invitation'

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Hero />
      <Thesis />
      <WhatWeBuild />
      <EcosystemMap />
      <TheStandard />
      <Transformations />
      <Journal />
      <Future />
      <Invitation />
    </main>
  )
}