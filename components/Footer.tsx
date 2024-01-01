import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react';

export default function MyFooter() {
  return (
    <Footer container>
      <FooterCopyright by="CodingJosh" year={new Date().getFullYear()} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinkGroup>
      <div>
        <small className='text-center text-gray-500 dark:text-gray-400'>
          Built with <a href="https://nuxt.com/" target="_blank">Nuxt</a> &ndash; Powered by <a href="https://pages.cloudflare.com/" target="_blank">Cloudflare Pages</a>
        </small>
      </div>
    </Footer>
  );
}
