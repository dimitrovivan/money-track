/**
 * External dependencies
 */
import Link from 'next/link';

/**
 * Internal dependencies
 */
import Logo from '@/svg/logo.svg';

const Header = () => {
  return (
    <div>
      <div>
        <Link href='/' >
          {/* <Logo className="w-full" /> */}
        </Link>
      </div>
    </div>
  )
}

export default Header
