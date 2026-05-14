import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {
  const data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">Blog pessoal | Copyright: {data}</p>

          <p className="text-lg">Acesse minhas redes sociais</p>

          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/douglas-santos-ds/" target='_blank'>
              <LinkedinLogoIcon size={48} weight="bold" />
            </a>

            <a href="https://github.com/DougSan7/" target='_blank'>
              <GithubLogoIcon size={48} weight="bold" />
            </a>
            
            <a href="https://www.instagram.com/douglas_san7/" target='_blank'>
              <InstagramLogoIcon size={48} weight="bold" />
            </a>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
