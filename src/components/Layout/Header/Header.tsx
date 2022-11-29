import Logo from '@/svg/logo.svg';

const Header = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-xs">
          <Logo className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default Header
