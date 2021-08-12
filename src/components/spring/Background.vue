<template>
  <svg preserveAspectRatio="none" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1012 525">
    <defs/>
    <g id="Spring" clip-path="url(#clip0)">
      <path id="backgroundsolid" fill="#C2F4B9" d="M0 0h1012v525H0z"/>
      <path id="background" fill="url(#paint0_linear)" fill-opacity=".5" d="M0 0h1012v525H0z"/>
      <g id="sun">
        <g id="out" filter="url(#filter0_f)">
          <circle cx="506.5" cy="41.5" r="41.5" fill="url(#paint1_radial)"/>
        </g>
        <g id="in" filter="url(#filter1_f)">
          <circle cx="506.5" cy="41.5" r="34.1673" fill="url(#paint2_radial)"/>
        </g>
      </g>
      <g id="dark" filter="url(#filter2_f)">
        <path fill="url(#paint3_linear)" fill-opacity=".4" d="M0 0h1012v525H0z"/>
      </g>
      <g id="road" filter="url(#filter3_d)">
        <path fill="url(#paint4_radial)" d="M436.898 253h135.921L685 525H328l108.898-272z" shape-rendering="crispEdges"/>
      </g>
    </g>
    <defs>
      <filter id="filter0_f" width="103" height="103" x="455" y="-10" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="5"/>
      </filter>
      <filter id="filter1_f" width="70.3346" height="70.3346" x="471.333" y="6.3327" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation=".5"/>
      </filter>
      <filter id="filter2_f" width="1016" height="529" x="-2" y="-2" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="1"/>
      </filter>
      <filter id="filter3_d" width="377" height="292" x="318" y="253" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="10"/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear" x1="506" x2="506" y1="186.5" y2="525" gradientUnits="userSpaceOnUse">
        <stop stop-color="#5263FF"/>
        <stop offset=".295057" stop-color="#949FFF" stop-opacity=".424646"/>
        <stop offset="1" stop-color="#C5CAFF" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="matrix(.15779 15.6217 -15.6217 .15779 506.342 67.3783)" gradientUnits="userSpaceOnUse">
        <stop offset=".90625" stop-color="#F4ECD8"/>
        <stop offset="1" stop-color="#F4ECD8" stop-opacity=".7"/>
      </radialGradient>
      <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientTransform="rotate(90 232.49996378 274.000442) scale(22.9508)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FAE7B9"/>
        <stop offset="1" stop-color="#F2D58F"/>
      </radialGradient>
      <linearGradient id="paint3_linear" x1="506" x2="506" y1="0" y2="525" gradientUnits="userSpaceOnUse">
        <stop stop-opacity=".6"/>
        <stop offset=".0001" stop-color="#020202"/>
        <stop offset=".34375" stop-color="#020202" stop-opacity=".8"/>
        <stop offset=".655304" stop-color="#8E8E8E"/>
        <stop offset="1" stop-color="#C5C5C5" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientTransform="matrix(0 272 -327 0 506.5 253)" gradientUnits="userSpaceOnUse">
        <stop offset=".458333" stop-color="#4A4A4A"/>
        <stop offset="1" stop-color="#4A4A4A" stop-opacity=".8"/>
      </radialGradient>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h1012v525H0z"/>
      </clipPath>
    </defs>
  </svg>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  setup () {
    onMounted(() => {
      const Background = gsap.timeline()
      ScrollTrigger.create({
        animation: Background,
        trigger: '.scrollElement',
        start: '0.5% top',
        end: '15% 100%',
        scrub: 1
      })
      Background.from('#backgroundsolid, #background', { opacity: 0, ease: 'none' })

      const Sun = gsap.timeline()
      ScrollTrigger.create({
        animation: Sun,
        trigger: '.scrollElement',
        start: '15% top',
        end: '30% 100%',
        scrub: 2
      })
      Sun.fromTo('#sun', 2, { y: '-100%', scale: 1, autoAlpha: 1, ease: 'none', transformOrigin: '50% 50%' }, { y: '400%', scale: 2, autoAlpha: 2, ease: 'none', transformOrigin: '50% 50%' })

      const Dark = gsap.timeline()
      ScrollTrigger.create({
        animation: Dark,
        trigger: '.scrollElement',
        start: '22% top',
        end: '32% 100%',
        scrub: 2
      })
      Dark.from('#dark', 2, { y: '-100%', ease: 'none' })

      const bigger = gsap.timeline()
      ScrollTrigger.create({
        animation: bigger,
        trigger: '.scrollElement',
        start: '30% top',
        end: '41% 100%',
        scrub: 1
      })
      bigger.to('#road, .trees', { scale: 6, autoAlpha: 6, transformOrigin: '50% 50%' })
    })
  }
}
</script>

<style scoped>

</style>
