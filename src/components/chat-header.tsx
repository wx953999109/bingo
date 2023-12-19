import LogoIcon from '@/assets/images/ic_launcher.png'
import Image from 'next/image'

export function ChatHeader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image alt="logo" src={LogoIcon} width={60} style={{
              borderRadius: "30px",
            }}/>
      <div className="mt-4 mb-8 font-bold header-title">知之AI强大的人工智能应用</div>
    </div>
  )
}
