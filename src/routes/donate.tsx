import { createFileRoute, redirect } from '@tanstack/react-router'
import { site } from '@/data/site'

/** The old site had a /donate page; keep the URL alive and send people to Ko-fi. */
export const Route = createFileRoute('/donate')({
  beforeLoad: () => {
    throw redirect({ href: site.kofi })
  },
})
